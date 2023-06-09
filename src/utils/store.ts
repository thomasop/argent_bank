import { configureStore } from "@reduxjs/toolkit";
import { auth } from "../features/auth";
import { editBtn } from "../features/editBtn";
import { user } from "../features/user";
import { logoutUser } from "../features/logoutUser";

export const store = configureStore({
    reducer: {
        auth: auth.reducer,
        editBtn: editBtn.reducer,
        user: user.reducer,
        logoutUser: logoutUser.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>