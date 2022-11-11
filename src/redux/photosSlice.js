import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: ""
}

export const getPhotos = createAsyncThunk('getPhotos', async (albumId) => {
    if (albumId === null) return [];
    
    const response = await axios.get("https://jsonplaceholder.typicode.com/Photos?albumId="+albumId);

    return response.data;
})

const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPhotos.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.data = [];
        });
        builder.addCase(getPhotos.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = "";
        })
        builder.addCase(getPhotos.rejected, (state, action) => {
            state.data = [];
            state.loading = false;
            state.error = "Photos alınırken bir hata oluştu";
        })
    }
})

export default photosSlice.reducer