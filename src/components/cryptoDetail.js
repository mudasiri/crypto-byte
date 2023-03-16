import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCryptos } from "../redux/cryptoData/cryptoDataSlice";
import cryptoLogo from "../cryptocurrency.png"
import backArrow from "../left.png"

function CryptoDetail(){
    const dispatch = useDispatch();
    const { id } = useParams();
    const data   = useSelector((state) => state.cryptos.crypto);

    useEffect(() => {
        dispatch(fetchSingleCryptos(id.replace(':','')));
      }, [dispatch]);

    return(
        <>
        <header className="detailHeader">
            <Link to={'/'}><img src={backArrow} /></Link>
      <p>Stockbyte</p>
    </header>
    <section className="intro">
      <img src={cryptoLogo} alt="cryto-bg" />
      <div>
        <h2>CryptoByte</h2>
        <p>Web App for Crypto Lovers</p>
      </div>
    </section>
    <div>
        {data.map((crypto) => (
         <>
         <div className="title"><h1>Details of {crypto.name} - Live Data</h1></div>
         
              
             <div className="crypto-item" >
             <h2> Name: {crypto.name} </h2>
           </div>
           <div className="crypto-item evenItem" >
           <h2>Rate: {new Intl.NumberFormat('gh-GH').format(crypto.rate.toFixed(2))} <span> GHS</span></h2>
           </div>
           <div className="crypto-item" >
             <h2> Cap: {crypto.cap} </h2>
           </div>
           <div className="crypto-item evenItem" >
           <h2>Highest Rate: {new Intl.NumberFormat('gh-GH').format(crypto.high.toFixed(2))} <span> GHS</span></h2>
           </div>
           <div className="crypto-item">
           <h2>Lowest Rate: {new Intl.NumberFormat('gh-GH').format(crypto.low.toFixed(2))} <span> GHS</span></h2>
           </div>
         
         </>
        ))}
    </div>
        </>
    )
}

export default CryptoDetail;