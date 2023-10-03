import { Button, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "./store/atoms/user";
import { usernameUser } from "./store/selectors/user";
import { useState } from "react";
import { coursesState } from "./store/atoms/course";
import { adminState } from "./store/atoms/admin";

function Appbar() {
    const [user, setUser] = useRecoilState(userState);
    const [admin, setAdmin] = useRecoilState(adminState);
    let msg = "Hello World!"
    console.log(user, admin)

    return <notLoggedin></notLoggedin>
}
export default Appbar;

function notLoggedIn() {
    return <div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: 10, backgroundColor: "#eeeeee" }}>
            <Typography variant="h4">Coursera</Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" style={{ borderRadius: 40 }}>Sign Up</Button>
                <Button variant="contained" style={{ borderRadius: 40, marginLeft: 20 }}>Sign In</Button>
            </div>
        </div>
    </div>
}

function LoggedIn() {
    return <div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: 10, backgroundColor: "#eeeeee" }}>
            <Typography variant="h4">Coursera</Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h4" style={{ marginRight: 35 }}>
                    {msg}
                </Typography>
                <Button variant="contained" style={{ borderRadius: 40 }}>Courses</Button>
                <Button variant="contained" style={{ borderRadius: 40, marginLeft: 20 }}>Log out</Button>
            </div>
        </div>
    </div>
}