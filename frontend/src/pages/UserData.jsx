import { UseCard } from "../components/partials/UseCard";
import { capitalize } from "../features/capitalize";
import { useSelector, useDispatch } from "react-redux";
import { logout, deleteUser, reset } from "../features/auth/authSlice";

export const UserData = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteUser(user._id));
        dispatch(logout());
        dispatch(reset());
        window.location.href = "/";
    };

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
                    <button
                        type="submit"
                        className="btn btn-outline-success"
                        onLoad={console.log(user._id)}
                        onClick={onDelete}
                    >
                        Delete User
                    </button>
                </>
            }
        />
    );
};
