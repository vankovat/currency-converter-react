import React from 'react'

export const Amount = ({ placeholder, value, onChange }) => (
    <input
        type="number"
        min="0"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);
