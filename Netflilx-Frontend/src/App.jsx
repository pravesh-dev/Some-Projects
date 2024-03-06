import { useState } from "react";
// import netflixBackground from "./assets/netflix-background.jpg";
import netflixLogo from "./assets/netflix-logo.png";
import "./App.css";

function App() {
  const [label, setLabel] = useState({
    name: false,
    email: false,
    number: false,
    password: false,
    rePassword: false,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const handleInputFocus = (e) => {
    const inputId = e.target.id.split("-")[0];
    if (e.currentTarget.value.trim() === "") {
      setLabel((previousLabels) => ({
        ...previousLabels,
        [inputId]: true,
      }));
    }
  };
  const handleFocusOut = (e) => {
    const inputId = e.target.id.split("-")[0];
    if (e.target.value.trim() === "") {
      setLabel((previousLabels) => ({
        ...previousLabels,
        [inputId]: false,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/signUp", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          number,
          password,
          rePassword,
        }),
      });
      if (response.ok) {
        console.log("for submitted");
      } else {
        throw new Error("there has been some error");
      }
    } catch (error) {
      console.log("there has been some error", error);
    }
  };

  return (
    <>
      <div id="main">
        <div id="black-background">
          <header>
            <img src={netflixLogo} alt="netflix logo" />
          </header>
          <div id="container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div id="name-container" className="input-containers">
                <input
                  type="text"
                  id="name-input"
                  onFocus={handleInputFocus}
                  onBlur={handleFocusOut}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
                <label
                  className={`input-labels ${label.name ? "label-to-top" : ""}`}
                  htmlFor="name-input"
                >
                  Name
                </label>
              </div>
              <div id="email-container" className="input-containers">
                <input
                  type="email"
                  id="email-input"
                  onFocus={handleInputFocus}
                  onBlur={handleFocusOut}
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label
                  className={`input-labels ${
                    label.email ? "label-to-top" : ""
                  }`}
                  htmlFor="email-input"
                >
                  Email address
                </label>
              </div>
              <div id="number-container" className="input-containers">
                <input
                  type="number"
                  id="number-input"
                  onFocus={handleInputFocus}
                  onBlur={handleFocusOut}
                  required
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
                <label
                  className={`input-labels ${
                    label.number ? "label-to-top" : ""
                  }`}
                  htmlFor="number-input"
                >
                  Mobile number
                </label>
              </div>
              <div id="new-pass-container" className="input-containers">
                <input
                  type="password"
                  id="password-input"
                  onFocus={handleInputFocus}
                  onBlur={handleFocusOut}
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label
                  className={`input-labels ${
                    label.password ? "label-to-top" : ""
                  }`}
                  htmlFor="password-input"
                >
                  Create new password
                </label>
              </div>
              <div id="re-pass-container" className="input-containers">
                <input
                  type="password"
                  id="rePassword-input"
                  onFocus={handleInputFocus}
                  onBlur={handleFocusOut}
                  required
                  value={rePassword}
                  onChange={(e) => {
                    setRePassword(e.target.value);
                  }}
                />
                <label
                  className={`input-labels ${
                    label.rePassword ? "label-to-top" : ""
                  }`}
                  htmlFor="rePassword-input"
                >
                  Re-type new password
                </label>
              </div>
              <button id="signup-btn">Sign Up</button>
              <div id="form-last">
                <div id="check-container">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <label id="checkbox-label" htmlFor="checkbox">
                    Remember me
                  </label>
                </div>
                <a id="help-link" href="#">
                  Need help?
                </a>
              </div>
            </form>
            <div id="after-form-box">
              <p>
                Already have an account? <a href="#">Sign in now</a>
              </p>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <a href="#">Learn more.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
