import { useState } from "react";
import currencies from "../currencies"
import { Result } from "./Result";
import { Wrapper, StyledFieldset, StyledInput, Select, Button, StyledResult } from "./styled";



export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].symbol);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }


return (
    <Wrapper onSubmit={onSubmit}>
        <StyledFieldset>
            <legend><strong>Kantor</strong></legend>
            <label>
                Ilość PLN:
                <StyledInput value={amount}
                    type="number"
                    onChange={({ target }) => setAmount(target.value)}
                    step="0.01" min="1"
                    required                    
                />
            </label>
            <p>
                <label>
                    Wybierz walutę:
                    <Select
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
                    </Select>
                </label>
            </p>
        </StyledFieldset>
        <p>
            <Button>Przelicz!</Button>
        </p>
        <StyledResult>Po przeliczeniu otrzymamy: 
        <Result result={result} />
        </StyledResult>
    </Wrapper>
);

};