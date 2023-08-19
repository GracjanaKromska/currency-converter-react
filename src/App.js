import { useState } from "react";
import { Clock } from "./Clock";
import { Form } from "./Form";
import { currencies } from "./currencies";
import { StyledApp } from "./AppStyled";

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
    <StyledApp>
      <Clock />
      <Form
        result={result}
        convertResult={convertResult}
      />
    </StyledApp>
  );
}

export default App;