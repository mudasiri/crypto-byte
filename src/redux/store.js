import { configureStore } from '@reduxjs/toolkit';
import cryptodataReducer from './cryptoData/cryptoDataSlice';

export default configureStore({
  reducer: {
    cryptos: cryptodataReducer,
  },
});
