import React, { useCallback, useState } from "react";
import SortableListItem from "./SortableListItem";
import "./SortableList.css";

interface SortableListProps {
  data: { name: string }[];
  onDropItem: (index: { name: string }[]) => void;
  onClickItem: (index: number) => void;
  renderItem: (item: any, index: number) => React.ReactNode;
}

function SortableList({ data, onDropItem, onClickItem, renderItem }: SortableListProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [listData, setListData] = useState(data);

  const handleDragStart = (index: number) => {
    setStartIndex(index);
  };

  const handleDrop = useCallback(
    (dropIndex: any) => {
      const dragItem = listData[startIndex];
      const list = [...listData];

      list.splice(startIndex, 1);

      const newListData =
        startIndex < dropIndex
          ? [...list.slice(0, dropIndex - 1), dragItem, ...list.slice(dropIndex - 1, list.length)]
          : [...list.slice(0, dropIndex), dragItem, ...list.slice(dropIndex, list.length)];
      setListData(newListData);
      onDropItem(newListData);
    },
    [startIndex, onDropItem, listData]
  );

  return (
    <ul className="sortable-list">
      <>
        {listData?.map((item, index) => {
          return (
            <SortableListItem
              key={index}
              index={index}
              draggable={true}
              onDragStart={handleDragStart}
              onDragEnd={handleDrop}
              onClickItem={onClickItem}
            >
              {renderItem(item, index)}
            </SortableListItem>
          );
        })}
        <SortableListItem key={listData.length} index={listData.length} draggable={false} onDragEnd={handleDrop} />
      </>
    </ul>
  );
}

export default SortableList;
