import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cryptos: [],
    status:'',
}

// Async thunk to fetch Cryptos
export const fetchCryptos = createAsyncThunk('cryptos/fetchCryptos', async () => {
    const response = await fetch(`http://api.coinlayer.com/list?access_key=01dbb2cbc1afa0929636cd085667ff12`);
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
              const livecryptos = action.payload;
              const cryptosStore = [];
              /* livecryptos.map((rocket) => (
                cryptosStore.push(
                  {
                    id: rocket.id,
                    name: rocket.name,
                    type: rocket.type,
                    description: rocket.description,
                    flickr_images: rocket.flickr_images[0],
                    reserved: false,
                  },
                ))); */

                console.log(livecryptos);
              state.cryptos = cryptosStore;
            }
          })
    }
  })


export const { detail } = cryptoDataSlice.actions;
export default cryptoDataSlice.reducer;



