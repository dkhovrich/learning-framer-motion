import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToggleOpenButton } from "./ToggleOpenButton";

const listItems = ["Hello", "World", "Lisbon", "Odessa"];

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
};

export const Example2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ToggleOpenButton
        isOpen={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={list}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {listItems.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
