import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Course_Card } from "./Courses";
import { CircularProgress, Grid, Typography } from "@mui/material";
import Addcourse from "./Addcourse";
import { atom } from "recoil"; 



function Course() {
    console.log("hi from course") 
    let { courseId } = useParams();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/admin/courses", {
            method: "GET",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("token"),
                "Content-type": "application/json"


            }
        })
            .then((res) => {
                res.json().then((data) => {
                    setCourses(data.courses)
                })
            })


    }, []);

    let course = null;  
    for (let i = 0; i < courses.length; i++) {
        if (courses[i]._id == courseId) {
            course = courses[i]
        }
    }
    if (!course) {
        return <div>
            <CircularProgress></CircularProgress>
        </div>
    }
    const updateCourseDetails = (updatedCourse) => {
        // Update the course details in the state
        const updatedCourses = courses.map(c => (c._id === updatedCourse._id ? updatedCourse : c));
        setCourses(updatedCourses);
    };
 
    return <div>
        <GrayTopper title={course.title}></GrayTopper>
        <Grid container>
            <Grid item lg={8} md={12} sm={12} style={{marginTop:105 }}>
                <Addcourse bool={true} course={course} updateCourseDetails={updateCourseDetails}></Addcourse>
            </Grid>
            <Grid item lg={4} md={12} sm={12}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Course_Card course={course}></Course_Card>
                </div>
            </Grid>
        </Grid>

    </div>
}

function GrayTopper({ title }) {
    return <div style={{ height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -140 }}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <Typography style={{ color: "white", fontWeight: 600 }} variant="h3" textAlign={"center"}>
                {title}
            </Typography>
        </div>
    </div>
}

export default Course;

const coursesState = atom({
    key: 'coursesState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});


