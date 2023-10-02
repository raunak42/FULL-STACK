import { atom } from "recoil";

export const courseState = atom({
    key: "courseState",
    default: {
        isLoading: true,
        title: null,
        description: null,
        imageLink: null,
        price: null,
        _id: null
    }
});


export const coursesState = atom({
    key: "coursesState",
    default: {
        isLoading: true,
        courses: []
    }
})
