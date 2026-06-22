import { Link } from 'react-router';
import { FaBars } from 'react-icons/fa'
import './NavigationBar.css';

function NavigationBar(){

    return(
        <div className='navigation-container'>
            <button className='navigation-button'><FaBars /></button>
            <nav className='navigation-bar'>
                <Link className="navigation-link" to="/">Home</Link>
                <Link className="navigation-link" to="/about">About</Link>
                <Link className="navigation-link" to="/projects">Projects</Link>
                <Link className="navigation-link" to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default NavigationBar