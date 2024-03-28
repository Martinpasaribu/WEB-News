// pembeliSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../Url";

const initialState = {
    berita: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const getBerita = createAsyncThunk("berita/getBerita", async (res, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/api/news');
        // const [data1,  data2] = response.data;
        // console.log(data1); // Data pertama
        // console.log(data2); // Data kedua

        // return [data1,  data2]
        return response.data

    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});


// export const Keluar = createAsyncThunk("pembeli/Keluar", async() =>{
//       await axios.delete(`${BASE_URL}/keluar`);
// });


const beritaSlice = createSlice({
    name: "berita",
    initialState,
    reducers: {
        resetberita: (state) => 
            initialState
        
    },
    extraReducers: (builder) => {
        builder.addCase(getBerita.pending, (state) => {
                state.isLoading = true;
            })

        builder.addCase(getBerita.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.berita = action.payload;
        })
            
        builder.addCase(getBerita.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });

    }
});

export const { resetberita } = beritaSlice.actions;
export default beritaSlice.reducer;
