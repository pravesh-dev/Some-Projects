import { useState } from "react";
import "./App.css";

function App() {
  const [dateInput, setDateInput] = useState("");
  const [result, setResult] = useState(false);
  const [age, setAge] = useState("");
  const handleCalculate = () => {
    let dateSelected = {
      date: dateInput.split("-")[2],
      month: dateInput.split("-")[1],
      year: dateInput.split("-")[0],
    };
    let date = new Date();
    let currentDate = {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
    if (dateInput !== "") {
      setAge(calculateAge(dateSelected, currentDate));
      setResult(true);
      setTimeout(() => {
        setResult(false);
      }, 5000);
    }
  };
  const calculateAge = (dateSelected, currentDate) => {
    let ageYear = currentDate.year - dateSelected.year;
    let ageMonth = currentDate.month - dateSelected.month;
    let ageDate = currentDate.date - dateSelected.date;
    if (ageMonth < 0) {
      ageYear--;
    }
    return ageYear;
  };
  return (
    <>
      <div id="lg-container">
        <div id="container" className={result ? "clip-path" : ""}>
          <h1>Age Calculator</h1>
          <h2>Enter your data of birth</h2>
          <input
            type="date"
            name=""
            id=""
            value={dateInput}
            onChange={(e) => {
              const selectedDate = e.target.value;
              setDateInput(selectedDate);
            }}
          />
          <button id="calculate-btn" onClick={handleCalculate}>
            <a>Calculate Age</a>
          </button>
        </div>
        <div id="result-box" className={`${result ? "show-result" : ""} `}>
          <span>{age}</span> years old
        </div>
      </div>
    </>
  );
}

export default App;
