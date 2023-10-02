import { Button, Card, CircularProgress, TextField, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseState, coursesState } from "../../store/atoms/course";
import { courseDescription, courseId, courseImage, coursePrice, courseTitle } from "../../store/selectors/course";
import { useEffect, useState } from "react";
import { Create, Edit } from "./functions";
import { useNavigate } from "react-router-dom";
 
function CreateOrEditCourse(props) {
    const navigate = useNavigate();
    let CardTitle;
    let handleClick;
    let ButtonContent;
    const [course, setCourse] = useRecoilState(courseState);

    const title = useRecoilValue(courseTitle);
    const description = useRecoilValue(courseDescription);
    const imageLink = useRecoilValue(courseImage);
    const price = useRecoilValue(coursePrice);


    if (props.action === "create") {
        CardTitle = "Create course";
        ButtonContent = "Create"
        handleClick = () => Create(course, navigate)
    } else if (props.action === "edit") {
        CardTitle = "Edit course";
        ButtonContent = "Edit";
        handleClick = () => Edit(course, setCourse);
    }

    return <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
        <Card style={{
            display: "flex", flexFlow: "column", justifyContent: "space-evenly",
            padding: 25,
            height: 350,
            width: 500,
            borderRadius: 15,
        }}>
            <Typography style={{ textAlign: "center", marginTop: -20 }} variant="h4">
                {CardTitle}
            </Typography>
            <TextField label="title" autoFocus={true}
                value={title}
                onChange={(event) => {
                    setCourse((prevCourse) => ({
                        ...prevCourse,
                        title: event.target.value
                    }));
                }} />
            <TextField label="description"
                defaultValue={description}
                onChange={(event) => {
                    setCourse((prevCourse) => ({
                        ...prevCourse,
                        description: event.target.value
                    }));
                }} />
            <TextField label="image link"
                defaultValue={imageLink}
                onChange={(event) => {
                    setCourse((prevCourse) => ({
                        ...prevCourse,
                        imageLink: event.target.value
                    }));
                }} />
            <TextField label="price"
                defaultValue={price}
                onChange={(event) => {
                    setCourse((prevCourse) => ({
                        ...prevCourse,
                        price: event.target.value
                    }));
                }} />
            <Button
                onClick={handleClick} variant="contained"
                style={{ borderRadius: 40, width: "30%", textAlign: "center", marginBottom: -15 }}
            >{ButtonContent}</Button>
        </Card>
    </div>
};



export default CreateOrEditCourse;