import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";

function Landing() {
    return <div style={{ minHeight: "100vh", backgroundColor: "#eeeeee" }}>
        <Grid container style={{ padding: 20, marginTop: 0 }}>
                <Grid item xs={12} md={5} lg={5} style={{/*backgroundColor:"red",*/ marginTop:180}} >
                    <div style={{ marginTop: 100, marginLeft: 30 }}>
                        <Typography variant="h2">
                            Coursera Admin
                        </Typography>
                        <Typography variant="h5">
                            A place to learn, earn and grow.
                        </Typography>
                        <div style={{ marginTop: 30 }}>
                            <Button style={{ borderRadius: 40 }} variant="contained">Sign Up</Button>
                            <Button style={{ borderRadius: 40, marginLeft: 20 }} variant="contained">Sign In</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={7} lg={7} style={{/*backgroundColor:"blue,"*/ marginTop:120}}>
                    <img style={{ borderRadius: 20, marginLeft: 35 }} src="https://imgix.ranker.com/user_node_img/50072/1001437441/original/the-morty-academy-is-a-perfect-satire-of-american-education-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375"></img>
                </Grid>
        </Grid>


    </div>


}
export default Landing;
