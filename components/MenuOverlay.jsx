import { AnimatePresence, motion } from "framer-motion";
import { menuItems } from "../data/menu";

const variants = {
  enter: {
    x: 100,
    opacity: 0
  },
  center: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: 100,
    opacity: 0
  }
};

export default function MenuOverlay({ open }) {

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="fixed w-[110vw] h-screen bg-amber-400 left-0 top-0 z-40 p-4"
        >
          {menuItems.map(item => (
            <h3
              key={item.url}
              className="text-white my-5"
            >
              {item.title} →
            </h3>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}