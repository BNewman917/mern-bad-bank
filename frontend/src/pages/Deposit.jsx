import { useState } from "react";
import { UseCard } from "../components/partials/UseCard";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { capitalize } from "../features/capitalize";
import { updateBalance } from "../features/auth/authSlice";

const linkStyle = {
    TextDecoration: "none",
    color: "#E69420",
};

export const Deposit = () => {
    const [amount, setAmount] = useState(0);
    const [disabled, setDisabled] = useState(true);

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const validate = (field) => {
        if (!Number(field)) {
            toast.error("Input type not valid. Please enter a number");
            return false;
        }
        if (Number(field) <= 0) {
            toast.error("Please enter a positive value");
            return false;
        }
        return true;
    };

    const handleDeposit = (e) => {
        e.preventDefault();
        if (!validate(amount, "amount")) return;

        const newBalance = Number(amount) + user.balance;
        const userData = {
            id: user._id,
            email: user.email,
            balance: newBalance.toFixed(2),
        };
        dispatch(updateBalance(userData));
        toast.info(
            `Your deposit of $${amount.toLocaleString("en-US")} was successful`
        );
        setAmount(0);
    };

    return (
        <>
            {user ? (
                <UseCard
                    onLoad={console.log(user.name)}
                    header="Make A Deposit"
                    body={
                        <>
                            <h4>Hello, {capitalize(user.name)}!</h4>
                            <h5>
                                Your balance is: $
                                {user.balance.toLocaleString()}
                            </h5>
                            <form onSubmit={handleDeposit}>
                                <input
                                    style={{ marginTop: "1rem" }}
                                    type="input"
                                    className="form-control"
                                    id="deposit"
                                    placeholder="Enter amount"
                                    onChange={(e) => {
                                        setAmount(e.currentTarget.value);
                                        setDisabled(false);
                                    }}
                                />
                                <button
                                    disabled={disabled}
                                    style={{ marginTop: "1rem" }}
                                    type="submit"
                                    className="btn btn-outline-success"
                                >
                                    Deposit
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
                                to make a deposit.
                            </p>
                        </>
                    }
                />
            )}
        </>
    );
};
