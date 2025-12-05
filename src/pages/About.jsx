import { Code, Database, Smartphone, Server, Globe, Award, Coffee, Heart } from 'lucide-react';
import './About.css';

function About({ isLanding = false }) {
    const skills = [
        {
            category: "Frontend",
            icon: <Globe className="w-6 h-6" />,
            color: "blue",
            items: [
                { name: "React", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "HTML/CSS", level: 90 },
                { name: "Tailwind CSS", level: 75 },
            ]
        },
        {
            category: "Backend",
            icon: <Server className="w-6 h-6" />,
            color: "green",
            items: [
                { name: "Java", level: 90 },
                { name: "Spring Boot", level: 85 },
                { name: "REST APIs", level: 85 },
                { name: "Node.js", level: 55 },
            ]
        },
        {
            category: "Database",
            icon: <Database className="w-6 h-6" />,
            color: "purple",
            items: [
                { name: "Oracle (PL/SQL)", level: 55 },
                { name: "PostgreSQL", level: 85 },
                { name: "SQL", level: 90 },
                { name: "Database Design", level: 70 },
            ]
        },
        {
            category: "Mobile",
            icon: <Smartphone className="w-6 h-6" />,
            color: "pink",
            items: [
                { name: "Flutter", level: 75 },
                { name: "Dart", level: 90 },
                { name: "Mobile UI/UX", level: 70 },
            ]
        },
        {
            category: "Other",
            icon: <Code className="w-6 h-6" />,
            color: "orange",
            items: [
                { name: "Git/GitHub", level: 85 },
                { name: "Docker", level: 65 },
            ]
        }
    ];

    const timeline = [
        {
            year: "2025",
            title: "Full-Stack Developer Journey",
            description: "Moved to Kraków, Poland. Mastered Spring Boot, React, and PostgreSQL. Built multiple full-stack projects including e-commerce platforms and this portfolio.",
            icon: "🚀"
        },
        {
            year: "2023-2024",
            title: "Expanding Tech Stack",
            description: "Learned Flutter for mobile development, explored what is React. Built various projects combining frontend and backend technologies.",
            icon: "📱"
        },
        {
            year: "2022-2023",
            title: "Database & Backend Focus",
            description: "Deep dive into Oracle Database and PL/SQL. Developed strong understanding of database design, optimization, and backend development with Java.",
            icon: "🗄️"
        },
        {
            year: "2022",
            title: "Beginning in Tech",
            description: "Started with C/Java programming and fell in love with building things. Discovered passion for creating elegant solutions to real-world problems.",
            icon: "💡"
        }
    ];

    const interests = [
        { icon: <Code className="w-5 h-5" />, text: "Clean Code" },
        { icon: <Coffee className="w-5 h-5" />, text: "Problem Solving" },
        { icon: <Heart className="w-5 h-5" />, text: "UI/UX Design" },
        { icon: <Award className="w-5 h-5" />, text: "Continuous Learning" },
    ];

    return (
        <div className={`about-container ${!isLanding ? 'standalone' : ''}`}>
            <div className="container mx-auto max-w-6xl px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 fade-in">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                        About Me
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        السلام عليكم! I'm Mous Mohammed, a passionate full-stack developer based in Kraków, Poland.
                        I love building elegant solutions that solve real-world problems.
                    </p>
                </div>

                {/* Story Section */}
                <div className="glass-card rounded-2xl p-8 mb-16 slide-in-left">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        My Story
                    </h2>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            My journey into technology started with a simple curiosity: <em>"How do things work?"</em>
                            That curiosity led me to Java, which opened the door to a whole new world of possibilities.
                        </p>
                        <p>
                            Over the years, I've evolved from writing simple programs to building full-stack applications
                            that combine beautiful frontends with powerful backends. I'm particularly passionate about
                            creating intuitive user experiences while ensuring solid, scalable architecture behind the scenes.
                        </p>
                        <p>
                            Recently, I moved to Kraków to pursue new opportunities in the vibrant Polish tech scene.
                            When I'm not coding, you'll find me exploring new technologies, working on side projects,
                            or contributing to the developer community.
                        </p>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            I believe in writing clean code, continuous learning, and building products that make a difference.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                        Skills & Technologies
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skillGroup, index) => (
                            <div
                                key={index}
                                className="glass-card rounded-2xl p-6 skill-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`flex items-center gap-3 mb-4 text-${skillGroup.color}-600 dark:text-${skillGroup.color}-400`}>
                                    {skillGroup.icon}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {skillGroup.category}
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    {skillGroup.items.map((skill, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                <div
                                                    className={`bg-${skillGroup.color}-600 dark:bg-${skillGroup.color}-400 h-2 rounded-full skill-bar`}
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                        My Journey
                    </h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800 hidden md:block" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-center ${
                                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } timeline-item`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    {/* Content */}
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                                        <div className="glass-card rounded-xl p-6">
                                            <div className="text-3xl mb-2">{item.icon}</div>
                                            <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900 dark:text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Interests */}
                <div className="glass-card rounded-2xl p-8 mb-16 fade-in">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                        What Drives Me
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {interests.map((interest, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors"
                            >
                                <div className="text-blue-600 dark:text-blue-400 mb-3">
                                    {interest.icon}
                                </div>
                                <span className="text-gray-700 dark:text-gray-300 font-medium">
                                    {interest.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center fade-in pb-16">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                        Let's Work Together!
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        I'm currently open to full-time opportunities and freelance projects in Kraków.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="/projects"
                           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105">
                            View My Projects
                        </a>

                        <a href="/contact"
                           className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition">
                            Get In Touch
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;