import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const inputText = useRef(null);
  const handleGenerate = () => {
    let characters =
      "abcdefghijklmnopqrstuvwxyz@!#$%^&*()?~ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let passwordLength = 10;
    let pass = "";
    for (let i = 0; i < passwordLength; i++) {
      let rand = characters[Math.floor(Math.random() * characters.length)];
      pass += rand;
    }
    setPassword(pass);
  };

  const handleCopy = () => {
    if (password != "") {
      let passwordText = inputText.current;
      passwordText.select();
      navigator.clipboard.writeText(password);
      setTimeout(() => {
        passwordText.setSelectionRange(0, 0);
        passwordText.blur();
      }, 1500);
    }
  };
  return (
    <>
      <div id="container">
        <h1>Random Password Generator</h1>
        <div id="input-copy-box">
          <input
            id="pass-input"
            type="text"
            ref={inputText}
            placeholder="create Password"
            readOnly
            value={password}
          />
          <span id="copy-btn" onClick={handleCopy}>
            <i className="ri-file-copy-fill"></i>
          </span>
        </div>
        <button id="generate-btn" onClick={handleGenerate}>
          Generate
        </button>
      </div>
    </>
  );
}

export default App;
