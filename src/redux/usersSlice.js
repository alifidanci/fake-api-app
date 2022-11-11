import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: ""
}

export const getUsers = createAsyncThunk('getUsers', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    return response.data
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.data = [];
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = "";
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.data = [];
            state.loading = false;
            state.error = "Users alınırken bir hata oluştu";
        })
    }
})

export default usersSlice.reducer