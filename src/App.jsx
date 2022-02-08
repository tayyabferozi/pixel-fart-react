import Frame from "./components/Frame";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <Frame img="./assets/img/nft.jpeg" />

      <div className="frame-grid-container">
        <div>
          <Frame img="./assets/img/fart-1.jpeg" />
        </div>
        <div>
          <Frame img="./assets/img/fart-2.jpeg" />
        </div>
        <div>
          <Frame img="./assets/img/fart-3.jpeg" />
        </div>
        <div>
          <Frame img="./assets/img/fart-4.jpeg" />
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
