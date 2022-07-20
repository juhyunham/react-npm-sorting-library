import SortableList from "./lib/SortableList";
import { data } from "./Item/Data";
import Item from "./Item/Item";
import "./App.css";

function App() {
  const handleDropItem = (newList: { name: string }[]) => {
    console.log(newList);
  };

  const handleClickItem = (index: number) => {
    alert(index);
  };

  return (
    <SortableList
      data={data}
      renderItem={(item, index) => <Item data={item} index={index} />}
      onDropItem={handleDropItem}
      onClickItem={handleClickItem}
    />
  );
}

export default App;
