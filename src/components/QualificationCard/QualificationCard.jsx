import "./QualificationCard.css"

function QualificationCard({image, title, description, cardname}) {
    return (
        <div className = "qualification-card">
            <div className = "qualification-image-box">
                <img
                className = {`qualification-image ${cardname}`}
                src = {image}
                alt = {title}
                />
            </div>
            <div className = "qualification-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default QualificationCard;