import './App.css';
import CryptoData from './components/cryptodata';
import { Routes, Route } from 'react-router-dom';
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
