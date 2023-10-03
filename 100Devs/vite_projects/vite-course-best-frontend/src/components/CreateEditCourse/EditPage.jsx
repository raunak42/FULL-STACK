import { CircularProgress, Grid, Typography } from "@mui/material";
import CreateOrEditCourse from "./CreateEdit";
import { CourseCard } from "../courses/courseCard";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseState, coursesState } from "../../store/atoms/course";
import { courseTitle } from "../../store/selectors/course";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";

function EditPage() {
    return <div >
        <Grid container >
            <Grid item xs={12} md={7} lg={7} style={{ backgroundColor: "red" }}>
                <CreateOrEditCourse action={"edit"} />
            </Grid>
            <Grid item xs={12} md={5} lg={5} style={{ backgroundColor: "blue" }}>
                <Course />
            </Grid>
        </Grid>
    </div>
};

function Course() {
    let res;
    const { courseId } = useParams();  //object destructuring
    const [course, setCourse] = useRecoilState(courseState);
    console.log(courseId)

    useEffect(() => {
        async function fetchCourse() {
            const token = localStorage.getItem("token");
            res = await axios.get(`${BASE_URL}/admin/course/${courseId}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            setCourse({
                ...res.data.course,
                isLoading: false
            });
        };
        fetchCourse();
    }, []);

    if (course.isLoading === true) {
        return <div style={{ textAlign: "center" }}>
            <CircularProgress />
        </div>
    } else if (course.isLoading === false) {
        return <div >
            <GrayTopper />
            <Grid container >
                <Grid item xs={12} md={7} lg={7} style={{ backgroundColor: "" }}>
                    <CreateOrEditCourse action={"edit"} />
                </Grid>
                <Grid item xs={12} md={5} lg={5} style={{ backgroundColor: "" }}>
                    <CourseCard course={course} />
                </Grid>
            </Grid>
        </div>
    }
};

function GrayTopper() {
    const title = useRecoilValue(courseTitle);
    return <div style={{
        backgroundColor: "#212121", height: 250, width: "100vw",
        display: "flex", flexDirection: "column", justifyContent: "center",
        marginBottom: -170
    }}>
        <Typography variant="h3" fontWeight={600} textAlign={"center"} style={{ color: "white" }}>
            {title}
        </Typography>
    </div>
}


export default Course;