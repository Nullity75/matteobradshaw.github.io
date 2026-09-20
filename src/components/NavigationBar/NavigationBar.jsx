import './NavigationBar.css';

function NavigationBar({ goTo }) {
  return (
    <nav className="navigation-bar">
      <button
        className="navigation-link"
        onClick={() => goTo("/")}
      >
        <span className="navigation-text">ABOUT</span>
      </button>

      <button
        className="navigation-link"
        onClick={() => goTo("/contact")}
      >
        <span className="navigation-text">CONTACT</span>
      </button>
    </nav>
  );
}

export default NavigationBar;