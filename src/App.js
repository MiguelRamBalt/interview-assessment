import axios from "axios";
import AddItem from "./components/AddItem"
import Header from './components/Header'
import "./styles.css";

function App() {
  const fetchDog = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(function (response) {
        console.log(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <Header title="Shopping Car" />
      <AddItem />
      <button className="btn" onClick={() => fetchDog()}>
        Call API
      </button>
    </div>
  );
}

export default App;
