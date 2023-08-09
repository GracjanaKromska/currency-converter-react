import { useState } from "react";
import "./App.css";
import { Clock } from "./Clock";
import { Form } from "./Form";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();

  const convertResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <div className="app">
      <Clock />
      <Form 
        result={result}
        convertResult={convertResult}
      />
    </div>
  );
}

export default App;