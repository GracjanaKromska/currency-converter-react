import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ convertResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    convertResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Currency converter
        </legend>
        <p>
          <label>
            <span className="form__labelText">
              Polish zloty (PLN):
            </span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="form__field"
              type="number"
              step="0.01"
              min="0.01"
              placeholder="Enter the amount in PLN" required
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Choose currency:
            </span>
            <select
              className="form__field"
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
            </select>
          </label>
        </p>
      </fieldset>
      <p>
        <button className="form__button">
          Convert
        </button>
      </p>
      <p>
        <Result result={result} />
      </p>
    </form>
  );
};