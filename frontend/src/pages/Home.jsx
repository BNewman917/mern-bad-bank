import { UseCard } from "../components/partials/UseCard";

const warningStyle = {
    color: "red",
    fontSize: ".8rem",
    fontWeight: "bold",
    marginBottom: "1rem",
};

export const Home = () => {
    return (
        <UseCard
            align="center"
            txtcolor="black"
            header="A Better Bank"
            title="Welcome to BetterBank!"
            text="We were bad, but I got better."
            body={
                <>
                    <img
                        alt="bank"
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
                            rel="noreferrer"
                            href="https://icons8.com/icon/tx3AdinOQ2kf/bank"
                        >
                            Bank
                        </a>{" "}
                        icon by{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://icons8.com"
                        >
                            Icons8
                        </a>
                    </div>
                    <p style={warningStyle}>
                        This app is for educational purposes only. Please do not
                        use your real credentials
                    </p>
                </>
            }
        />
    );
};
