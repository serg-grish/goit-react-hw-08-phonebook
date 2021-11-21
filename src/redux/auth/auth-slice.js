import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from "./auth-operations";

const initialState = {
    users: { name: null, email: null},
    token: null,
    isLoggedIn: false,
    isFeachingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfield](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLiggedIn = true;
        },
        [authOperations.logIn.fulfield](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLiggedIn = true;
        },
        [authOperations.logOut.fulfield](state, _) {
            state.user = {name: null, email: null };
            state.token = null;
            state.isLiggedIn = false;
        },
        [authOperations.fetchCurrentUser.pending](state) {
            state.isFeachingCurrentUser = true;
        },
        [authOperations.fetchCurrentUser.fulfield](state, action) {
            state.user = action.payload;
            state.isLiggedIn = true;
            state.isFeachingCurrentUser = false;
        },
        [authOperations.fetchCurrentUser.rejected](state) {
            state.isFeachingCurrentUser = false;
        },
    },
});

export default authSlice.reducer;