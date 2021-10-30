import { gql, useQuery } from '@apollo/client';
import React from 'react';
import './App.css';

interface Currency {
  currency: string;
  rate: number
}

function App() {

  const EXCHANGE_RATE = gql`
    query GetExchangeRates{
      rates(currency: "USD"){
        currency
        rate
      }
    }
  `
  const { loading, error, data } = useQuery(EXCHANGE_RATE)

  if (loading) (<h2>Loading...</h2>);
  if (error) (<h2>404 error...</h2>);

  return (
    <div className="App">
      <header className="App-header">
        Getting started with apollo client
        <div className="curr-div">
          {data?.rates.map(({ currency, rate }: Currency) => (

            <h4 key={currency}>{currency}: {rate}</h4>

          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
