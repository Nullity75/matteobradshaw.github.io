import './Contact.css'
import { SiGmail } from 'react-icons/si';

function Contact() {
    return (
    <div className="page">
        <h1>CONTACT</h1>
        <p> <SiGmail className="gmail-icon" /> You can contact me at <a className="email-link" href="mailto:matteowbradshaw@gmail.com"> matteowbradshaw@gmail.com</a>
        </p>
    </div>
    );
}

export default Contact