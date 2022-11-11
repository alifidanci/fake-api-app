import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: ""
}

export const getComments = createAsyncThunk('getComments', async (postId) => {
    if (postId === null) return [];
    
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments?postId="+postId);

    return response.data;
})

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getComments.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.data = [];
        });
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = "";
        })
        builder.addCase(getComments.rejected, (state, action) => {
            state.data = [];
            state.loading = false;
            state.error = "Comments alınırken bir hata oluştu";
        })
    }
})

export default commentsSlice.reducer