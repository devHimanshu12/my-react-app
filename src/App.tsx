import { useState } from "react";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["France", "Switzerland", "Germany", "NetherLands", "USA"];
  const handleSelectItem = (item: string) => {
    console.log("app tsx", item);
  };

  const [isClicked,setIsClicked]=useState(false)


  return (
    <div>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
      
      {/* <Alert text="Hello World" />   */}

      {/* when text is long we use children prop in child and then text can be written between opening and closing tag */}
      
      {/* <Alert>Hello Children Prop</Alert> */}

      {/* when we want to pass data in any html tag inside child compoent we give prop key type ReactNode  */}
     {isClicked && <Alert onClose={() => setIsClicked(false)}>show Alert</Alert> } 
      <Button color="primary" onClick={()=>setIsClicked(true)}>My button with color options</Button>
    </div>
  );
}

export default App;
