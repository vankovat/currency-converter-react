import React from 'react'
import Select from "react-select";
import { getCurrencyOptions } from './helpers';

export const CurrencySelect = ({ value, onChange, allRates }) => (
    <Select
        isClearable={true}
        value={value}
        onChange={onChange}
        options={getCurrencyOptions(allRates, value)}
    />
);
