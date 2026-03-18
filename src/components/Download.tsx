import Icon from "@/components/ui/icon";

export default function Download() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-neutral-950">
      <div className="flex-1 flex flex-col justify-center lg:ml-12 mb-12 lg:mb-0">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-400">Мессенджер в твоём кармане</h3>
        <p className="text-2xl lg:text-5xl mb-10 text-white leading-tight font-bold">
          Скачай Connectly<br />и общайся везде
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="flex items-center gap-3 bg-brand text-white px-6 py-4 hover:bg-brand-dark transition-colors duration-300 w-fit rounded-sm"
          >
            <Icon name="Apple" size={24} />
            <div>
              <p className="text-xs text-neutral-500 leading-none mb-0.5">Скачать в</p>
              <p className="text-sm font-semibold uppercase tracking-wide">App Store</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 border border-brand text-white px-6 py-4 hover:bg-brand transition-colors duration-300 w-fit rounded-sm"
          >
            <Icon name="Smartphone" size={24} />
            <div>
              <p className="text-xs leading-none mb-0.5 opacity-70">Скачать в</p>
              <p className="text-sm font-semibold uppercase tracking-wide">Google Play</p>
            </div>
          </a>
        </div>
        <p className="text-neutral-500 text-sm mt-6">Доступно для iOS и Android · Бесплатно</p>
      </div>

      <div className="flex-1 flex items-center justify-center lg:justify-end lg:mr-12">
        <div className="relative w-64 lg:w-80">
          <div className="bg-neutral-800 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Connectly</p>
                <p className="text-neutral-400 text-xs">Онлайн</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-neutral-700 rounded-2xl rounded-tl-sm px-4 py-2.5 w-fit max-w-[80%]">
                <p className="text-white text-sm">Привет! Как дела? 👋</p>
              </div>
              <div className="bg-brand rounded-2xl rounded-tr-sm px-4 py-2.5 w-fit max-w-[80%] ml-auto">
                <p className="text-white text-sm">Всё отлично, ты как?</p>
              </div>
              <div className="bg-neutral-700 rounded-2xl rounded-tl-sm px-4 py-2.5 w-fit max-w-[80%]">
                <p className="text-white text-sm">Встретимся сегодня? 🎉</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 bg-neutral-900 rounded-full px-4 py-2">
              <p className="text-neutral-500 text-sm flex-1">Написать...</p>
              <Icon name="Send" size={16} className="text-brand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}