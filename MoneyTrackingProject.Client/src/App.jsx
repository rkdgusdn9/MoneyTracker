import { useState } from "react";
import "./App.css";

function App() {
  let [testUS, changeCountry] = useState([
    "Spain",
    "Italy",
    "France",
    "Japan",
    "Korea",
  ]);
  let [count, addCount] = useState(0);

  return (
    <div className="App">
      <div className="nav">
        <h4>Learning React</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...testUS];
          copy.sort((a, b) => a.localeCompare(b));
          changeCountry(copy);
        }}
      >
        SortByAlphabet
      </button>
      <button
        onClick={() => {
          let copy = [...testUS];
          copy[0] = testUS[1];
          changeCountry(copy);
        }}
      >
        Country
      </button>
      <div>
        <h4>
          {testUS[0]}
          <span
            onClick={() => {
              addCount(count + 1);
            }}
          >
            {" "}
            ❤{" "}
          </span>{" "}
          {count}
        </h4>
        <p>03-07-2024</p>
      </div>
      <div>
        <h4>{testUS[1]}</h4>
        <p>03-07-2024</p>
      </div>
      <div>
        <h4>{testUS[2]}</h4>
        <p>03-07-2024</p>
      </div>
    </div>
  );
}

export default App;
