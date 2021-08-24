import { useFetch } from './useFetch';

export const GetData = () => {
    const { response, error, isLoading } = useFetch('http://api.exchangeratesapi.io/v1/latest?access_key=cf2661b19b2d47a0b4eee9ca71e7267e')
    const allRates = response?.rates;
    return {
        allRates, error, isLoading,
    }
}