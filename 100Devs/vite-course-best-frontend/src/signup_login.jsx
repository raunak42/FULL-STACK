import { Button, Card, TextField, Typography } from "@mui/material";
import { atom, selector } from "recoil";

function Signup_Login(props) {
    let CardTitle;
    let action = props.action;
    if(action==="login"){
       CardTitle = "Log in below";
    }
    else if(action==="signup"){
        CardTitle = "Sign up below"
    }

    return<div style={{display:"flex", justifyContent:"center"}}>
        <Card style={{width:500, textAlign:"center"}}>
         <Typography>
            {CardTitle}
         </Typography>
         <TextField label=""></TextField>
        </Card>
    </div>

    
}
export default Signup_Login;

const courseState = atom({
    key:"courseState",
    default:{
        isLoading: true,
        course:null
    }
});

const isCourseLoading = selector({
    key:"isCourseLoading",
    get:({get})=>{
        const state = get(courseState);
        return state.isLoading;
    }
});

const courseDetails  = selector({
    key:"courseDetailsState",
    get:({get})=>{
        const state = get(courseState);
        return state.course;
    }
});

const courseTitle = selector({
    key:"CourseTitleState",
    get:({get})=>{
        const state = get(courseState);
        return state.course.title;
    }
});

const coursePrice = selector({
    key:"coursePriceState",
    get:({get})=>{
        const state = get(courseState);
        return state.course.price;
    }
});

const courseImage = selector({
    key:"courseImageState",
    get:({get})=>{
        const state = get(courseState);
        return state.course.image;
    }
});

const courseDescription = selector({
    key:"courseDescriptionState",
    get:({get})=>{
        const state = get(courseState);
        return state.course.description;
    }
})