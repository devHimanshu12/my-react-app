import { MouseEvent, useState } from "react";

interface Props {
    items:string[];
    heading:string;
    onSelectItem:(item:string)=> void;
}

function ListGroup({items,heading,onSelectItem}:Props) {
//   let selectedItem = 0;
  //   items = []
  // Hook
  const [selectedItem,setSelectedItem]= useState(-1)

  //Event Handler
  //   const handleClick = (event:MouseEvent) => {
  //     console.log("handle click", MouseEvent);
  //   };

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>items not found</p> : null} */}
      {/* this is shorter syntax with condition true it returns right side value and if false it returns  false */}
      {items.length === 0 && <p>items not found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick = {() => { setSelectedItem(index);
                        onSelectItem(item) }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
