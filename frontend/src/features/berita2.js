// pembeliSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../Url";

const initialState = {
    berita2: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}


export const getBerita2 = createAsyncThunk("berita/getBerita2", async (res, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/api/bisnis');
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


const berita2Slice = createSlice({
    name: "berita2",
    initialState,
    reducers: {
        resetberita: (state) => 
            initialState
        
    },
    extraReducers: (builder) => {
        builder.addCase(getBerita2.pending, (state) => {
                state.isLoading = true;
            })

        builder.addCase(getBerita2.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.berita2 = action.payload;
        })
            
        builder.addCase(getBerita2.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
        }
});

export const { resetberita } = berita2Slice.actions;
export default berita2Slice.reducer;
