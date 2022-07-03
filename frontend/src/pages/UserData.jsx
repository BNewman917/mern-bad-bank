import { UseCard } from "../components/partials/UseCard";
import { capitalize } from "../features/capitalize";
import { useSelector } from "react-redux";

export const UserData = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <UseCard
            bgcolor="success"
            opacity="10"
            header="User Data"
            body={
                <>
                    <p>Name: {capitalize(user.name)}</p>
                    <p>Email: {user.email}</p>
                    <p>Balance: ${user.balance.toLocaleString("en-US")}</p>
                </>
            }
        />
    );
};
