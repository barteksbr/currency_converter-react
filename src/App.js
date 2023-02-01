
import { useState } from "react";
import { Form } from './Form';
import currencies from "./currencies";
import { ActualDate } from "./Form/ActualDate";



function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ symbol }) => symbol === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <div >
      <ActualDate />
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </div>
  )
};

export default App;
