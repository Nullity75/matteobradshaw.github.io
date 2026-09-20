import { Link, Routes, Route, useNavigate } from 'react-router';
import { useState } from 'react';

import NavigationBar from './components/NavigationBar/NavigationBar.jsx'
import Contact from './pages/Contact.jsx';
import About from './pages/About';
import Credits from './pages/Credits.jsx'
import './App.css';

function App() {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  function goTo(path) {
    setLeaving(true);

    setTimeout(() => {
      navigate(path);
      setLeaving(false);
    }, 350);
  }

  return (<>
     
      <div className="wrapper">

        <header>
          <NavigationBar goTo={goTo}/>
        </header>

        <main className={leaving ? "fade-out" : "fade-in"}>

          <Routes>

            <Route path="/" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/credits" element={<Credits />} />

          </Routes>

        </main>

        <footer className={"no-ai-footnote"}>
        All text on this website is not AI-generated. <button className="credits-link" onClick={() => goTo("/credits")}>Credits.</button>
        </footer>

      </div>    
      
  </>)
}

export default App
