import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; 
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 

export function Addcourse(props) {
    console.log("hi from addcourse/updatecourse")
    const navigate = useNavigate();

    let bool = props.bool

    const [title, setTitle] = useState(bool ? props.course.title : "")
    const [description, setDescription] = useState(bool ? props.course.description : "")
    const [image, setImage] = useState(bool ? props.course.imageLink : "")
    const [price, setPrice] = useState(bool ? props.course.price : "")

    //const props.bool = props.bool || false;


    return <div style={{}}>
        <div style={{
            display: "flex",
            justifyContent: "center",

        }}>
            <Card variant={"outlined"} style={{
                width: 400,
                padding: 15,
                marginBottom: 150,
            }}>


                <Typography style={{
                    marginBottom: 10,
                    display: "flex",
                    justifyContent: "center",


                }} variant={"h5"}> {bool ? "Update Course" : "Add Course"}</Typography>

                <TextField InputProps={{ style: { borderColor: 'red' } }}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                    defaultValue={title}
                    autoFocus={true}
                /><br /><br />
                <TextField
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    fullWidth={true}
                    label="Description"
                    variant="outlined"
                    defaultValue={description}
                /><br /><br />
                <TextField
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                    fullWidth={true}
                    label="Price"
                    variant="outlined"
                    defaultValue={price}
                /><br /><br />
                <TextField
                    onChange={(e) => {
                        setImage(e.target.value)
                    }}
                    fullWidth={true}
                    label="Image Link"
                    variant="outlined"
                    defaultValue={image}
                /><br /><br />
                <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Button
                        size='large'
                        variant="contained"
                        onClick={() => {
                            console.log(bool)
                            fetch(bool ? "http://localhost:3000/admin/courses/" + props.course._id : "http://localhost:3000/admin/courses", {
                                method: bool ? "PUT" : "POST",
                                body: JSON.stringify({
                                    title: title,
                                    description: description,
                                    price: price,
                                    imageLink: image,
                                    published: true
                                }),
                                headers: {
                                    "Content-type": "application/json",
                                    "authorization": "Bearer " + localStorage.getItem("token")
                                }
                            })
                                .then((res) => {
                                    return res.json().then((data) => {
                                        // localStorage.setItem("token", data.token)
                                        console.log(data)
                                        alert(JSON.stringify(data))
                                    })
                                })
                            props.updateCourseDetails({
                                ...props.course,                  //take this course
                                title: title,                     //make these changes
                                description: description,
                                imageLink: image,
                                price: price
                            });





                            // console.log(username.value)
                            // console.log(password.value)


                        }}
                    >{bool ? "Update Course" : "Add Course"}</Button>
                    <Button style={{
                        size: "large"
                    }}
                        onClick={() => {
                            navigate("/admin/courses");
                            location.reload();
                        }}
                    >
                        View Courses
                    </Button>
                </div>
            </Card>
        </div>


    </div>
}

function viewCourses() {
    return <div>
        <Card variant={"outlined"} style={{
            width: 400,
            padding: 20,
            marginBottom: 150,
        }}></Card>
    </div>
}
export default Addcourse;