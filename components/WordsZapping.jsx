import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  enter: {
    y: -20,
    opacity: 0
  },
  center: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: 20,
    opacity: 0
  }
};

export default function WordsZapping({ words }) {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => {
        const isLast = currentIndex == words.length - 1
        return isLast ? 0 : currentIndex + 1
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [words])

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div
        key={currentIndex}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className="inline-flex"
      >
        {words[currentIndex]}
      </motion.div>
    </AnimatePresence>
  )
}