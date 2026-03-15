import React, { useState } from "react";

export default function App() {
  const [score, getScore] = useState(0);
  const handleScoreChange = (event) => {
    let value = parseFloat(event.target.value);
    if (isNaN(value)){
      getScore('');
      return;
    }
    if (value < 0) value = 0;
    if (value > 10) value = 10;
    getScore(value);
  };
  const getScoreBarStyle = () => {
    const currentScore = score === '' ? 0 : score;
    // 1- Compute width
    const scoreWidth = `${currentScore * 10}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
  if (currentScore >=2 && currentScore < 5){
      scoreColor = `#b9c54b`;
  }else if (currentScore >= 5 && currentScore < 8) {
      scoreColor = `#c7e755`;
  }else if (currentScore >= 8) {
        scoreColor = `#a9d453`;
    };


    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" step="any" value={score} onChange={handleScoreChange}></input>
        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
