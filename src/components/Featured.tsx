export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Общение без границ</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Живые чаты, истории, ленты и сообщества — всё, чтобы ты всегда был рядом с теми, кто важен. Connectly соединяет людей по-настоящему.
        </p>
        <button className="bg-brand text-white px-6 py-3 text-sm transition-all duration-300 hover:bg-brand-dark cursor-pointer w-fit uppercase tracking-widest rounded-sm">
          Начать общение
        </button>
      </div>
    </div>
  );
}