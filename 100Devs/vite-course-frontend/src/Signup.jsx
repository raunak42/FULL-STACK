import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("") 
  return <div style={{}}>
    {/* {username}
    {password} */}

    <div style={{
      paddingTop: 150,  
      marginBottom: 10,
      display: "flex",
      justifyContent: "center"

    }}>
      <Typography variant={"h5"}>Sign up below.</Typography>
    </div>
    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
      <Card variant={"outlined"} style={{
        width: 400,
        padding: 20,
        marginBottom: 150,
      }}>
        <TextField
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          fullWidth={true}
          label="Username"
          variant="outlined"
        />
        <br /><br />
        <TextField
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          fullWidth={true}
          label="Password"
          variant="outlined"
          type={"password"}
        />
        <br /><br />
        <Button
          size='large'
          variant="contained"
          onClick={() => {

            fetch("http://localhost:3000/admin/signup", {
              method: "POST",
              body: JSON.stringify({
                username: username,
                password: password
              }),
              headers: {
                "Content-type": "application/json"
              }
            })
              .then((res) => {
                return res.json()
              })
              .then((data) => {
                console.log(data)
                alert(JSON.stringify(data))
              })
            navigate("/admin/login");
            location.reload();


            // console.log(username.value)
            // console.log(password.value)


          }}
        >Sign Up</Button>
      </Card>
    </div>


  </div>


}

export default Signup;