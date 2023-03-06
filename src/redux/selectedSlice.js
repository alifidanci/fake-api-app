import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedUserId: null,
    selectedPostId: null,
    selectedAlbumId: null
}

const setSelectedSlice = createSlice({
    name: 'setSelected',
    initialState,
    reducers: {
        setUserId(state, action) {
            console.log("hello world");
            state.selectedUserId = [...state.selectedUserId, parseInt(action.payload)];
        },
        setPostId(state, action) {
            state.selectedPostId = parseInt(action.payload);
        },
        setAlbumId(state, action) {
            state.selectedAlbumId = parseInt(action.payload);
        },
    },
})

export const { setUserId, setPostId, setAlbumId } = setSelectedSlice.actions
export default setSelectedSlice.reducer
