import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Course_Card } from "./Courses";
import { CircularProgress } from "@mui/material";
import Addcourse from "./Addcourse";

import Card from '@mui/material/Card';
import { Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

import { atom, useRecoilState, useSetRecoilState } from "recoil"

function Course() {
    let { courseId } = useParams();
    const setCourses = useSetRecoilState(coursesState)

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

    return <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Course_Card ></Course_Card>
        </div>
        <Addcourse bool={true} updateCourseDetails={updateCourseDetails} courseId={courseId}></Addcourse>
    </div>
}

function UpdateCard() {

}

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

function Course_Card(props) {
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
        setRecoilCourses(updatedCourses);
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
            backgroundColor: "#FAF0E6"
        }}
        onClick={() => {
            alert(props.course.title)
        }}
    >
        <Typography textAlign={"center"} variant="h6">{props.course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{props.course.description}</Typography>
        <Box display="flex" justifyContent="center">
            <Card style={{
                border: '',
                width: 290,
                marginBottom: 5.4

            }}>
                <CardMedia
                    component="img"
                    src={props.course.imageLink}
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
            style={{ color: "#B8860B" }}>₹ {props.course.price}/-</Typography>

    </Card>
}

export default Course;

const coursesState = atom({
    key: 'coursesState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});




