
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getCategories = createAsyncThunk('ecommerce/getCategories', async (_, thunkAPI) => {

    const res = await fetch('https://dummyjson.com/products/categories');
    const data = await res.json()
   
    return (data)
})



export const categoriesSlice = createSlice({
    name: 'ecommerce',
    initialState:{categories : []} ,
    reducers: {
       fetchCatigories :(state , action)=>{
        state.categories.push(action.payload)
       }
    },


    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, action) => {
state.loading = true;
        })
        builder.addCase(getCategories.fulfilled , (state , action)=>{
            state.categories = action.payload;
           
            state.loading=false;
        })
    }
})

// Action creators are generated for each case reducer function
export const { fetchCatigories} = categoriesSlice.actions

export default categoriesSlice.reducer