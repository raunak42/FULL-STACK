import { selector } from "recoil";
import { courseState } from "../atoms/course";


export const isCourseLoading = selector({
    key: "isCourseLoading",
    get: ({ get }) => {
        const state = get(courseState);
        return state.isLoading;
    }
});

export const courseDetails = selector({ 
    key: "courseDetailsState",
    get: ({ get }) => { 
        const state = get(courseState);
        return state;
    }
});

export const courseTitle = selector({
    key: "CourseTitleState",
    get: ({ get }) => {
        const state = get(courseState);
        return state.title;
    }
});

export const coursePrice = selector({
    key: "coursePriceState",
    get: ({ get }) => {
        const state = get(courseState);
        return state.price;
    }
});

export const courseImage = selector({
    key: "courseImageState",
    get: ({ get }) => {
        const state = get(courseState);
        return state.imageLink;
    }
});

export const courseDescription = selector({
    key: "courseDescriptionState",
    get: ({ get }) => {
        const state = get(courseState);
        return state.description;
    }
}); 

export const courseId = selector({
    key: "courseIdState",
    get: ({ get }) => {
        const state = get(courseState);
        return state._id;
    }
});