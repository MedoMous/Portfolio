import { useState, useEffect } from 'react';
import './TypewriterText.css';

function TypewriterText({ text, delay = 100 }) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return (
        <div className="text-2xl font-mono text-blue-600 dark:text-blue-400">
            {displayText}
            <span className="cursor-blink">|</span>
        </div>
    );
}

export default TypewriterText;