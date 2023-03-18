import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cryptos: [],
  status: '',
  crypto: [],
};

// Async thunk to fetch Cryptos
export const fetchCryptos = createAsyncThunk('cryptos/fetchCryptos', async () => {
  const response = await fetch('http://api.coinlayer.com/live?access_key=26c350c08732798f37b02a134b20b7d2&expand=1&target=GHS&symbols=BTC,ETC,DASH,SMART,TESLA,ADA,USDT,ALT');
  const data = await response.json();
  return data;
});

// Async thunk to fetch Single Crypto
export const fetchSingleCryptos = createAsyncThunk('cryptos/fetchSingleCryptos', async (id) => {
  const response = await fetch(`http://api.coinlayer.com/live?access_key=26c350c08732798f37b02a134b20b7d2&expand=1&target=GHS&symbols=${id}`);
  const data = await response.json();
  return data;
});

export const cryptoDataSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
    detail: () => {
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCryptos.fulfilled, (state, action) => {
      state.status = 'succeded';
      if (state.cryptos.length === 0) {
        const livecryptos = action.payload.rates;
        const cryptosStore = [];
        Object.keys(livecryptos).map((id) => (
          cryptosStore.push({
            id,
            name: id,
            rate: livecryptos[id].rate,
            high: livecryptos[id].high,
            low: livecryptos[id].low,
            vol: livecryptos[id].vol,
            cap: livecryptos[id].cap,
            sup: livecryptos[id].sup,
            change: livecryptos[id].change,
            change_pct: livecryptos[id].change_pct,
          })
        ));
        state.cryptos = cryptosStore;
      }
    });
    builder.addCase(fetchSingleCryptos.fulfilled, (state, action) => {
      state.status = 'succeded';
      const livecryptos = action.payload.rates;
      const cryptosStore = [];
      Object.keys(livecryptos).map((id) => (
        cryptosStore.push({
          id,
          name: id,
          rate: livecryptos[id].rate,
          high: livecryptos[id].high,
          low: livecryptos[id].low,
          vol: livecryptos[id].vol,
          cap: livecryptos[id].cap,
          sup: livecryptos[id].sup,
          change: livecryptos[id].change,
          change_pct: livecryptos[id].change_pct,
        })
      ));
      state.crypto = cryptosStore;
    });
  },
});

export const { detail } = cryptoDataSlice.actions;
export default cryptoDataSlice.reducer;
