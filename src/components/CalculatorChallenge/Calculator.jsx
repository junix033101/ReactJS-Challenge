import React from "react";
import { add, subtract, multiply, divide } from "./Calculator";

function Calculate() {
  return (
    <div>
      <h2>The Calculator Challenge</h2>
      <ul>
        <li>{add(1, 2)}</li>
        <li>{subtract(1, 2)}</li>
        <li>{multiply(1, 2)}</li>
        <li>{divide(1, 2)}</li>
      </ul>
    </div>
  );
}

export default Calculate;
