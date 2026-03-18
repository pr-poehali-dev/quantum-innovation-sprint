import Icon from "@/components/ui/icon";

export default function Download() {
  return (
    <div id="download" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#1a8bc4] via-brand to-[#54c0f5] rounded-3xl px-8 py-16 md:px-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="flex-1 relative z-10">
            <span className="inline-block text-white/80 text-sm font-medium bg-white/15 px-3 py-1 rounded-full mb-5">
              Мессенджер в твоём кармане
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              Скачай Rom-Muerte<br />и общайся везде
            </h2>
            <p className="text-white/70 text-base mb-8 leading-relaxed max-w-sm">
              Доступно для iOS и Android. Бесплатно и без рекламы.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-neutral-900 px-5 py-3.5 hover:bg-neutral-100 transition-colors duration-200 w-fit rounded-xl font-medium shadow-md"
              >
                <Icon name="Apple" size={22} />
                <div>
                  <p className="text-[10px] text-neutral-500 leading-none mb-0.5">Скачать в</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white/15 border border-white/30 text-white px-5 py-3.5 hover:bg-white/25 transition-colors duration-200 w-fit rounded-xl font-medium"
              >
                <Icon name="Smartphone" size={22} />
                <div>
                  <p className="text-[10px] text-white/60 leading-none mb-0.5">Скачать в</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end relative z-10">
            <div className="w-64 lg:w-72 bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-brand/10 px-5 py-4 flex items-center gap-3 border-b border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center">
                  <Icon name="MessageCircle" size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-neutral-900 font-semibold text-xs">Rom-Muerte</p>
                  <p className="text-green-500 text-[10px] font-medium">● Онлайн</p>
                </div>
              </div>
              <div className="p-4 space-y-2.5 bg-neutral-50">
                <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 w-fit max-w-[80%] shadow-sm">
                  <p className="text-neutral-800 text-xs">Привет! Как дела? 👋</p>
                  <p className="text-[10px] text-neutral-400 mt-0.5 text-right">12:01</p>
                </div>
                <div className="bg-brand rounded-2xl rounded-tr-sm px-3.5 py-2.5 w-fit max-w-[80%] ml-auto shadow-sm">
                  <p className="text-white text-xs">Всё отлично, ты как?</p>
                  <p className="text-[10px] text-white/60 mt-0.5 text-right">12:02 ✓✓</p>
                </div>
                <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 w-fit max-w-[80%] shadow-sm">
                  <p className="text-neutral-800 text-xs">Встретимся сегодня? 🎉</p>
                  <p className="text-[10px] text-neutral-400 mt-0.5 text-right">12:03</p>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center gap-2 bg-white border-t border-neutral-100">
                <div className="flex-1 bg-neutral-100 rounded-full px-3 py-2">
                  <p className="text-neutral-400 text-xs">Написать...</p>
                </div>
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center shrink-0">
                  <Icon name="Send" size={14} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}