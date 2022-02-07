function App() {
  return (
    <>
      <header>
        <div className="empty"></div>
        <div className="logo-container">
          <img className="logo" src="./assets/img/logo.jpeg" alt="" />
        </div>

        <div className="social-container">
          <ul className="social-icons">
            <li>
              <a href="https://discord.gg/QXcgRTcbrj">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/pixelfartnft/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/PixelFartNFT">
                <i className="fab fa-discord"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="frame-container">
        <div className="frame">
          <img className="nft-vector" src="./assets/img/nft.jpeg" alt="" />
        </div>
      </div>

      <div className="qr-container">
        <img className="qr" src="./assets/img/qr.jpeg" alt="" />
      </div>

      <div className="fancy-text-container">
        <div className="text-box">
          <h1>SCAN TO ANIMATE</h1>
          <h1>SCAN TO ANIMATE</h1>
        </div>
      </div>
    </>
  );
}

export default App;
