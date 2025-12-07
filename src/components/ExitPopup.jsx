import { useState, useEffect } from 'react';
import { X, Star } from 'lucide-react';
import './styles/ExitPopup.css';

function ExitPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if popup was already shown
        const popupShown = localStorage.getItem('exitPopupShown');
        if (popupShown) {
            setHasShown(true);
            return;
        }

        // Detect mouse leaving viewport
        const handleMouseLeave = (e) => {
            if (e.clientY <= 100 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                localStorage.setItem('exitPopupShown', 'true');
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasShown]);

    const handleSubmit = async () => {
        if (rating === 0) {
            alert('Please select a rating!');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:8080/api/v1/ratings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rating, feedback })
            });

            if (response.ok) {
                setTimeout(() => {
                    setIsVisible(false);
                }, 1000);
            }
        } catch (error) {
            console.error('Error submitting rating:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="exit-popup-overlay">
            <div className="exit-popup">
                <button
                    onClick={handleClose}
                    className="exit-popup-close"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="exit-popup-content">
                    <h2 className="exit-popup-title">Before You Go! 👋</h2>
                    <p className="exit-popup-subtitle">How was your experience?</p>

                    {/* Star Rating */}
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoveredStar(star)}
                                onMouseLeave={() => setHoveredStar(0)}
                                className="star-button"
                            >
                                <Star
                                    className={`w-10 h-10 transition-all ${
                                        star <= (hoveredStar || rating)
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-gray-300 dark:text-gray-600'
                                    }`}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Optional Feedback */}
                    {rating > 0 && (
                        <div className="feedback-section">
              <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Any feedback? (optional)"
                  className="feedback-textarea"
                  rows="3"
              />
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="exit-popup-buttons">
                        <button
                            onClick={handleSubmit}
                            disabled={rating === 0 || isSubmitting}
                            className="submit-button"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Rating'}
                        </button>
                        <button onClick={handleClose} className="skip-button">
                            Skip
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExitPopup;