import React from "react";
import { motion } from "framer-motion";

export type Props = {
  value: boolean;
  onClick: (value: boolean) => void;
};

export const ToggleOpenButton: React.FC<Props> = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      onClick={() => props.onClick(!props.value)}
    >
      {props.value ? "Close" : "Open"}
    </motion.button>
  );
};
