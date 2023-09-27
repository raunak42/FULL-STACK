import { useEffect } from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import { Button, Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from "react-router-dom";

function Courses(props) { 
    const navigate = useNavigate(); 
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(props.bool ? "http://localhost:3000/admin/courses" : "http://localhost:3000/users/courses", {
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
                })
            })

    }, []);


    return <div>
        <div style={{
            marginLeft:14
        }}>
            <Button
            variant="contained"
            onClick={() => {
                navigate("/user/myCourses")
            }}
            >My courses</Button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

            {
                courses.map(course => {
                    return <Course_Card course={course} />
                })
            }

        </div>
    </div>
};

export function Course_Card(props) {            
    const courseId = useParams();
    return <Card
        style={{
            border: "",
            margin: 10, 
            width: 300,
            minHeight: 200,
            backgroundColor: "#FAF0E6"
        }}
        onClick={() => {
            //alert(props.course.title)
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
        <div style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <Typography
                variant="subtitle"
                style={{ color: "#B8860B", marginLeft: 5 }}>₹ {props.course.price}/-
            </Typography>
            <div style={{
                marginRight: 5,

            }}>
                <Button
                    style={
                        {
                            borderColor: "#B8860B",
                            color: "#B8860B"
                        }


                    }
                    size="small"
                    variant="outlined"
                    onClick={() => {
                        console.log(props.course._id)
                        fetch("http://localhost:3000/users/courses/" + props.course._id, {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json",
                                "authorization": "Bearer " + localStorage.getItem("token")
                            }
                        })
                            .then((res) => {
                                return res.json()
                                    .then((data) => {
                                        console.log(data);
                                    })
                            })
                        //alert("bought the course " + JSON.stringify(props.course._id))
                    }} >Buy</Button>
            </div>

        </div>



    </Card>
}

export default Courses;