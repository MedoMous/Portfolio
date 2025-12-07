import { useState } from 'react';
import { Mail, MapPin, Send, MessageCircle, ChevronDown, Star } from 'lucide-react';
import './styles/Contact.css';
import './styles/ButtonStyles.css'

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
    const [rating, setRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [ratingFeedback, setRatingFeedback] = useState('');
    const [ratingStatus, setRatingStatus] = useState('');
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
            const response = await fetch('https://portfolio-backend-production-afec.up.railway.app/api/v1/contacts', {
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
            const response = await fetch('https://portfolio-backend-production-afec.up.railway.app/api/v1/questions', {
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
    const handleRatingSubmit = async () => {
        if (rating === 0) {
            alert('Please select a rating!');
            return;
        }

        setRatingStatus('sending');

        try {
            const response = await fetch('https://portfolio-backend-production-afec.up.railway.app/api/v1/ratings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    rating: rating,
                    feedback: ratingFeedback
                })
            });

            if (response.ok) {
                setRatingStatus('success');
                // Reset form after 3 seconds
                setTimeout(() => {
                    setRating(0);
                    setRatingFeedback('');
                    setRatingStatus('');
                }, 3000);
            } else {
                setRatingStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setRatingStatus('error');
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
                                className="button"
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
                                className="button"
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
                {/* Rating Section */}
                <div className="contact-form-glass rounded-2xl shadow-xl p-8 mb-16 fade-in">
                    <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                        Rate Your Experience
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                        How was your experience exploring my portfolio?
                    </p>
                    {/* Star Rating */}
                    <div className="flex justify-center gap-3 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoveredStar(star)}
                                onMouseLeave={() => setHoveredStar(0)}
                                className="star-button transition-transform hover:scale-125"
                            >
                                <Star
                                    className={`w-12 h-12 md:w-14 md:h-14 transition-all ${
                                        star <= (hoveredStar || rating)
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-gray-300 dark:text-gray-600'
                                    }`}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Show selected rating */}
                    {rating > 0 && (
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                            You selected {rating} star{rating !== 1 ? 's' : ''}
                        </p>
                    )}

                    {/* Optional Feedback */}
                    {rating > 0 && (
                        <div className="max-w-2xl mx-auto mb-6 feedback-section">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Any feedback? (optional)
                            </label>
                            <textarea
                                value={ratingFeedback}
                                onChange={(e) => setRatingFeedback(e.target.value)}
                                placeholder="Tell me what you think..."
                                rows="4"
                                className="input"
                            />
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleRatingSubmit}
                            disabled={rating === 0 || ratingStatus === 'sending'}
                            className="button"
                        >
                            {ratingStatus === 'sending' ? 'Submitting...' : 'Submit Rating'}
                        </button>
                    </div>

                    {/* Status Messages */}
                    {ratingStatus === 'success' && (
                        <p className="text-green-600 dark:text-green-400 text-center mt-4 success-message">
                            ✓ Thank you for your feedback!
                        </p>
                    )}
                    {ratingStatus === 'error' && (
                        <p className="text-red-600 dark:text-red-400 text-center mt-4">
                            ✗ Failed to submit. Please try again.
                        </p>
                    )}
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