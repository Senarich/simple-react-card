import React from "react";
import Tittle from "./components/Tittle";
import Descriptions from "./components/Description";
import Image from "./components/Image";
import "./components/Card.css";

function App() {
  const des =
    "Chelsea Football Club is an English professional football club based in Fulham, West London. Founded in 1905, they play their home games at Stamford Bridge.[6] The club competes in the Premier League, the top division of English football. They won their first major honour, the League championship, in 1955. The club won the FA Cup for the first time in 1970, their first European honour, the Cup Winners' Cup, in 1971, and became the third English club to win the Club World Cup in 2022.";
  const title = "Chelsea Football Club";
  return (
    <div className="container">
      <div className="rightSide">
        <Image />
      </div>
      <div className="leftSide">
        <Tittle Tittle={title} />
        <Descriptions Description={des} />
      </div>
    </div>
  );
}

export default App;
