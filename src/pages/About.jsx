import { FaLinkedin } from 'react-icons/fa';
import QualificationCard from '../components/QualificationCard/QualificationCard.jsx';
import './About.css';

const education = [
    {
    id: 0,
    image: "src/images/tonbridge-school.png",
    title: "A-Levels",
    description: (<>
        Tonbridge School 2019-2023.
        <br/>
        Grades: A<sup>*</sup> Mathematics, A<sup>*</sup> Further Mathematics, A<sup>*</sup> Physics, A<sup>*</sup> Chemistry and A<sup>*</sup> Extended Project Qualification (EPQ).
    </>),
    cardname: ""
    },
    {
    id: 1,
    image: "src/images/TUDelft-logo.jpg",
    title: "BSc Aerospace Engineering",
    description: (<>
        Delft University of Technology 2023-2026.
        <br/>
        Grade: Cum Laude.
        
    </>),
    cardname: ""
    },
    {
    id: 2,
    image: "src/images/Sapienza-logo.png",
    title: "MSc Engineering in Computer Science and Artificial Intelligence",
    description: (<>
        Sapienza Università di Roma 2025-2026.
        <br/>
        First year courses as part of an Erasmus programme in Machine Learning, Artificial Intelligence, Dependable Distributed Systems and Cybersecurity.
        
    </>),
    cardname: ""
    },

];

const furtherqualifications = [
    {
    id: 0,
    image: "src/images/airplane.svg",
    title: "CAA & EASA Private Pilot License",
    description: "",
    cardname: "PPL-card"
    },
    {
    id: 1,
    image: "src/images/python.svg",
    title: "Python",
    description: "",
    cardname: ""
    },
    {
    id: 2,
    image: "src/images/javascript.svg",
    title: "JavaScript",
    description: "",
    cardname: ""
    },
    {
    id: 3,
    image: "src/images/HTML5_logo_and_wordmark.svg.webp",
    title: "HTML5",
    description: "",
    cardname: "HTML5-card"
    },
    {
    id: 4,
    image: "src/images/CSS3_logo_and_wordmark.svg.webp",
    title: "CSS",
    description: "",
    cardname: "CSS-card"
    },
    
];

function About() {
    return (
    <div>
        <h1>ABOUT</h1>
        <p>My name is Matteo Bradshaw and I intend to help save humanity.</p>
        <p>Life is an extraordinary thing that some of us (myself included) often take for granted and recent advances in Artificial Intelligence threaten to take this simultaneously weird and wonderful experience away from us. This imminent and increasingly shared understanding of what is at stake is what drives me to work with others to save humanity. There may be those more equipped and qualified than I to help but I believe the rejection of the mentality that 'somebody else will do it' is fundamental. It is for this very reason that I will not stop until we succeed or we fail.</p>
    
        <h2>
            Background and Qualifications {' '}
            <a className="linkedin-link" href="https://www.linkedin.com/in/matteo-bradshaw" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="linkedin-icon"/> </a>
        </h2>
        <p>I was born and raised in London to an Italian mother and British father and lived there until I moved to the Delft in the Netherlands (2023) for my three year Bachelor's in Aerospace Engineering. As of 2026 I am based in Rome, Italy.</p>
       
       <h3 className="qualification-intro">Education</h3>

       <div className="qualifications-grid">
        {education.map((qualification) => (
          <QualificationCard
            key={qualification.id}
            image={qualification.image}
            title={qualification.title}
            description={qualification.description}
            cardname={qualification.cardname}
          />
        ))}
      </div>       

      <h3 className="qualification-intro">Additional Competencies</h3>

       <div className="competencies-grid">
        {furtherqualifications.map((qualification) => (
          <QualificationCard
            key={qualification.id}
            image={qualification.image}
            title={qualification.title}
            description={qualification.description}
            cardname={qualification.cardname}
          />
        ))}
      </div>    

    </div>
    );
}

export default About