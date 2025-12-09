import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './styles/Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        MM
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            About
                        </Link>
                        <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            Projects
                        </Link>
                        <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            Contact
                        </Link>
                        <Link to="/reviews" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            Reviews
                        </Link>
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - HORIZONTAL */}
                {isOpen && (
                    <div className="md:hidden py-4 flex flex-wrap justify-center items-center gap-4">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            About
                        </Link>
                        <Link
                            to="/projects"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/reviews"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            Reviews
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;