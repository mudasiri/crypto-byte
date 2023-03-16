import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCryptos } from '../redux/cryptoData/cryptoDataSlice';
import Intro from './intro';
import Navbar from './navBar';

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
        Loading cryptos.....
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Intro />
      <section>
        <div className="title"><h1>List of Cryptos - Live Data</h1></div>
        <ul>
          {
            cryptos.map((crypto) => (
              <li className="crypto-item" key={crypto.id}>
                <div className="crypto-meta">
                  <h2>
                    1
                    {crypto.name}
                    {' '}
                    =
                    {' '}
                  </h2>
                  <h2>
                    {new Intl.NumberFormat('gh-GH').format(crypto.rate.toFixed(2))}
                    {' '}
                    <span> GHS</span>
                  </h2>
                </div>
                <Link to={`/details/:${crypto.id}`}>
                  {' '}
                  <img src="arrow-circle.png" alt="back-arrow" />
                  {' '}
                </Link>
              </li>
            ))
        }
        </ul>
      </section>
    </>
  );
}

export default CryptoData;
