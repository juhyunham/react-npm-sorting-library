import React from "react";
import "./Item.css";

interface ItemProps {
  data: { name: string };
  index: number;
}

function Item({ data, index }: ItemProps) {
  return (
    <div className="item">
      <h3 className="item-name">{data.name}</h3>
      <p>index: {index}</p>
    </div>
  );
}

export default Item;
