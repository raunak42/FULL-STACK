import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signin(props) {
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
      <Typography variant={"h5"}>Login to continue.</Typography>
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

            fetch(props.bool ? "http://localhost:3000/admin/login" : "http://localhost:3000/users/login", {
              method: "POST",
              //   body: JSON.stringify({
              //     username: username,
              //     password: password
              //   }),
              headers: {
                "Content-type": "application/json", 
                "username": username,
                "password": password
              }
            })
              .then((res) => {
                return res.json()
              })
              .then((data) => {
                console.log(data);
                localStorage.setItem("token", data.token);
                if (props.bool) {
                  navigate("/addcourse");
                  location.reload();
                } else {
                  navigate("/user/courses");
                  location.reload();
                }


                // alert(JSON.stringify(data))
              })


            // console.log(username.value)
            // console.log(password.value)


          }}
        >login</Button>
      </Card>
    </div>
    <div style={{
      display: "flex",
      justifyContent: "flex-end"
    }} >
      <div  >
        <div >
          <Typography
            marginTop={8}
            variant={"h5"}
            marginRight={5}
          >Do not have an account?</Typography>
        </div>
        <div>
          <Button
            variant="contained"
            size="medium"
            onClick={() => {
              if (props.role=="user") {
                navigate("/user/register");

              }
              if(props.role=="admin") {
                navigate("/admin/register");

              }
            }}
          >Sign up</Button>
        </div>

      </div>
    </div>




  </div>


}

export default Signin;