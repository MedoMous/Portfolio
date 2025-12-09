import { useState, useEffect } from 'react';
import { Mail, MessageCircle, Star, Loader } from 'lucide-react';
import './styles/Contact.css'; // Using your existing CSS

// Custom reusable hook for fetching data
function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await response.json();
                setData(result);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

function Reviews() {
    const baseUrl = 'https://portfolio-backend-production-afec.up.railway.app/api/v1';

    // Fetch all three types of data using the custom hook
    const { data: contacts, loading: loadingContacts, error: errorContacts } =
        useFetch(`${baseUrl}/contacts`);

    const { data: questions, loading: loadingQuestions, error: errorQuestions } =
        useFetch(`${baseUrl}/questions`);

    const { data: ratings, loading: loadingRatings, error: errorRatings } =
        useFetch(`${baseUrl}/ratings`);

    const isLoading = loadingContacts || loadingQuestions || loadingRatings;

    // Detect theme from body class
    const isDark = document.body.classList.contains('dark');

    // Calculate average rating
    const averageRating = ratings.length > 0
        ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
        : 0;

    return (
        <div className="contact-container">
            {/* Floating particles - same as Contact page */}
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
                        Reviews & Feedback
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        See what people are saying about my portfolio!
                    </p>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex items-center justify-center py-20">
                        <Loader className="w-12 h-12 animate-spin text-blue-600 dark:text-blue-400" />
                        <span className="ml-4 text-xl text-gray-600 dark:text-gray-300">
              Loading reviews...
            </span>
                    </div>
                )}

                {/* Main Content */}
                {!isLoading && (
                    <>
                        {/* Ratings Section - Featured at top */}
                        <div className="contact-form-glass rounded-2xl shadow-xl p-8 mb-8 fade-in">
                            <div className="flex items-center gap-3 mb-6">
                                <Star className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    User Ratings
                                </h2>
                            </div>

                            {errorRatings && (
                                <p className="text-red-600 dark:text-red-400 mb-4">
                                    Error loading ratings: {errorRatings}
                                </p>
                            )}

                            {/* Average Rating Display */}
                            {ratings.length > 0 && (
                                <div className="rounded-xl p-6 mb-6 text-center">
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                        Average Rating
                                    </p>
                                    <div className="flex items-center justify-center gap-3">
                    <span className="text-5xl font-bold text-yellow-600 dark:text-yellow-400">
                      {averageRating}
                    </span>
                                        <Star className="w-10 h-10 fill-yellow-400 text-yellow-400" />
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                        Based on {ratings.length} review{ratings.length !== 1 ? 's' : ''}
                                    </p>
                                </div>
                            )}

                            {/* Individual Ratings */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {ratings.length === 0 ? (
                                    <div className="col-span-full text-center py-12">
                                        <Star className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                                        <p className="text-gray-500 dark:text-gray-400">
                                            No ratings yet. Be the first to rate!
                                        </p>
                                    </div>
                                ) : (
                                    ratings.map((rating) => (
                                        <div
                                            key={rating.id}
                                            className="bg-white/40 dark:bg-gray-800/40 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition slide-in-left"
                                        >
                                            <div className="flex items-center gap-2 mb-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-5 h-5 ${
                                                            i < rating.rating
                                                                ? 'fill-yellow-400 text-yellow-400'
                                                                : 'text-gray-300 dark:text-gray-600'
                                                        }`}
                                                    />
                                                ))}
                                                <span className="text-lg font-bold text-gray-900 dark:text-white ml-2">
                          {rating.rating}/5
                        </span>
                                            </div>
                                            {rating.feedback && (
                                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                                    "{rating.feedback}"
                                                </p>
                                            )}
                                            {rating.createdAt && (
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    {new Date(rating.createdAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Contacts and Questions Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {/* Messages Section */}
                            <div className="contact-form-glass rounded-2xl shadow-xl p-8 slide-in-left">
                                <div className="flex items-center gap-3 mb-6">
                                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        Messages ({contacts.length})
                                    </h2>
                                </div>

                                {errorContacts && (
                                    <p className="text-red-600 dark:text-red-400 mb-4">
                                        Error loading contacts: {errorContacts}
                                    </p>
                                )}

                                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                                    {contacts.length === 0 ? (
                                        <div className="text-center py-12">
                                            <Mail className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                                            <p className="text-gray-500 dark:text-gray-400">
                                                No messages yet
                                            </p>
                                        </div>
                                    ) : (
                                        contacts.map((contact) => (
                                            <div
                                                key={contact.id}
                                                className="bg-white/40 dark:bg-gray-800/40 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition"
                                            >
                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                    {contact.name}
                                                </h3>
                                                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                                                    {contact.email}
                                                </p>
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    {contact.message}
                                                </p>
                                                {contact.createdAt && (
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                                        {new Date(contact.createdAt).toLocaleDateString()}
                                                    </p>
                                                )}
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* Questions Section */}
                            <div className="contact-form-glass rounded-2xl shadow-xl p-8 slide-in-right">
                                <div className="flex items-center gap-3 mb-6">
                                    <MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        Questions ({questions.length})
                                    </h2>
                                </div>

                                {errorQuestions && (
                                    <p className="text-red-600 dark:text-red-400 mb-4">
                                        Error loading questions: {errorQuestions}
                                    </p>
                                )}

                                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                                    {questions.length === 0 ? (
                                        <div className="text-center py-12">
                                            <MessageCircle className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                                            <p className="text-gray-500 dark:text-gray-400">
                                                No questions yet
                                            </p>
                                        </div>
                                    ) : (
                                        questions.map((question) => (
                                            <div
                                                key={question.id}
                                                className="bg-white/40 dark:bg-gray-800/40 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition"
                                            >
                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                    {question.name}
                                                </h3>
                                                <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                                                    {question.email}
                                                </p>
                                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                                    {question.question}
                                                </p>
                                                {question.createdAt && (
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                                        {new Date(question.createdAt).toLocaleDateString()}
                                                    </p>
                                                )}
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Reviews;