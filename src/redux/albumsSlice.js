import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: ""
}

export const getAlbums = createAsyncThunk('getAlbums', async (userId) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/albums?userId="+userId);

    return response.data;
})

const albumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAlbums.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.data = [];
        });
        builder.addCase(getAlbums.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = "";
        })
        builder.addCase(getAlbums.rejected, (state, action) => {
            state.data = [];
            state.loading = false;
            state.error = "Posts alınırken bir hata oluştu";
        })
    }
})

export default albumsSlice.reducer