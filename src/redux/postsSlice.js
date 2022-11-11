import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: ""
}

export const getPosts = createAsyncThunk('getPosts', async (userId) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts?userId="+userId);

    return response.data;
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.data = [];
        });
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = "";
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            state.data = [];
            state.loading = false;
            state.error = "Posts alınırken bir hata oluştu";
        })
    }
})

export default postsSlice.reducer