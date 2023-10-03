import { Button, Card, CardMedia, CircularProgress, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { BuyCourse } from "./functions";
import { useRecoilState, useSetRecoilState } from "recoil";
import { courseState } from "../../store/atoms/course";
import { useEffect } from "react";

export function CourseCard(props) {
    return <div style={{ display: "flex", justifyContent: "center" }}>
        <Card key={props.course._id}
            style={{
                textAlign: "center",
                padding: 10,
                margin: 15,
                borderRadius: 20,
                width: 300,
                height: "",
                display: "flex",
                flexFlow: "column",
                justifyContent: "space-between"
            }}>
            <Typography variant="h5">
                {props.course.title}
            </Typography>
            <Typography  >
                {props.course.description}
            </Typography>
            <Card style={{ borderRadius: 7 }}>
                <CardMedia
                    component={"img"}
                    src={props.course.imageLink} />
            </Card>
            <div style={{ display: "flex", justifyContent: "space-between", padding: 5 }}>
                <Typography variant="h6">
                    ₹ {props.course.price}/-
                </Typography>
                <BuyEditButton id={props.course._id} course={props.course} />
            </div>
        </Card>
    </div>
};


function BuyEditButton(props) {
    const setCourse = useSetRecoilState(courseState);

    const navigate = useNavigate();
    let ButtonContent;
    let handleClick;
    const token = localStorage.getItem("token");
    //const course = props.course;
    const courseId = props.id;

    if (window.location.pathname === `/admin/edit/${courseId}`) {
        return null;
    } else {
        if (window.location.pathname === "/user/courses" || window.location.pathname === "/user/myCourses") {
            ButtonContent = "Buy";
            handleClick = () => BuyCourse(token, courseId);
        } else if (window.location.pathname === "/admin/courses") {
            ButtonContent = "Edit";
            handleClick = () => {
                //localStorage.setItem("course", JSON.stringify(props.course));
                //setCourse(props.course);
                navigate(`/admin/edit/${courseId}`);
                //location.reload();
            }

        }
        return <Button onClick={handleClick} variant="contained" style={{ borderRadius: 40 }}>
            {ButtonContent}
        </Button>
    }

};
