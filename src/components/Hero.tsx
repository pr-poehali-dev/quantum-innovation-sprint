import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const REGISTER_URL = "https://functions.poehali.dev/79a97167-3387-4c2f-9aee-d59c1d2400df";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(REGISTER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Что-то пошло не так");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Ошибка соединения. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[1]" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Уже 1 000 000+ пользователей онлайн
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-tight">
          Будь на связи<br />с теми, кто важен
        </h1>
        <p className="text-base md:text-lg max-w-xl mx-auto text-white/80 mb-10 leading-relaxed">
          Общайся, делись моментами и находи новых друзей — быстро, удобно и безопасно
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => { setOpen(true); setSubmitted(false); setError(""); setForm({ name: "", email: "", password: "" }); }}
            className="bg-brand text-white px-8 py-3.5 text-sm font-semibold hover:bg-brand-dark transition-colors duration-200 cursor-pointer rounded-xl shadow-lg"
          >
            Зарегистрироваться бесплатно
          </button>
          <a href="#download" className="bg-white/15 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 text-sm font-semibold hover:bg-white/25 transition-colors duration-200 cursor-pointer rounded-xl">
            Скачать приложение
          </a>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white w-full max-w-md p-8 relative rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 transition-colors cursor-pointer text-lg leading-none"
              >
                ✕
              </button>

              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎉</span>
                  </div>
                  <p className="text-xl font-bold mb-2">Добро пожаловать!</p>
                  <p className="text-neutral-500 text-sm">Вы успешно зарегистрировались в Connectly.</p>
                </div>
              ) : (
                <>
                  <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center mb-5">
                    <span className="text-white text-xl font-bold">C</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">Создать аккаунт</h2>
                  <p className="text-neutral-500 text-sm mb-6">Присоединяйтесь к Connectly — это бесплатно</p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Ваше имя"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                    <input
                      type="password"
                      required
                      placeholder="Пароль (минимум 8 символов)"
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                    {error && <p className="text-red-500 text-sm bg-red-50 rounded-xl px-3 py-2">{error}</p>}
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-brand text-white px-4 py-3 text-sm font-semibold hover:bg-brand-dark transition-colors duration-200 cursor-pointer mt-1 disabled:opacity-50 rounded-xl"
                    >
                      {loading ? "Загрузка..." : "Зарегистрироваться"}
                    </button>
                    <p className="text-xs text-neutral-400 text-center">Регистрируясь, вы соглашаетесь с условиями использования</p>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}