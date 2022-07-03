import { UseCard } from "../components/partials/UseCard";

export const Home = () => {
    return (
        <UseCard
            align="center"
            txtcolor="black"
            header="A Better Bank"
            title="Welcome to BetterBank!"
            text="We were bad, but we got better."
            body={
                <>
                    <img
                        src="https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/512/000000/external-bank-public-service-photo3ideastudio-solid-photo3ideastudio.png"
                        className="img-fluid"
                    />
                    <br />
                    <div
                        style={{
                            fontSize: ".6rem",
                        }}
                    >
                        <a
                            target="_blank"
                            href="https://icons8.com/icon/tx3AdinOQ2kf/bank"
                        >
                            Bank
                        </a>{" "}
                        icon by{" "}
                        <a target="_blank" href="https://icons8.com">
                            Icons8
                        </a>
                    </div>
                </>
            }
        />
    );
};
