import { useState } from "react";
import { UseCard } from "../components/partials/UseCard";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { capitalize } from "../features/capitalize";

const linkStyle = {
    TextDecoration: "none",
    color: "#E69420",
};

export const Withdraw = () => {
    const [disabled, setDisabled] = useState(true);

    const { user } = useSelector((state) => state.auth);

    const validate = (field) => {
        if (!Number(field)) {
            alert("Input type not valid. Please enter a number");
            return false;
        }
        if (Number(field) <= 0) {
            alert("Please enter a positive value");
            return false;
        }
        return true;
    };

    return (
        <>
            {user ? (
                <UseCard
                    onLoad={console.log(user.name)}
                    header="Withdraw"
                    body={
                        <>
                            <h4>Hello, {capitalize(user.name)}!</h4>
                            <h5>
                                Your balance is: $
                                {user.balance.toLocaleString()}
                            </h5>
                            <form>
                                <input
                                    style={{ marginTop: "1rem" }}
                                    type="input"
                                    className="form-control"
                                    id="withdraw"
                                    placeholder="Enter amount"
                                    onChange={(e) => {
                                        setDisabled(false);
                                    }}
                                />
                                <button
                                    disabled={disabled}
                                    style={{ marginTop: "1rem" }}
                                    type="submit"
                                    className="btn btn-outline-success"
                                >
                                    Withdraw
                                </button>
                            </form>
                        </>
                    }
                />
            ) : (
                <UseCard
                    header="Error"
                    body={
                        <>
                            <h4>You are not logged in!</h4>
                            <p>
                                Please{" "}
                                <a style={linkStyle} href="#/login">
                                    log in
                                </a>{" "}
                                to make a withdrawal.
                            </p>
                        </>
                    }
                />
            )}
        </>
    );
};
