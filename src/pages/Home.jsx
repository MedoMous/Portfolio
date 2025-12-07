import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code, Database, Smartphone, Server, Globe } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground.jsx';
import TypewriterText from '../components/TypewriterText.jsx';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import './styles/Home.css';

function LandingPage() {
    const [showProgrammer, setShowProgrammer] = useState(true);

    // Hide programmer scene when scrolling past hero section with debounce
    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            // Clear the previous timeout
            clearTimeout(timeoutId);

            // Set a new timeout to update the state
            timeoutId = setTimeout(() => {
                const heroHeight = window.innerHeight;
                const scrollPosition = window.scrollY;
                setShowProgrammer(scrollPosition < heroHeight * 0.5);
            }, 50); // 50ms debounce
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="landing-page">
            {/* Shared gradient background for all sections */}
            <div className="landing-background"></div>

            {/* Hero Section with Sticky Programmer Scene */}
            <div className="relative min-h-screen hero-section" style={{ zIndex: showProgrammer ? 1 : 'auto' }}>
                {/* Sticky Animated Background - only shows on hero */}
                <div
                    className="fixed top-0 left-0 w-full h-screen transition-opacity duration-500"
                    style={{
                        zIndex: 0,
                        opacity: showProgrammer ? 1 : 0,
                        pointerEvents: showProgrammer ? 'auto' : 'none'
                    }}
                >
                    <AnimatedBackground />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto text-center fade-in">

                            {/* Greeting */}
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-light slide-in-1">
                                السلام عليكم, I'm
                            </p>

                            {/* Name */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 slide-in-2">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                    Mous Mohammed
                                </span>
                            </h1>

                            {/* Typewriter Title */}
                            <div className="mb-8 slide-in-3">
                                <TypewriterText text="Full-Stack Developer" delay={80} />
                            </div>

                            {/* Description */}
                            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed slide-in-4">
                                Crafting elegant solutions with{' '}
                                <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>,{' '}
                                <span className="font-semibold text-green-600 dark:text-green-400">Spring Boot</span>, and{' '}
                                <span className="font-semibold text-purple-600 dark:text-purple-400">PostgreSQL</span>
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center mb-12 slide-in-5">
                                <button
                                    onClick={scrollToProjects}
                                    className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    View My Work
                                    <span className="inline-block ml-2 arrow-bounce">→</span>
                                </button>

                                <button
                                    onClick={() => {
                                        const contactSection = document.getElementById('contact-section');
                                        contactSection?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                                    Get In Touch
                                </button>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-6 justify-center slide-in-6">
                                <a href="https://github.com/MedMous"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all transform hover:scale-110 social-icon"
                                   aria-label="GitHub">
                                    <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                </a>
                                <a href="https://www.linkedin.com/in/mohamed-mous-046599333/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all transform hover:scale-110 social-icon"
                                   aria-label="LinkedIn">
                                    <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                </a>
                                <a href="mailto:mousmohamed719@gmail.com"
                                   className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all transform hover:scale-110 social-icon"
                                   aria-label="Email">
                                    <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <button
                    onClick={scrollToProjects}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 scroll-indicator cursor-pointer hover:scale-110 transition-transform"
                    aria-label="Scroll down">
                    <ArrowDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                </button>
            </div>

            {/* Projects Section */}
            <div id="projects-section" className="relative" style={{ zIndex: 2 }}>
                <Projects />
            </div>

            {/* About Section */}
            <div id="about-section" className="relative" style={{ zIndex: 2 }}>
                <About />
            </div>

            {/* Contact Section */}
            <div id="contact-section" className="relative" style={{ zIndex: 2 }}>
                <Contact />
            </div>
        </div>
    );
}

export default LandingPage;