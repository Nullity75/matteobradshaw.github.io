import { BrowserRouter, Routes, Route } from 'react-router';

import NavigationBar from './components/NavigationBar/NavigationBar.jsx'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects.jsx';
import About from './pages/About';
import './App.css';

function App() {
  return (<>
     <BrowserRouter>

      <NavigationBar />

      <main>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

      </main>

    </BrowserRouter>
  </>)
}

export default App
