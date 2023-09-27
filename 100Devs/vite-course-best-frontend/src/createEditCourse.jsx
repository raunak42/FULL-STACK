import { Button, Card, TextField, Typography } from "@mui/material";

function CreateEditCourse() {
    let CardTitle = "hello";
    let buttonText = "Create";

    return <div style={{ display: "flex", justifyContent: "center", marginTop: 120 }}>
        <Card style={{ width: 500, borderRadius: 15, textAlign: "center", padding: 15 }}>
            <Typography variant="h5">Hi {CardTitle}</Typography>
            <TextField label="Title" style={{ width: "90%", marginTop: 15 }}></TextField>
            <TextField label="Description" style={{ width: "90%", marginTop: 15 }}></TextField>
            <TextField label="Image link" style={{ width: "90%", marginTop: 15 }}></TextField>
            <TextField label="Price" style={{ width: "90%", marginTop: 15 }}></TextField>
            <Button variant="contained" style={{ borderRadius: 40, marginTop: 15 }}>{buttonText}</Button>
        </Card>
    </div>
}
export default CreateEditCourse;
