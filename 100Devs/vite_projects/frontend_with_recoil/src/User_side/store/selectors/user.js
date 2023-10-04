import { selector } from "recoil";
import { userState } from "../atoms/user";

export const usernameUser = selector({
    key: "usernameUser",
    get: ({ get }) => {
        const state = get(userState);
        return state.username;
    }
})

export const passwordUser = selector({
    key: "passwordUser",
    get: ({ get }) => {
        const state = get(userState);
        return state.password;
    }
})

export const isLoadingUser = selector({
    key: "isLoadingUser",
    get: ({ get }) => {
        const state = get(userState);
        return state.isLoading;
    }
})