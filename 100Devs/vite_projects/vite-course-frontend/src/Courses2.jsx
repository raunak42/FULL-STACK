import { useEffect } from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import { Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { useRecoilState } from "recoil";

import { coursesState } from "./Course2";

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/admin/courses", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        }
        )
            .then((res) => {
                res.json().then((data) => {
                    //console.log(data);
                    setCourses(data.courses);
                    console.log(data)
                })
            })

    }, [])
    return <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

        {
            courses.map(course => {
                return <Course_Card course={course} />
            })
        }

    </div>
};

export function Course_Card(props) { 
    //const course = props.course;
    const courses = useRecoilState(coursesState);

    let course = null;
    for (let i = 0; i < courses.length; i++) {
        if (courses[i]._id == courseId) {
            course = courses[i]
        }
    }   

    const updateCourseDetails = (updatedCourse) => {
        // Update the course details in the state
        const updatedCourses = courses.map(c => (c._id === updatedCourse._id ? updatedCourse : c));
        setCourses(updatedCourses);
    };

    if (!course) {
        return <div>
            <CircularProgress></CircularProgress>
        </div>
    }
    return <Card
        style={{
            border: "",
            margin: 10,
            width: 300,
            minHeight: 200,
            backgroundColor:"#FAF0E6"
        }}
        onClick={() => {
            alert(course.title)
        }}
    >
        <Typography textAlign={"center"} variant="h6">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <Box display="flex" justifyContent="center">
            <Card style={{
                border: '',
                width: 290,
                marginBottom: 5.4

            }}>
                <CardMedia
                    component="img"
                    src={course.imageLink}
                    style={{
                        width: 300,
                        height: '100%',
                        margin: 'auto',
                    }}
                />
            </Card>
        </Box>
        <Typography
            textAlign={"flex-start"}
            variant="subtitle"
            style={{ color: "#B8860B" }}>₹ {course.price}/-</Typography>

    </Card>
}

export default Courses;