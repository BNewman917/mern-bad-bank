import { useState, useEffect } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, logout, reset } from "../features/auth/authSlice";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { UseCard } from "../components/partials/UseCard";
import { capitalize } from "../features/capitalize";
import { Spinner } from "react-bootstrap";

const passWrap = {
    display: "flex",
    position: "relative",
};

const eyeStyle = {
    position: "absolute",
    right: "1rem",
    top: ".3rem",
};

export const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const dispatch = useDispatch();

    const { user, isError, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        dispatch(reset());
    }, [user, isError, message, dispatch]);

    const onChange = (e) =>
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

    function validate(field, label) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!field) {
            toast.error("Error: " + label + " is required");
            return false;
        }
        if (!emailRegex.test(email)) {
            toast.error("Error: Please enter a valid email!");
            return false;
        }
        return true;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };

        if (!validate(email, "Email") || !validate(password, "Password"))
            return;
        dispatch(login(userData));
    };

    const handleLogout = () => {
        console.log(JSON.stringify(user.name));
        dispatch(logout());
        dispatch(reset());
        setFormData({
            email: "",
            password: "",
        });
    };

    const togglePass = () => {
        setShowPass(showPass ? false : true);
    };

    if (isLoading) {
        return <Spinner />;
    }

    return user ? (
        <>
            <UseCard
                align="center"
                bgcolor="success"
                opacity="10"
                header={`Hello, ${capitalize(user.name)}!`}
                body={
                    <>
                        <h4>Would you like to log out?</h4>
                        <p>Log out if you want to use a different account.</p>
                        <button
                            type="submit"
                            id="logOutButton"
                            className="btn btn-outline-success"
                            onClick={handleLogout}
                        >
                            <FaSignOutAlt /> Log Out
                        </button>
                    </>
                }
            />
        </>
    ) : (
        <UseCard
            bgcolor="success"
            opacity="10"
            header={<>Log In</>}
            body={
                <form onSubmit={handleLogin}>
                    Email
                    <br />
                    <input
                        type="input"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={onChange}
                    />
                    <br />
                    Password
                    <br />
                    <div style={passWrap}>
                        <input
                            type={showPass ? "text" : "password"}
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={onChange}
                        />
                        <div style={eyeStyle}>
                            <BsEyeSlashFill
                                fontSize={"1.5rem"}
                                onClick={togglePass}
                                style={{ cursor: "pointer" }}
                                hidden={showPass}
                            />
                            <BsEyeFill
                                fontSize={"1.5rem"}
                                onClick={togglePass}
                                style={{ cursor: "pointer" }}
                                hidden={!showPass}
                            />
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-outline-success">
                        <FaSignInAlt /> Log In
                    </button>
                </form>
            }
        />
    );
};
