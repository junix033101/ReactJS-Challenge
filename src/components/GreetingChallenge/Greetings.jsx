import React from "react";

const morningGreet = "GOOD MORNENG";
const afternoonGreet = "GOOD AFTERNOON";
const eveningGreet = "GOOD EBNENG";
const time = new Date().getHours();
const customStyle = {
  color: ""
};

function Greetings() {
  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {" "}
        HALU {getTime()}!{" "}
      </h1>
    </div>
  );
}

export default Greetings;

function getTime() {
  let greeting;
  if (time <= 24 && time < 12) {
    greeting = morningGreet;
    customStyle.color = "red";
  } else if (time >= 12 && time < 18) {
    greeting = afternoonGreet;
    customStyle.color = "green";
  } else {
    greeting = eveningGreet;
    customStyle.color = "blue";
  }
  return greeting;
}
