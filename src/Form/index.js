import { useState } from "react";
import currencies from "../currencies"
import { Result } from "./Result";
import "./style.css"; 



export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].symbol);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }


return (
    <form className="form" onSubmit={onSubmit}>
        <fieldset className="form__fieldset">
            <legend><strong>Kantor</strong></legend>
            <label>
                Ilość PLN:
                <input value={amount}
                    type="number"
                    onChange={({ target }) => setAmount(target.value)}
                    step="0.01" min="1"
                    required
                    className="form__input"
                />
            </label>
            <p>
                <label>
                    Wybierz walutę:
                    <select className="form__select"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.symbol}
                                value={currency.symbol}
                            >
                                {currency.fullName}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
        </fieldset>
        <p>
            <button className="form__button">Przelicz!</button>
        </p>
        <p class="form__result">Po przeliczeniu otrzymamy: 
        <Result result={result} />
        </p>
    </form>
);

};