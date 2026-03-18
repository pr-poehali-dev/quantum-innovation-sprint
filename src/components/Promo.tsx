import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 z-[1]" />

      <h3 className="absolute top-12 right-6 text-white/90 uppercase z-10 text-xs md:text-sm tracking-widest">
        Твой мир, твои люди
      </h3>

      <p className="absolute bottom-12 left-6 right-6 md:right-auto text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-full md:max-w-lg lg:max-w-xl xl:max-w-3xl z-10 leading-tight drop-shadow-lg">
        Находи тех, кто разделяет твои интересы. Создавай сообщества, делись моментами
        и строй настоящие связи.
      </p>
    </div>
  );
}