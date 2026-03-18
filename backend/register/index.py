import json
import os
import hashlib
import psycopg2


def handler(event: dict, context) -> dict:
    """Регистрация нового пользователя в социальной сети Connectly."""
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    email = body.get('email', '').strip().lower()
    password = body.get('password', '')

    if not name or not email or not password:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Заполните все поля'})
        }

    if len(password) < 8:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Пароль должен быть не менее 8 символов'})
        }

    password_hash = hashlib.sha256(password.encode()).hexdigest()

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    cur.execute("SELECT id FROM users WHERE email = '%s'" % email)
    if cur.fetchone():
        cur.close()
        conn.close()
        return {
            'statusCode': 409,
            'headers': headers,
            'body': json.dumps({'error': 'Пользователь с таким email уже существует'})
        }

    cur.execute(
        "INSERT INTO users (name, email, password_hash) VALUES ('%s', '%s', '%s') RETURNING id" % (
            name.replace("'", "''"),
            email.replace("'", "''"),
            password_hash
        )
    )
    user_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True, 'userId': user_id, 'name': name})
    }
