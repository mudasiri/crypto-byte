import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cryptos: [],
    status:'',
}

// Async thunk to fetch Cryptos
export const fetchCryptos = createAsyncThunk('cryptos/fetchCryptos', async () => {
    const response = await fetch(`http://api.coinlayer.com/live?access_key=01dbb2cbc1afa0929636cd085667ff12&expand=1&target=GHS&symbols=BTC,ETC,DASH,SMART,TESLA,ADA`);
    const data = await response.json();
    return data;
  });

  export const cryptoDataSlice = createSlice({
    name:'cryptos',
    initialState,
    reducers: {
        detail: (state, action)=>{

        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCryptos.fulfilled, (state, action) => {
            state.status = 'succeded';
            if (state.cryptos.length === 0) {
              const livecryptos = action.payload.rates;
              const cryptosStore = [];
              Object.keys(livecryptos).map((id) => (
                cryptosStore.push({
                    id: id,
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
              ))
                console.log(cryptosStore);
              state.cryptos = cryptosStore;
            }
          })
    }
  })


export const { detail } = cryptoDataSlice.actions;
export default cryptoDataSlice.reducer;



