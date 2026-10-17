import "./QualificationCard.css"

function QualificationCard({image, title, description, cardname, link}) {
    const card = (
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

    return link ? (
        <a className="qualification-card-link" href={link} target="_blank" rel="noopener noreferrer">
            {card}
        </a>
    ) : card;
}

export default QualificationCard;
