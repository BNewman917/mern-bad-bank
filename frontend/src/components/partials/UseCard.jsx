export const UseCard = (props) => {
    const classes = () => {
        const align = props.align ? " text-" + props.align : "";
        const bg = props.bgcolor ? " bg-" + props.bgcolor : "";
        const txt = props.txtcolor ? " text-" + props.txtcolor : "";
        const opacity = props.opacity ? " bg-opacity-" + props.opacity : "";
        return "card mb-3" + align + bg + txt + opacity;
    };

    return (
        <div
            className={classes()}
            style={{
                maxWidth: "30rem",
                margin: "auto",
                marginTop: "5rem",
            }}
        >
            <h5
                className="card-header"
                style={{ backgroundColor: "#cae9ed", textAlign: "center" }}
            >
                {props.header}
            </h5>
            <div className="card-body">
                {props.title && <h5 className="card-title">{props.title}</h5>}
                {props.text && <p className="card-text">{props.text}</p>}
                {props.body}
                {props.status && (
                    <div id="createStatus" style={{ marginTop: "1rem" }}>
                        {props.status}
                    </div>
                )}
            </div>
        </div>
    );
};
