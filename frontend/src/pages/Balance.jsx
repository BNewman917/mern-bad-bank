import { React } from "react";
import { UseCard } from "../components/partials/UseCard";
import { capitalize } from "../features/capitalize";
import { useSelector } from "react-redux";

export const Balance = () => {
    const { user } = useSelector((state) => state.auth);
    console.error("------------------user------------------");
    console.warn(`This is balance page for user: ${user.name}`);
    console.error("------------------user------------------");

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
