"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

type TextGenerateEffectProps = {
  words: string;
  textColor: string;
  delay?: number;
  duration?: number;
  textFamily?: string;
  className?: string;
};

export const TextGenerateEffect = ({
  words,
  textColor,
  delay,
  duration,
  textFamily,
  className,
}: TextGenerateEffectProps ) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: duration || 2,
        delay: stagger(delay || 0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className='opacity-0' 
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className={`text-2xl leading-snug tracking-wide ${textColor} ${textFamily}`}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
