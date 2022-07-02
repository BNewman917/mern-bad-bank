import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

// Register a new user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData);
    console.log("-------------");
    console.log(response.data);
    console.log("-------------");

    if (response.data) {
        console.error("Setting local storage");
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

// Logout user
const logout = async () => {
    localStorage.removeItem("user");
};

const authService = {
    register,
    logout,
    login,
};

export default authService;