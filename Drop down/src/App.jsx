import { useState } from "react";
import "./App.css";

function App() {
  const [showClicked, setShowClicked] = useState(false);
  const [socialMediaContent, setSocialMediaContent] = useState({});
  const handleShowClick = () => {
    setShowClicked(!showClicked);
  };
  const handleClickSocial = (e) => {
    const iconClass = e.currentTarget.querySelector("i").className;
    const iconStyle = e.currentTarget.querySelector("span").className;
    const socialName = e.currentTarget.innerText;
    setSocialMediaContent({
      icon: iconClass,
      icons: iconStyle,
      text: socialName,
    });
    setShowClicked(!showClicked);
  };
  return (
    <>
      <div id="container">
        <div id="show-btn" onClick={handleShowClick}>
          <p>
            {socialMediaContent.icon && (
              <span className={`icon-wrapper ${socialMediaContent.icons}`}>
                <i className={socialMediaContent.icon}></i>
              </span>
            )}
            {socialMediaContent.text || "Social Media"}
          </p>
          <span id="down-arrow" className={showClicked ? "rotateArrow" : ""}>
            <i className="ri-arrow-up-s-line"></i>
          </span>
        </div>
        <div
          id="social-media-container"
          className={`${showClicked ? "show-social-media" : ""}`}
        >
          <div className="social-boxes" onClick={handleClickSocial}>
            <span className="icon-wrapper facebook-icon">
              <i className="ri-facebook-circle-fill"></i>
            </span>{" "}
            Facebook
          </div>
          <div className="social-boxes" onClick={handleClickSocial}>
            <span className="icon-wrapper youtube-icon">
              <i className="ri-youtube-fill"></i>
            </span>{" "}
            YouTube
          </div>
          <div className="social-boxes" onClick={handleClickSocial}>
            <span className="icon-wrapper x-icon">
              <i className="ri-twitter-x-fill"></i>
            </span>{" "}
            Twitter
          </div>
          <div className="social-boxes" onClick={handleClickSocial}>
            <span className="icon-wrapper linked-icon">
              <i className="ri-linkedin-box-fill"></i>
            </span>{" "}
            Linkedin
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
