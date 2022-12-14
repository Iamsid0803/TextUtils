import React, { useState } from "react";

export default function About(props) {
  const [btnText, setBtn] = useState("Enable Dark Mode");
  return (
    <>
      <div className={`container text-${props.textColor} my-3`}>
        <h1>About Us </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae a
          necessitatibus magni quaerat eos. Culpa ipsum autem adipisci, illo
          distinctio exercitationem? Accusantium ipsa perspiciatis aut nobis
          recusandae consequatur iste maiores?
        </p>
      </div>
    </>
  );
}
