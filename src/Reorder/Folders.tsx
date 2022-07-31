import "./styles.css";
import { Reorder } from "framer-motion";
import { useState } from "react";
import { Item } from "./Item";

const initialFolders = ["Inbox", "Sent", "Drafts", "Archive"];

export const Folders = () => {
  const [items, setItems] = useState(initialFolders);

  return (
    <Reorder.Group axis="y" onReorder={setItems} values={items}>
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
};
