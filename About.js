import React, { useState } from "react";

export default function About() {
  const [styleText, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const changeMode = () => {
    if (styleText.color === "black") {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtn("Enable Light Mode");
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtn("Enable Dark Mode");
    }
  };
  const [btnText, setBtn] = useState("Enable Dark Mode");
  return (
    <>
      <div className="container" style={styleText}>
        <h1>About Us </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae a
          necessitatibus magni quaerat eos. Culpa ipsum autem adipisci, illo
          distinctio exercitationem? Accusantium ipsa perspiciatis aut nobis
          recusandae consequatur iste maiores?
        </p>
        <button className="btn btn-dark" onClick={changeMode}>
          {btnText}
        </button>
      </div>
    </>
  );
}
