import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleExtaSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Successfully removed extra spaces", "success");
  };

  const [text, setText] = useState("");
  // text="new state"// Wrong way to change the state
  // setText("new Text")//Correct way
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div>
          <h2 className="mb-4">{props.heading}</h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              style={{
                backgroundColor: props.mode === "dark" ? "#d5c6c6" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLowerClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtaSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Your Text Summary</h2>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes Read
          </p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Nothing to preview!"}
          </p>
        </div>
      </div>
    </>
  );
}
