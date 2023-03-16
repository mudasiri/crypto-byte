import './App.css';
import { Routes, Route } from 'react-router-dom';
import CryptoData from './components/cryptodata';
import CryptoDetail from './components/cryptoDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CryptoData />} />
        <Route path="/details/:id" element={<CryptoDetail />} />
      </Routes>
    </>
  );
}

export default App;
