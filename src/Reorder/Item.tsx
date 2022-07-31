import React from "react";
import { useMotionValue, Reorder } from "framer-motion";

export type Props = {
  item: string;
};

export const Item: React.FC<Props> = ({ item }) => {
  const y = useMotionValue(0);

  return (
    <Reorder.Item value={item} id={item} style={{ y }}>
      <span>{item}</span>
    </Reorder.Item>
  );
};
