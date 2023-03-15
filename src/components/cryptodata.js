import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptos } from '../redux/cryptoData/cryptoDataSlice';

function CryptoData() {
    const dispatch = useDispatch();
 // const { cryptos } = useSelector((state) => state.cryptos);
  const status = useSelector((state) => state.cryptos.status);
  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  if (status !== 'succeded') {
    return (
      <div className="container">
        Error Loading cryptos.....
      </div>
    );
  }
  return (
    <section>
      <div className="title"><h1>List of Cryptos - Live Data</h1></div>
      <ul>
        <li className="crypto-item">
          <h2>Bitcoin(BTC)</h2>
          <h2>12.8(BTC)</h2>
          <img src="arrow-circle.png" />
        </li>
        <li className="crypto-item">
          <h2>Bitcoin(BTC)</h2>
          <h2>12.8(BTC)</h2>
          <img src="arrow-circle.png" />
        </li>
        <li className="crypto-item">
          <h2>Bitcoin(BTC)</h2>
          <h2>12.8(BTC)</h2>
          <img src="arrow-circle.png" />
        </li>
        <li className="crypto-item">
          <h2>Bitcoin(BTC)</h2>
          <h2>12.8(BTC)</h2>
          <img src="arrow-circle.png" />
        </li>
        <li className="crypto-item">
          <h2>Bitcoin(BTC)</h2>
          <h2>12.8(BTC)</h2>
          <img src="arrow-circle.png" />
        </li>
        <li className="crypto-item">
          <h2>Bitcoin(BTC)</h2>
          <h2>12.8(BTC)</h2>
          <img src="arrow-circle.png" />
        </li>
        <li className="crypto-item">
          <h2>Bitcoin(BTC)</h2>
          <h2>12.8(BTC)</h2>
          <img src="arrow-circle.png" />
        </li>
        <li className="crypto-item">
          <h2>Bitcoin(BTC)</h2>
          <h2>12.8(BTC)</h2>
          <img src="arrow-circle.png" />
        </li>
      </ul>
    </section>
  );
}

export default CryptoData;
