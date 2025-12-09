import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Reviews from "./pages/Reviews.jsx";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/reviews" element={<Reviews/>}/>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;