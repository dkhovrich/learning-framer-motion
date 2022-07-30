import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ToggleOpenButton } from "./ToggleOpenButton";

const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 }
};

export const Example1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ToggleOpenButton
        isOpen={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="box"
            variants={variants}
            animate="visible"
            initial="hidden"
            exit="hidden"
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
