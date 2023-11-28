import axios from "axios";
import AddItem from "./components/AddItem"
import "./styles.css";
import { useEffect } from "react";

/**
 * Steps:
 * 
 * HEADER
 *    - Create a header component that can be callen in App and send title using props
 * 
 * 
 * LIST
 *    - Using Add Product button & input field, create a list with each product added. Place it in <ul> existing tag. Order of products in displayed list should be inverse to the entering order.
 *       + Do not permit to add products repeated. Send an alert with you can't add repeated products message
 *       + If completed, permit products repeated with counter. i.e.:
 *          - NO: toy / food / toy
 *          - YES:  2 toy / food
 *    - Add count of products added in # products added label
 * 
 * API
 *    - Implement call inside interval
 *    - Implement way to cache response retrieved
 *    - Send response as a prop to AddItem()
 *    - Each new item added to the list should get the first image and remove it from cache
 *    - Clean the interval when cache size is 10
 *  NOTE: You can change the item composition
 */

function App() {
  const fetchDog = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
  };

  useEffect(() => {
    const getImg = async () => {
      setInterval(() => {
        console.log('fetchDog')
      }, 500000)
    }

    // getImg();

  }, [])

  return (
    <div className="App">
      shopping cart
      <AddItem />
      <button className="btn" onClick={() => fetchDog()}>
        Call API
      </button>
    </div>
  );
}

export default App;
