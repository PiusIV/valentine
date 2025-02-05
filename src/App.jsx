import Header from "./components/Header";
import ValReq from "./components/ValReq";
import { useState } from "react";
import confetti from "canvas-confetti";
// import Button from "./components/Button";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isYesClicked, setIsYesClicked] = useState(false);

  function handleYesClick() {
    setIsYesClicked(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
  return (
    <>
      <Header isYesClicked={isYesClicked} />
      <ValReq onYesClick={handleYesClick} />
    </>
  );
}

export default App;
