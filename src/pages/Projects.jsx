import { useState } from 'react';
import { Github, ExternalLink, Rocket, Zap, Smartphone, Lightbulb } from 'lucide-react';
import './styles/Projects.css';

function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All Projects', Icon: Rocket },
        { id: 'fullstack', label: 'Full-Stack', Icon: Zap },
        { id: 'responsive', label: 'Responsive', Icon: Smartphone },
        { id: 'realworld', label: 'Real-World', Icon: Lightbulb },
    ];

    const projects = [
        {
            id: 1,
            title: "Interactive Portfolio",
            description: "A modern, animated portfolio with light/dark mode, contact forms, exit-intent rating system, and FAQ section. Built with React and Spring Boot.",
            image: "/api/placeholder/600/400",
            tags: ["React", "Spring Boot", "PostgreSQL", "Tailwind"],
            category: ['fullstack', 'responsive'],
            github: "https://github.com/yourusername/portfolio",
            demo: "https://your-portfolio.com",
            featured: true
        },
        {
            id: 2,
            title: "E-Commerce Platform",
            description: "Full-featured e-commerce website with shopping cart, product management, user authentication, and order tracking.",
            image: "/api/placeholder/600/400",
            tags: ["React", "Spring Boot", "PostgreSQL", "Stripe"],
            category: ['fullstack', 'responsive', 'realworld'],
            github: "https://github.com/yourusername/ecommerce",
            demo: "https://your-ecommerce.com",
            featured: true
        },
        {
            id: 3,
            title: "Task Management System",
            description: "Project management tool with kanban boards, team collaboration features, and real-time updates.",
            image: "/api/placeholder/600/400",
            tags: ["React", "Spring Boot", "WebSocket"],
            category: ['fullstack', 'realworld'],
            github: "https://github.com/yourusername/task-manager",
            demo: null,
            featured: false
        },
        {
            id: 4,
            title: "Mobile Banking UI",
            description: "Responsive banking interface with transaction history, budget tracking, and financial analytics.",
            image: "/api/placeholder/600/400",
            tags: ["Flutter", "Dart", "Firebase"],
            category: ['responsive', 'realworld'],
            github: "https://github.com/yourusername/banking-app",
            demo: null,
            featured: false
        },
        {
            id: 5,
            title: "Automation Workflow",
            description: "Built with n8n to automate repetitive tasks and workflow management.",
            image: "/api/placeholder/600/400",
            tags: ["n8n", "Automation", "APIs"],
            category: ['realworld'],
            github: null,
            demo: null,
            featured: false
        },
        {
            id: 6,
            title: "Restaurant Booking",
            description: "Online reservation platform with real-time availability and table management.",
            image: "/api/placeholder/600/400",
            tags: ["React", "Spring Boot", "PostgreSQL"],
            category: ['fullstack', 'responsive', 'realworld'],
            github: "https://github.com/yourusername/restaurant",
            demo: null,
            featured: false
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category.includes(activeFilter));

    return (
        <div className="projects-container">

            {/* Compact Filter Bar */}
            <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-40 mt-4">
                <div className="filter-container">
                    {filters.map((filter) => {
                        const Icon = filter.Icon;
                        const isActive = activeFilter === filter.id;

                        return (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`filter-button ${isActive ? 'active' : ''}`}
                                title={filter.label}
                            >
                                <Icon className="filter-icon" />
                                <span className="filter-label">{filter.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Projects Content */}
            <div className="container mx-auto px-4 pt-24 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 fade-in">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                        My Projects
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Showcasing my skills in full-stack development, responsive design, and solving real-world problems.
                    </p>
                    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Transparent Card with Border */}
                            <div className="project-card-inner">

                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="featured-badge">
                                            ⭐ Featured
                                        </span>
                                    </div>
                                )}

                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="project-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                <Github className="w-5 h-5" />
                                                <span>Code</span>
                                            </a>
                                        )}

                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link ml-auto"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                                <span>Live</span>
                                            </a>
                                        )}

                                        {!project.github && !project.demo && (
                                            <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                                                Coming soon...
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-2xl text-gray-500 dark:text-gray-400 mb-4">
                            No projects in this category yet.
                        </p>
                        <button
                            onClick={() => setActiveFilter('all')}
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            View all projects
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;