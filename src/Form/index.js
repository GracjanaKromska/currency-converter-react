import { useState } from "react";
import { Result } from "./Result";
import {
  Button,
  Field,
  Fieldset,
  LabelText,
  Legend,
  Loading,
  Failure,
} from "./styled";

import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [result, setResult] = useState(0);
  const ratesData = useRatesData();

  const convertResult = (currency, amount) => {
    const selectedCurrency = ratesData.data.data[currency];
    const rate = selectedCurrency.value;

    setResult({
      from: "PLN",
      to: selectedCurrency.code,
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    convertResult(currency, amount);
  };

  return (
    <form onSubmit={onSubmit}>
      <Fieldset>
        <Legend>
          Currency converter
        </Legend>
        {ratesData.state === "loading"
          ? (
            <Loading>
              Please wait a second. Loading exchange rates.
            </Loading>
          )
          : (
            ratesData.state === "error" ? (
              <Failure>
                Error. Something went wrong.<br />
                Please check your network or try later.
              </Failure>
            ) : (
              <>
                <p>
                  <label>
                    <LabelText>
                      Polish zloty (PLN):
                    </LabelText>
                    <Field
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                      type="number"
                      step="0.01"
                      min="0.01"
                      placeholder="Enter the amount in PLN" required
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <LabelText>
                      Choose currency:
                    </LabelText>
                    <Field
                      as="select"
                      value={currency}
                      onChange={(event) => setCurrency(event.target.value)}
                    >
                      {ratesData.data && Object.keys(ratesData.data.data).map((currency) => (
                        <option
                          key={currency}
                          value={currency}
                        >
                          {currency}
                        </option>
                      ))}
                    </Field>
                  </label>
                </p>
                <p>
                  <Button>
                    Convert
                  </Button>
                </p>
                <p>
                  <Result result={result} />
                </p>
              </>
            )
          )}
      </Fieldset>
    </form>
  );
};