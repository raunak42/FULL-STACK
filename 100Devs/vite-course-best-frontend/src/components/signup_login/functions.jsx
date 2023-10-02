import axios from "axios";
import { BASE_URL } from "../../config";

export async function UserSignup(user, navigate) {
    try {
        const res = await axios.post(`${BASE_URL}/users/signup`, {
            username: user.username,
            password: user.password
        });
        let data = res.data;
        alert(data.message);
        navigate("/user/login")
    } catch (error) {
        alert(error.response.data.message)
    }

};

export async function AdminSignup(admin, navigate) {
    try {
        const res = await axios.post(`${BASE_URL}/admin/signup`, {
            username: admin.username,
            password: admin.password
        });
        let data = res.data;
        alert(data.message);
        navigate("/admin/login")
    } catch (error) {
        alert(error.response.data.message);

    }
};

export async function UserLogin(user, navigate) {
    try {
        const res = await axios.post(`${BASE_URL}/users/login`, {}, {
            headers: {
                username: user.username,
                password: user.password
            }
        });
        const data = res.data;
        localStorage.setItem("token", data.token);
        alert(data.message)
    } catch (error) {
        alert(error.response.data.message)
    }
};

export async function AdminLogin(admin, navigate) {
    localStorage.setItem("nameAdmin", admin.username)
    try {
        const res = await axios.post(`${BASE_URL}/admin/login`, {}, {
            headers: {
                username: admin.username,
                password: admin.password
            }
        });
        const data = res.data;
        localStorage.setItem("token", data.token);
        alert(data.message);
        navigate("/admin/courses");
    } catch (error) {
        alert(error.response.data.message)
    }
};