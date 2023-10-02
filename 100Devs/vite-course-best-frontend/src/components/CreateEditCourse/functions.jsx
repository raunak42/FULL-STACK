import axios from "axios";
import { BASE_URL } from "../../config";

export async function Create(course, navigate) {
    let res;
    const token = localStorage.getItem("token");
    try {
        res = await axios.post(`${BASE_URL}/admin/courses`, course, {
            headers: {
                authorization: `Bearer ${token}` 
            }
        });
        alert(res.data.message);
        navigate("/admin/courses")
    } catch (error) {
        alert(error.response.data.message);
    }

};

export async function Edit(course, setCourse) {
    let courseString = JSON.stringify(course)
    localStorage.setItem("course", courseString)
    let res;
    const token = localStorage.getItem("token");
    try {
        res = await axios.put(`${BASE_URL}/admin/courses/${course._id}`, course, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        alert(res.data.message)
    } catch (error) {
        alert(error.response.data.message)
    }
}