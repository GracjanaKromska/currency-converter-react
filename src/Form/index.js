import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Button, Field, Fieldset, LabelText, Legend } from "./styled";

export const Form = ({ convertResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    convertResult(currency, amount);
  }

  return (
    <form onSubmit={onSubmit}>
      <Fieldset>
        <Legend>
          Currency converter
        </Legend>
        <p>
          <label>
            <LabelText>
              Polish zloty (PLN):
            </LabelText>
            <Field
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
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
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              )))}
            </Field>
          </label>
        </p>
      </Fieldset>
      <p>
        <Button>
          Convert
        </Button>
      </p>
      <p>
        <Result result={result} />
      </p>
    </form>
  );
};