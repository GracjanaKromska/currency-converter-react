import { useState } from "react";
import { Clock } from "./Clock";
import { Form } from "./Form";
import { currencies } from "./currencies";
import { Wrapper } from "./AppStyled";

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
    <Wrapper>
      <Clock />
      <Form 
        result={result}
        convertResult={convertResult}
      />
    </Wrapper>
  );
}

export default App;