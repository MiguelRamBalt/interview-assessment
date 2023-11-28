import axios from "axios";
import AddItem from "./components/AddItem"
import "./styles.css";
import { useEffect } from "react";

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
