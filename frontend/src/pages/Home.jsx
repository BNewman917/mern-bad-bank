import { UseCard } from "../components/partials/UseCard";
import bank from "../images/bank.png";

export const Home = () => {
    return (
        <UseCard
            align="center"
            txtcolor="black"
            header="A Better Bank"
            title="Welcome to the Better Bank!"
            text="We were bad, but we got better."
            body={
                <img src={bank} className="img-fluid" alt="Responsive image" />
            }
        />
    );
};
