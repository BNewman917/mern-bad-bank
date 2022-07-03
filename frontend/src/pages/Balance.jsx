import { React } from "react";
import { UseCard } from "../components/partials/UseCard";
import { capitalize } from "../features/capitalize";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const linkStyle = {
    TextDecoration: "none",
    color: "#E69420",
};

export const Balance = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <UseCard
            bgcolor="success"
            opacity="10"
            header="Balance"
            body={
                <>
                    <h4>Hello, {capitalize(user.name)}!</h4>
                    <p>
                        Your current balance is: $
                        {user.balance.toLocaleString()}
                    </p>
                </>
            }
        />
    );
};
