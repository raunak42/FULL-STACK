import { Button, Typography } from "@mui/material";

function Appbar() {
    return <div>
        <div style={{ display: "flex", justifyContent: "space-between", padding:10, backgroundColor:"#eeeeee" }}>
            <Typography variant="h4">Coursera</Typography>
            <div>
                <Button variant="contained" style={{ borderRadius: 40 }}>Sign Up</Button>
                <Button variant="contained" style={{ borderRadius: 40, marginLeft: 20 }}>Sign In</Button>
            </div>
        </div>
    </div>
}
export default Appbar;