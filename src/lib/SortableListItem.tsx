import React, { useRef } from "react";

interface SortableListItemProps {
  index: number;
  draggable: boolean;
  children?: React.ReactNode;
  onDragStart?: (index: number) => void;
  onDragEnd: (index: number) => void;
  onClickItem?: (index: number) => void;
}

function SortableListItem({ index, draggable, children, onDragStart, onDragEnd, onClickItem }: SortableListItemProps) {
  const refItem = useRef<HTMLLIElement>(null);

  const handleDragStart = () => {
    refItem.current!.classList.add("dragstart");
    onDragStart && onDragStart(index);
  };

  const handleDragEnd = () => {
    refItem.current!.classList.remove("dragstart");
  };

  const handleDragEnter = () => {
    refItem.current!.classList.add("dragover");
  };

  const handleDragLeave = () => {
    refItem.current!.classList.remove("dragover");
  };

  const handleDragOver = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleDrop = () => {
    refItem.current!.classList.remove("dragover");
    onDragEnd(index);
  };

  const handleClick = () => {
    onClickItem && onClickItem(index);
  };

  return (
    <li
      ref={refItem}
      className="sortable-item"
      draggable={draggable ? draggable : false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      {children}
    </li>
  );
}

export default SortableListItem;
