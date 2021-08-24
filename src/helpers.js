export const getCurrencyRate = (currency, allRates) =>
    allRates[currency];

export const countAmount = (allRates, amount, from, to) => {
    // check if have both currencies
    const isBothCurrencyExist = Boolean(from && to);

    if (!isBothCurrencyExist) {
        return <div>Set both currencies</div>;
    };

    const fromRate = getCurrencyRate(from, allRates);
    const toRate = getCurrencyRate(to, allRates);

    const countedAmount = (toRate * amount) / fromRate;
    return countedAmount;
};

export const getCurrencyOptions = (allRates = {}, selectedRate) => {
    // get all rates key
    const ratesKeys = Object.keys(allRates);
    // get all other keys except the selected one
    const filteredRates = ratesKeys.filter(rate => rate !== selectedRate?.label);
    const ratesOptions = Boolean(selectedRate) ? filteredRates : ratesKeys;
    return ratesOptions.map((rate) => ({ label: rate }));
};

export const formatResult = (result) => Math.round((result + Number.EPSILON) * 100) / 100;
