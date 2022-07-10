import React from "react";
import Header from "./Headings/Header";
import List from "./Headings/List";
import Gallery from "./Headings/Gallery";
import Greetings from "./GreetingChallenge/Greetings";
import Calculator from "./CalculatorChallenge/Calculator.jsx";

function App() {
  return (
    <div>
      <Header />
      <List />
      <Gallery />
      <Greetings />
      <Calculator />
    </div>
  );
}
export default App;
