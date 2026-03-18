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

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          БУДЬ НА СВЯЗИ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 mb-10">
          Общайся с теми, кто важен. Находи новых друзей и оставайся рядом — всегда и везде
        </p>
        <button
          onClick={() => { setOpen(true); setSubmitted(false); setError(""); setForm({ name: "", email: "", password: "" }); }}
          className="bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer"
        >
          Зарегистрироваться
        </button>
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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-md p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors text-xl leading-none cursor-pointer"
              >
                ✕
              </button>

              {submitted ? (
                <div className="text-center py-8">
                  <p className="text-2xl font-bold mb-2">Добро пожаловать!</p>
                  <p className="text-neutral-500">Вы успешно зарегистрировались в Connectly.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold tracking-tight mb-1">Создать аккаунт</h2>
                  <p className="text-neutral-500 text-sm mb-6">Присоединяйтесь к Connectly уже сегодня</p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-wide text-neutral-500 block mb-1">Имя</label>
                      <input
                        type="text"
                        required
                        placeholder="Ваше имя"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-neutral-300 px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-neutral-500 block mb-1">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-neutral-300 px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wide text-neutral-500 block mb-1">Пароль</label>
                      <input
                        type="password"
                        required
                        placeholder="Минимум 8 символов"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="w-full border border-neutral-300 px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-black text-white px-4 py-3 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors duration-300 cursor-pointer mt-2 disabled:opacity-50"
                    >
                      {loading ? "Загрузка..." : "Зарегистрироваться"}
                    </button>
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