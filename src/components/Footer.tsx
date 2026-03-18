import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          <div className="flex-1 max-w-xs">
            <div className="text-xl font-bold mb-3">
              <span className="text-brand">C</span>onnectly
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              Социальная сеть для общения. Будь на связи с теми, кто важен — всегда и везде.
            </p>
            <div className="flex gap-3">
              {["MessageCircle", "Send", "Globe"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 bg-neutral-800 hover:bg-brand rounded-xl flex items-center justify-center transition-colors duration-200"
                >
                  <Icon name={icon as "MessageCircle"} size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-12 md:gap-20 flex-wrap">
            <div>
              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Платформа</h3>
              <div className="flex flex-col gap-2.5">
                {["О нас", "Возможности", "Безопасность", "Контакты"].map((l) => (
                  <a key={l} href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Сообщество</h3>
              <div className="flex flex-col gap-2.5">
                {["Блог", "События", "Правила", "Вступить"].map((l) => (
                  <a key={l} href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Скачать</h3>
              <div className="flex flex-col gap-2.5">
                {["App Store", "Google Play", "Windows", "macOS"].map((l) => (
                  <a key={l} href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs">© {new Date().getFullYear()} Connectly. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-xs transition-colors">Конфиденциальность</a>
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-xs transition-colors">Условия</a>
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-xs transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
