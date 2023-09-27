import { useEffect } from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import { Button, Typography } from "@mui/material"; 
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";

function MyCourses(props) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/users/purchasedCourses", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token")

            }
        }).then((res) => res.json())
            .then((data) => {
                setCourses(data.Purchased_Courses)
            })

    }, []);


    return <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

        {
            courses.map(course => {
                return <Course_Card course={course} />
            })
        }

    </div>
};

 function Course_Card(props) {
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
                marginLeft: 5,

            }}>
                <Button>
                    view details
                    </Button>
            </div>
            <div style={{
                marginLeft:13,
                marginTop:4

            }}>
                <Typography>
                course id:<br/> {props.course}
                </Typography>
            </div>




    </Card>
}

export default MyCourses;