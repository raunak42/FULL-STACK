import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from '@mui/icons-material';
//import { useHistory } from 'react-router-dom';


function Appbar(props) {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState(null);
    

    useEffect(() => {
        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then((res) => {
                return res.json().then((data) => {
                    setUsername(data.username);
                    setUserId(data.user._id);
                })
            })


    }, []
    );

   


    if (username) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4
        }} >
            <div style={{

            }}>
                <div>
                    <Button
                        style={{ marginLeft: 10 }}
                        variant="contained"
                        endIcon={<ArrowBack style={{
                            marginRight: 13
                        }} />}
                        sx={{
                            borderRadius: '50%',   // Make the button circular
                            width: '38px',         // Smaller width
                            height: '38px',        // Smaller height
                            minWidth: '38px',      // Ensure a minimum width
                            minHeight: '38px',

                        }}
                        onClick={() => {
                            window.history.back();
                        }}>

                    </Button>
                    
                </div>
            </div>



            <div style={{
                display: "flex",
                justifyContent: "flex-end",

            }}>
                <div style={{
                    backgroundColor: "",
                    marginRight: 15
                }}>
                    <Typography variant={"h6"}>Welcome {username}!</Typography>
                </div>

                <div>
                    <Button style={{ marginRight: 10 }}
                        size='medium'
                        variant="contained"
                        onClick={() => {
                            localStorage.setItem("token", null);
                            navigate("/admin/login");
                            location.reload();
                        }} >Logout</Button>
                </div>
            </div>

        </div>
    }
    

    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
    }}>
        <div style={{ backgroundColor: "" }}>
            <Typography variant={"h6"}>Coursera</Typography>

        </div>
        <div>

            <Button style={{ marginRight: 10 }}
                size='medium'
                variant="contained"
                onClick={() => {
                    navigate("/admin/register")

                }} >Sign Up</Button>

            <Button size='medium'
                variant="contained"
                onClick={() => {
                    navigate("/admin/login");
                }}>Sign In</Button>


        </div>

    </div>
};

export default Appbar;