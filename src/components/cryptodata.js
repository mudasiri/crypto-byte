import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptos } from '../redux/cryptoData/cryptoDataSlice';

function CryptoData() {
    const dispatch = useDispatch();
    const { cryptos } = useSelector((state) => state.cryptos);
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
        {
            cryptos.map((crypto)=>(
          <li className="crypto-item" key={crypto.id}>
          <div className='crypto-meta'>
          <h2>1 {crypto.name} = </h2>
          <h2>{new Intl.NumberFormat('gh-GH').format(crypto.rate.toFixed(2))} <span> GHS</span></h2>
          </div>
          <img src="arrow-circle.png" />
        </li>
            ))
        }
      </ul>
    </section>
  );
}

export default CryptoData;
