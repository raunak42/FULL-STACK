import { selector } from "recoil";
import { userState } from "../atoms/user";

export const usernameAdmin = selector({
    key: "usernameAdmin",
    get: ({ get }) => {
        const state = get(userState);
        return state.username;
    }
})

export const passwordAdmin = selector({
    key: "passwordAdmin",
    get: ({ get }) => {
        const state = get(userState);
        return state.password;
    }
})

export const isLoadingAdmin = selector({
    key: "isLoadingAdmin",
    get: ({ get }) => {
        const state = get(userState);
        return state.isLoading;
    }
})