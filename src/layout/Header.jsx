import React from "react";

const Header = () => {
  return (
    <header>
      <div className="empty"></div>
      <div className="logo-container">
        <img className="logo" src="./assets/img/logo.jpeg" alt="" />
      </div>

      <div className="social-container">
        <ul className="social-icons">
          <li>
            <a href="https://www.instagram.com/pixelfartnft/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/PixelFartNFT">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://discord.gg/QXcgRTcbrj">
              <i className="fab fa-discord"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
