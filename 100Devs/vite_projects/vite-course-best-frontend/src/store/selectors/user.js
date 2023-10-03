import { selector } from "recoil";
import { userState } from "../atoms/user";


export const isLoadingUser = selector({
    key: "isLoadingUser",
    get: ({ get }) => {
        const state = get(userState);
        return state.isLoading;
    }
}); 

export const userDetails = selector({
    key:"userDetails",
    get:({get})=>{
        const state = get(userState);
        return state;
    }
}) ;

export const usernameUser = selector({ 
    key: "usernameUser",
    get: ({ get }) => {
        const state = get(userState);
        return state.username;
    }
});
export const passwordUser = selector({
    key: "passwordUser",
    get: ({ get }) => {
        const state = get(userState);
        return state.password;
    }
});
export const idUser = selector({
    key: "ididUser",
    get: ({ get }) => {
        const state = get(userState);
        return state.id;
    }
});