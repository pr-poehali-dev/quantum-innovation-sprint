import Icon from "@/components/ui/icon";

const features = [
  { icon: "MessageCircle", title: "Мгновенные сообщения", desc: "Чаты и голосовые сообщения без задержек" },
  { icon: "Users", title: "Группы и каналы", desc: "Создавай сообщества по интересам" },
  { icon: "Shield", title: "Безопасность", desc: "Сквозное шифрование всех переписок" },
  { icon: "Zap", title: "Быстро и легко", desc: "Работает даже при слабом интернете" },
];

export default function Featured() {
  return (
    <div id="features" className="bg-neutral-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <span className="inline-block text-brand text-sm font-semibold bg-brand/10 px-3 py-1 rounded-full mb-4">
              Возможности
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-5 leading-tight">
              Всё для общения<br />в одном месте
            </h2>
            <p className="text-neutral-500 text-base mb-10 leading-relaxed max-w-md">
              Живые чаты, истории, ленты и сообщества — всё, чтобы ты всегда был рядом с теми, кто важен.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon name={f.icon as "MessageCircle"} size={20} className="text-brand" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm mb-0.5">{f.title}</p>
                    <p className="text-neutral-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 bg-brand text-white px-6 py-3 text-sm font-semibold hover:bg-brand-dark transition-colors duration-200 cursor-pointer rounded-xl">
              Начать общение
            </button>
          </div>

          <div className="flex-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
              <img
                src="/images/woman-horse.jpg"
                alt="Общение"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 shadow-lg">
                <div className="w-9 h-9 bg-brand rounded-full flex items-center justify-center shrink-0">
                  <Icon name="MessageCircle" size={16} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-neutral-900">Новое сообщение</p>
                  <p className="text-xs text-neutral-500 truncate">Привет! Как дела?</p>
                </div>
                <span className="text-xs text-neutral-400 shrink-0">сейчас</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
