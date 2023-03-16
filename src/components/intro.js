import React from 'react';
import cryptoLogo from "../cryptocurrency.png"

function Intro() {
  return (
    <section className="intro">
      <img src={cryptoLogo} alt="cryto-bg" />
      <div>
        <h2>CryptoByte</h2>
        <p>Web App for Crypto Lovers</p>
      </div>
    </section>
  );
}

export default Intro;
