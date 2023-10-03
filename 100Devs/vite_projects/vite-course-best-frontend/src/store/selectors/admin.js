import { selector } from "recoil";
import { adminState } from "../atoms/admin";

export const isLoadingAdmin = selector({
    key: "isLoadingAdmin",
    get: ({ get }) => {
        const state = get(adminState);
        return state.isLoading;
    }
});

export const adminDetails = selector({
    key:"adminDetails",
    get:({get})=>{
        const state = get(adminState);
        return state; 
    }
}) ;

export const usernameAdmin = selector({
    key: "usernameAdmin",
    get: ({ get }) => {
        const state = get(adminState);
        return state.username;
    }
});
export const passwordAdmin = selector({
    key: "passwordAdmin",
    get: ({ get }) => {
        const state = get(adminState);
        return state.password;
    }
});
export const idAdmin = selector({
    key: "idAdmin",
    get: ({ get }) => {
        const state = get(adminState);
        return state.id;
    }
});
