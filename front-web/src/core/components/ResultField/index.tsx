import React from "react";
import './styles.scss';

type Props = {
  result: string;
  interpretation: string;
}

const ResultField = ({ result, interpretation} : Props) => (
  <div className="result">
    <h1 className={`result-h1 ${result ? 'visible' : 'invisible'}`}>Result:</h1>
    <h1 className={`${result ? 'border-radius-10 result-h2' : ""}`}>{result}</h1>
    <h1 className={`result-h1 ${interpretation ? 'visible' : 'invisible'}`}>Interpretation:</h1>
    <h2 className={`${interpretation ? 'border-radius-10 result-h2' : ""}`}>{interpretation}</h2>
  </div>
)

export default ResultField;