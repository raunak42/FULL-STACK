import { Button, Card, TextField, Typography, alertTitleClasses } from "@mui/material";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { passwordAdmin, usernameAdmin } from "../../store/selectors/admin";
import { userState } from "../../store/atoms/user";
import { adminState } from "../../store/atoms/admin";
import { useState } from "react";
import { usernameUser } from "../../store/selectors/user";
import { usernameState, passwordState } from "../../store/atoms/other";
import { AdminLogin, AdminSignup, UserLogin, UserSignup } from "./functions";
import { useNavigate } from "react-router-dom";


function SomeCommponent() {
    const user = useRecoilValue(userState);
    const A = useRecoilValue(usernameUser);

    console.log(user);
    console.log(A);

    return <div>

    </div>
}



function Signup_Login(props) {
    const navigate = useNavigate();

    const [user, setUser] = useRecoilState(userState);
    const [admin, setAdmin] = useRecoilState(adminState);

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    let CardTitle;
    let ButtonContent;
    let handleClick;
    let action = props.action;
    let role = props.role;
    if (action === "login") {
        CardTitle = "Log in below";
        ButtonContent = "login"
        if (role === "user") {
            handleClick = () => UserLogin(user, navigate);
        } else if (role === "admin") {
            handleClick = () => AdminLogin(admin, navigate);
            console.log(action, role)
        }
    }
    else if (action === "signup") {
        CardTitle = "Sign up below";
        ButtonContent = "signup";
        if (role === "user") {
            handleClick = () => UserSignup(user, navigate);
        } else if (role === "admin") {
            handleClick = () => AdminSignup(admin, navigate);
        }
    }

    return <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: 450, textAlign: "center", marginTop: 100, padding: 15, borderRadius: 15 }}>
            <Typography variant="h5">
                {CardTitle}
            </Typography>
            <TextField autoFocus={true} label="Username" style={{ width: "90%", marginTop: 15 }}
                onChange={
                    (event) => {
                        role === "user" ?
                            setUser((prevUser) => ({
                                ...prevUser,
                                username: event.target.value,
                                isLoading: false
                            }))
                            :
                            setAdmin((prevAdmin) => ({
                                ...prevAdmin,
                                username: event.target.value,
                                isLoading: false
                            }))
                    }
                }
            >
            </TextField>
            <TextField type="password" label="Password" style={{ width: "90%", marginTop: 15 }}
                onChange={
                    (event) => {
                        role === "user" ?
                            setUser((prevUser) => ({
                                ...prevUser,
                                password: event.target.value,
                                isLoading: false
                            }))
                            :
                            setAdmin((prevAdmin) => ({
                                ...prevAdmin,
                                password: event.target.value,
                                isLoading: false
                            }))
                    }
                }
            >
            </TextField>
            <Button variant="contained" style={{ borderRadius: 20, marginTop: 15 }} onClick={handleClick}>
                {ButtonContent}
            </Button>
        </Card><br />
    </div >


}
export default Signup_Login;



