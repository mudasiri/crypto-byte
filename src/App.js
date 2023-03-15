import './App.css';
import CryptoData from './components/cryptodata';
import Intro from './components/intro';
import Navbar from './components/navBar';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <CryptoData />
    </>
  );
}

export default App;
