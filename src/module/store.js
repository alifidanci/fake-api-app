import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../redux/postsSlice";
import usersSlice from "../redux/usersSlice";
import albumsSlice from "../redux/albumsSlice";
import commentsSlice from "../redux/commentsSlice";
import photosSlice from "../redux/photosSlice";
import selectedSlice from "../redux/selectedSlice";

export default configureStore({
    reducer:{
        users:usersSlice,
        posts:postsSlice,
        albums:albumsSlice,
        comments:commentsSlice,
        photos:photosSlice,
        setSelected:selectedSlice,
    },
})