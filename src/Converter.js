import React, { useState, useEffect } from 'react';
import { countAmount, formatResult } from './helpers';
import { CurrencySelect } from './CurrencySelect';
import { Amount } from './components/Amount';
import { GetData } from './getData'

export const Converter = () => {
    const [amount, setAmount] = useState(1);
    const [to, setTo] = useState();
    const [from, setFrom] = useState();
    const [result, setResult] = useState(0);

    useEffect(() => {
        if (newValue) {
            setResult(newValue)
        }
    }, [from, to, amount])

    const { allRates } = GetData();

    const handleFromChange = (from) => {
        setFrom(from)
    };
    const handleToChange = (to) => {
        setTo(to)
    };

    const newValue = countAmount(allRates, amount, from?.label, to?.label);

    const handleAmountChange = (event) => {
        const { value } = event.target;
        if (value) {
            setAmount(value)
            setResult(newValue);
        }
    };

    const formattedResult = formatResult(result);
    const isResultNumber = !isNaN(formattedResult);

    return (
        <div>
            <h1>Currency converter</h1>
            <div className="converter-text">
                <p>Amount</p>
                <p>From</p>
                <p>To</p>
                <p className="converter-text__result">Result</p>
            </div>
            <form>
                <Amount  placeholder="Set amount" value={amount} onChange={handleAmountChange} />
                <CurrencySelect  value={from} onChange={handleFromChange} allRates={allRates} />
                <CurrencySelect  value={to} onChange={handleToChange} allRates={allRates} />
                <div className="converter-result">{isResultNumber && <div >{formattedResult}</div>}</div>
            </form>
        </div>
    )
}
