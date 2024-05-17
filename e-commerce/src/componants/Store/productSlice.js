/* eslint-disable array-callback-return */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import swal from 'sweetalert';

export const getData = createAsyncThunk('ecommerce/getData', async (_, thunkAPI) => {

    const res = await fetch('https://dummyjson.com/products?skip=0&limit=200');
    const data = await res.json()
    console.log(data)
    return (data.products)
})



export const productSlice = createSlice({
    name: 'ecommerce',
    initialState: { product: [] },
    reducers: {

        filter: (state, action) => {
            swal("Good Job!", `You are filtered only ${action.payload} product!`, "success")
           const filter = state.product.filter((product)=>(product.category ===action.payload))
           state.product = filter
         
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.product = action.payload;

            state.loading = false;
        })
    }
})

// Action creators are generated for each case reducer function
export const { loading, filter } = productSlice.actions

export default productSlice.reducer