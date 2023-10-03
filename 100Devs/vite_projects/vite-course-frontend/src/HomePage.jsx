import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function HomePage() {
    const navigate= useNavigate();
    const [role, setRole] = useState("user");
    return <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 280

    }}>
        <Card variant={"outlined"} style={{
            width: 300,
            padding: 20,
            marginBottom: 150,
            // display: "flex", 
            // justifyContent: "center"
        }}><div><FormControl>
            <FormLabel id="role">Choose your role:</FormLabel>
            <RadioGroup
                aria-labelledby="role"
                defaultValue="user"
                name="radio-buttons-group"
                onChange={(event)=>{
                   setRole(event.target.value)
                }}
            >
                <FormControlLabel
                    value="user"
                    control={<Radio />}
                    label="user"
                    />
                    
                <FormControlLabel
                    value="admin"
                    control={<Radio />}
                    label="admin"
                     />
            </RadioGroup>
        </FormControl>
            </div>
            <div>
                <Button
                    size="large"
                    variant="contained"
                    onClick={() => {
                        if (role == "user") {
                            navigate("/user/login");
                            //location.reload();
                        }
                        if (role == "admin") {
                            navigate("/admin/login");
                            //location.reload();
                        }
                        
                        
                    }}
                >
                    Continue
                </Button>
            </div>



        </Card>
    </div>
}

export default HomePage;