import { createSlice } from '@reduxjs/toolkit';

const authData = JSON.parse(localStorage.getItem('authData'));

const initialState = authData
    ? { logIn: true, username: authData.username, admin: authData.admin }
    : {};

const authReducer = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        logIn: (state, action) => {
            const admin =
                action.payload.username === 'testAdmin@gmail.com' &&
                action.payload.password === '12345yuiopp';
            localStorage.setItem(
                'authData',
                JSON.stringify({
                    username: action.payload.username,
                    password: action.payload.password,
                    admin: admin,
                }),
            );
            return {
                ...state,
                username: action.payload.username,
                logIn: action.payload.submitted,
                admin: admin,
            };
        },
        logOut: (state) => {
            localStorage.clear();
            return {
                ...state,
                username: null,
                logIn: false,
                admin: false,
            };
        },
    },
});

export const { logIn, logOut } = authReducer.actions;

export default authReducer.reducer;
