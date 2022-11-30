import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Filters from "./components/Filters";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0.00)
  const [displayItems, updateDisplayItems] = useState(bakeryData)

  function addToCart(item) {
    // create new array and append item to it
    setCartItems([...cartItems, item])
  }

  function updateTotal(item) {
    setTotalPrice(totalPrice + item.price)
  }

  function removeFromCart(item) {
    let tempList = []
    let itemsRemoved = 0
    cartItems.forEach((currentItems) => {
      if ((item.name == currentItems.name) && (itemsRemoved == 0)){
        itemsRemoved ++
        subtractTotal(item)
      } else {
        tempList = [...tempList, currentItems]
      }
    })
    setCartItems(tempList)
  }

  function subtractTotal(item) {
    setTotalPrice(totalPrice - item.price)
  }

  function sort() {
    let tempList = displayItems.sort((a, b) => {
      if (a.price < b.price){
        return -1;
      }
    });
    updateDisplayItems(tempList)
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="container">

        <div className="itemGrid">
          {displayItems.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem item = {item}  addToCart={addToCart} updateTotal = {updateTotal} removeFromCart = {removeFromCart}/>
          // <p>BakeryItem {index}</p> // replace with BakeryItem component
        ))}
        </div>

        <Filters sort={sort}/>

      </div>

      

      <div>
        <h2>Cart</h2>
        {cartItems.map((item, index) => (<p>{item.name}</p>))}
        {Math.round(totalPrice * 100) / 100}
        
      </div>
    </div>
  );
}

export default App;