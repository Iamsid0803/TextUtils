import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  const capClicked = () => {
    console.log("You Have Click The Button");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowClicked = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const copyClicked = () => {
    console.log("You Have Click The Button");
    var text = document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied To Your Clip Board", "success");
  };
  const clearClicked = () => {
    let newText = "";
    setText(newText);
  };
  const changeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className={`container bg-${props.mode} text-${props.textColor}`}>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className={`form-control bg-${props.mode} text-${props.textColor}`}
            onChange={changeHandler}
            id="textbox"
            rows="5"
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={capClicked}>
          Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={lowClicked}>
          Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={copyClicked}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-1" onClick={clearClicked}>
          Clear text
        </button>
        <div className="summary">
          <h3>Text Summary</h3>
          <div>No. Of Words = {text.split(" ").length}</div>
          <div>No. Of Characters={text.length}</div>
          <div>
            Time To read= {Math.round(text.split(" ").length / 4.5)} Seconds
          </div>
        </div>
      </div>
    </>
  );
}
TextForm.propTypes = { heading: PropTypes.string };
