import axios from "axios";
import { BASE_URL } from "../../config";

export async function BuyCourse(token, courseId) {
    try {
        const res = await axios.post(`${BASE_URL}/users/courses/${courseId}`, {}, {
            headers: {
                authorization: "Bearer " + token
            }
        });
        alert(res.data.message)
    } catch (error) {
        alert(error.response.data.message)
    }
}

export async function EditCourse(token, courseId) {
    try {
        const res = await axios.put(`${BASE_URL}/admin/courses/${courseId}`, {
            
        }, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        alert(res.data.message);
    } catch (error) {
        alert(error.response.data.message)
    }
}