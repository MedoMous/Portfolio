import { useState } from 'react';
import { Mail, MapPin, Send, MessageCircle, ChevronDown } from 'lucide-react';
import './Contact.css';
import './ButtonStyles.css'
function Contact() {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [questionForm, setQuestionForm] = useState({
        name: '',
        email: '',
        question: ''
    });
    const [contactStatus, setContactStatus] = useState('');
    const [questionStatus, setQuestionStatus] = useState('');
    const [openFaq, setOpenFaq] = useState(null);
    const faqs = [
        {
            question: "What technologies do you use?",
            answer: "I specialize in React, Spring Boot, and PostgreSQL for full-stack development. I also work with Tailwind CSS, Git, and have experience with Docker and REST APIs."
        },
        {
            question: "Are you available for work?",
            answer: "Yes! I'm currently looking for full-time opportunities or freelance projects in Kraków or remote positions. Feel free to reach out!"
        },
        {
            question: "Where are you located?",
            answer: "I'm based in Kraków, Poland. I'm open to hybrid, remote, or on-site positions in the Kraków area."
        },
        {
            question: "How can I contact you?",
            answer: "You can use the contact form above, email me directly, or connect with me on LinkedIn or GitHub. I usually respond within 24 hours!"
        },
        {
            question: "What's your favorite project?",
            answer: "This portfolio! Building it taught me so much about animations, user experience, and full-stack integration. Check out my Projects page for more!"
        },
        {
            question: "Do you have other skills rather than Spring, React & PostgreSQL?",
            answer: "Yes! I am good at code optimization and also proficient in C/C++."
        }
    ];
    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setContactStatus('sending');

        try {
            const response = await fetch('http://localhost:8080/api/v1/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactForm)
            });

            if (response.ok) {
                setContactStatus('success');
                setContactForm({ name: '', email: '', message: '' });
                setTimeout(() => setContactStatus(''), 3000);
            } else {
                setContactStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setContactStatus('error');
        }
    };

    const handleQuestionSubmit = async (e) => {
        e.preventDefault();
        setQuestionStatus('sending');

        try {
            const response = await fetch('http://localhost:8080/api/v1/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(questionForm)
            });

            if (response.ok) {
                setQuestionStatus('success');
                setQuestionForm({ name: '', email: '', question: '' });
                setTimeout(() => setQuestionStatus(''), 3000);
            } else {
                setQuestionStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setQuestionStatus('error');
        }
    };

    // Detect theme from body class
    const isDark = document.body.classList.contains('dark');

    return (
        <div className="contact-container">
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className={`particle ${isDark ? 'particle-dark' : 'particle-light'}`}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${4 + Math.random() * 3}s`,
                    }}
                />
            ))}
            <div className="container mx-auto max-w-6xl px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 fade-in">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Let's build something amazing together!
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Contact Form */}
                    <div className="contact-form-glass rounded-2xl shadow-xl p-8 slide-in-left">
                        <div className="flex items-center gap-3 mb-6">
                            <Mail className="w-6 h-6 text-blue-125 dark:text-blue-400" />
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Send Me a Message
                            </h2>
                        </div>

                        <form onSubmit={handleContactSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={contactForm.name}
                                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                                    className="input"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={contactForm.email}
                                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                                    className="input"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows="5"
                                    value={contactForm.message}
                                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                                    className="input"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={contactStatus === 'sending'}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-5 h-5" />
                                {contactStatus === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {contactStatus === 'success' && (
                                <p className="text-green-600 dark:text-green-400 text-center success-message">
                                    ✓ Message sent successfully!
                                </p>
                            )}
                            {contactStatus === 'error' && (
                                <p className="text-red-600 dark:text-red-400 text-center">
                                    ✗ Failed to send. Please try again.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Ask Me Something Form */}
                    <div className="contact-form-glass rounded-2xl shadow-xl p-8 slide-in-right">
                        <div className="flex items-center gap-3 mb-6">
                            <MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Ask Me Something
                            </h2>
                        </div>
                        <form onSubmit={handleQuestionSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={questionForm.name}
                                    onChange={(e) => setQuestionForm({...questionForm, name: e.target.value})}
                                    className="input"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={questionForm.email}
                                    onChange={(e) => setQuestionForm({...questionForm, email: e.target.value})}
                                    className="input"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Your Question
                                </label>
                                <textarea
                                    required
                                    rows="5"
                                    value={questionForm.question}
                                    onChange={(e) => setQuestionForm({...questionForm, question: e.target.value})}
                                    className="input"
                                    placeholder="Have a question? Ask away! I'll get back to you soon."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={questionStatus === 'sending'}
                                className="w-full font-semibold py-3 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <MessageCircle className="w-5 h-5" />
                                {questionStatus === 'sending' ? 'Sending...' : 'Ask Question'}
                            </button>

                            {questionStatus === 'success' && (
                                <p className="text-green-600 dark:text-green-400 text-center success-message">
                                    ✓ Question received! I'll respond soon.
                                </p>
                            )}
                            {questionStatus === 'error' && (
                                <p className="text-red-600 dark:text-red-400 text-center">
                                    ✗ Failed to send. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-glass rounded-2xl shadow-xl p-8 mb-16 fade-in">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4 max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                                >
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transition-transform ${
                                            openFaq === index ? 'transform rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                {openFaq === index && (
                                    <div className="px-5 pb-5 text-gray-600 dark:text-gray-300 faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Info */}
                <div className="text-center fade-in pb-16">
                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                        <MapPin className="w-5 h-5" />
                        <span>Kraków, Poland</span>
                    </div>

                    <div className="flex gap-6 justify-center">
                        <a href="https://github.com/MedoMous"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            GitHub
                        </a>

                        <a href="https://www.linkedin.com/in/mohamed-mous-046599333/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            LinkedIn
                        </a>

                        <a href="mailto:mousmohamed719@gmail.com"
                           className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;