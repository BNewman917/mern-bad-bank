import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { UseCard } from "../components/partials/UseCard";

const passWrap = {
    display: "flex",
    position: "relative",
};

const eyeStyle = {
    position: "absolute",
    right: "1rem",
    top: ".5rem",
};

function CreateAccount() {
    const [showPass, setShowPass] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formData;

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
                    <FaUser /> Create Account
                </>
            }
            body={
                <>
                    Name
                    <br />
                    <input
                        type="input"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={onChange}
                    />
                    <br />
                    Email
                    <br />
                    <input
                        type="input"
                        className="form-control"
                        id="email"
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
                            placeholder="Enter password"
                            value={password}
                            onChange={onChange}
                        />
                        <i style={eyeStyle} onClick={togglePass}>
                            {showPass ? BsEye : BsEyeSlash}
                        </i>
                    </div>
                    <br />
                    <button
                        type="submit"
                        className="btn btn-outline-success"
                        onSubmit={onSubmit}
                    >
                        Create account
                    </button>
                </>
            }
        />
    );
}

export default CreateAccount;
