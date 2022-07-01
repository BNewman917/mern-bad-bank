import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { UseCard } from "../components/partials/UseCard";

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

    const onChange = (e) =>
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    const onSubmit = (e) => e.preventDefault();

    const togglePass = () => {
        setShowPass(showPass ? false : true);
    };

    return (
        <UseCard
            bgcolor="success"
            opacity="10"
            header={
                <>
                    <FaSignInAlt /> Log In
                </>
            }
            body={
                <>
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
                    <button
                        type="submit"
                        className="btn btn-outline-success"
                        onSubmit={onSubmit}
                    >
                        Log In
                    </button>
                </>
            }
        />
    );
};
