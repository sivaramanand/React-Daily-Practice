import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const API_KEY = '9ef95a224323a98092faa6d6';
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      const currencyData = response.data.conversion_rates;
      setCurrencies(Object.keys(currencyData));
      setConvertedAmount(currencyData[toCurrency]);
    });
  }, [fromCurrency, toCurrency, API_URL]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  useEffect(() => {
    if (currencies.length > 0) {
      axios.get(API_URL).then((response) => {
        setConvertedAmount(response.data.conversion_rates[toCurrency] * amount);
      });
    }
  }, [amount, fromCurrency, toCurrency, currencies]);

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
      <div className="form">
        <div className="form-group">
          <label>Amount:</label>
          <input type="number" value={amount} onChange={handleAmountChange} />
        </div>
        <div className="form-group">
          <label>From:</label>
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>To:</label>
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="result">
          <h2>
            {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
