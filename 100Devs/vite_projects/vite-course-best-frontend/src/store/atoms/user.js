import { atom } from "recoil";

export const userState = atom({
    key: "userState",
    default: {
        isLoading: true,
        username: null,
        password: null,
        id: null
    }
});
    
 