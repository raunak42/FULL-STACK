import { CircularProgress } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../config";
import { useEffect, useState } from "react";
import { CourseCard } from "./courseCard";

async function BringAdminCourses() {
    let res;
    const token = localStorage.getItem("token");
    try {
        res = await axios.get(`${BASE_URL}/admin/courses`, {
            headers: {
                authorization: "Bearer " + token
            } 
        });
    } catch (error) {
        alert(error.response.data.message);
    }
    let data = res.data;
    return data.courses;
};

async function BringUserCourses() {
    let res;
    const token = localStorage.getItem("token");
    try {
        res = await axios.get(`${BASE_URL}/users/courses`, {
            headers: {
                authorization: "Bearer " + token
            }
        });
    } catch (error) {
        alert(error.response.data.message);
    }
    let data = res.data;
    return data.courses;
};

function Courses(props) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        let courses;
        async function fetchCourses() {
            if (props.role === "admin") {
                courses = await BringAdminCourses();
            } else if (props.role === "user") {
                courses = await BringUserCourses();
            }
            setCourses(courses);
        };
        fetchCourses();
    }, []) 

    if (courses.length === 0) {
        return <div style={{textAlign:"center", marginTop:100}}>
            <CircularProgress />
        </div>
    } else {
        return <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {
                courses.map((t) => {
                    return <CourseCard   key={t._id} course={t} />
                })
            }
        </div>
    }
};
export default Courses;

