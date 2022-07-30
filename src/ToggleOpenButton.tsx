import React from "react";
import { motion } from "framer-motion";

export type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export const ToggleOpenButton: React.FC<Props> = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      onClick={props.onClick}
    >
      {props.isOpen ? "Close" : "Open"}
    </motion.button>
  );
};
