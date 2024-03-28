// pembeliSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../Url";

const initialState = {
    alldata: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}


export const getdata = createAsyncThunk("alldata/getdata", async (res, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/api/data');
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


const dataSlice = createSlice({
    name: "alldata",
    initialState,
    reducers: {
        resetberita: (state) => 
            initialState
        
    },
    extraReducers: (builder) => {
        builder.addCase(getdata.pending, (state) => {
                state.isLoading = true;
            })

        builder.addCase(getdata.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.alldata = action.payload;
        })
            
        builder.addCase(getdata.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
        }
});

export const { resetberita } = dataSlice.actions;
export default dataSlice.reducer;
