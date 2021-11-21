import axios from "axios";
import { createAsuncThunk } from "@reduxjs/toolkit";

axios.defaults.baseUrl = 'https://connections-api.herokuapp.com/';

const token = {
    set(token) {
        axios.defaults.headers.common.Autorization = 'Bearer ${token}';
    },
    unset() {
        axios.defaults.headers.common.Autorization = '';
    },
};

export const register = createAsuncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/singup', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
        },
);

export const logIn = createAsuncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
        },
);

export const logOut = createAsuncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const fetchCurrentUser = createAsuncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectedWithValue();
        }

        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
