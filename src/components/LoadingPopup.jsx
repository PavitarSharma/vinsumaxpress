import { motion } from "framer-motion";
import {
  textContainer,
  characterAnimation,
  staggerContainer,
} from "@/lib/motionVariants";

const LoadingPopup = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="min-h-screen fixed inset-0 flex items-center justify-center  z-50"
    >
      <figure className="flex items-center justify-center gap-2">
        <img src="/logo.png" alt="logo" className="sm:w-16 w-14" />
        <motion.div
          variants={textContainer}
          className="sm:text-6xl text-5xl font-bold text-foreground"
        >
          {Array.from("VINSUM").map((letter, index) => (
            <motion.span
              variants={characterAnimation}
              key={index}
              className={`${
                index === 0 || index === 1 || index === 2
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
      </figure>
    </motion.div>
  );
};

export default LoadingPopup;
