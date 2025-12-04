import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './AnimatedBackground.css';

function AnimatedBackground() {
    const { theme } = useTheme();
    const location = useLocation();
    const isLight = theme === 'light';

    // Only show programmer on homepage
    const isHomePage = location.pathname === '/';

    return (
        <div className="fixed inset-0 z-0 overflow-hidden">
            {/* Beautiful gradient - like the image! */}
            <div
                className={`absolute inset-0 transition-all duration-1000 ${
                    isLight
                        ? 'bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100'  // Soft pastel gradient!
                        : 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'  // Keep dark mode as is
                }`}
            />

            {/* Animated gradient overlay for extra depth */}
            <div className={`absolute inset-0 opacity-30 ${isLight ? 'light-overlay' : 'dark-overlay'}`} />

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={`particle ${isLight ? 'particle-light' : 'particle-dark'}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${4 + Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            {/* Programmer scene - ONLY on homepage */}
            {isHomePage && (
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center opacity-40 dark:opacity-50">
                    <ProgrammerScene theme={theme} />
                </div>
            )}
        </div>
    );
}

function ProgrammerScene({ theme }) {
    const isLight = theme === 'light';

    return (
        <svg
            viewBox="0 0 800 600"
            className="w-full max-w-6xl programmer-scene"
        >
            {/* Desk */}
            <rect
                x="150"
                y="450"
                width="500"
                height="20"
                fill={isLight ? '#92400E' : '#78350F'}
                rx="5"
            />
            <rect x="170" y="470" width="20" height="130" fill={isLight ? '#92400E' : '#78350F'} />
            <rect x="610" y="470" width="20" height="130" fill={isLight ? '#92400E' : '#78350F'} />

            {/* Monitor */}
            <rect
                x="300"
                y="320"
                width="200"
                height="130"
                fill={isLight ? '#1F2937' : '#0F172A'}
                rx="8"
            />
            <rect
                x="310"
                y="330"
                width="180"
                height="110"
                fill="#3B82F6"
                className="screen-glow"
            />

            {/* Code lines */}
            <g className="code-lines">
                <rect x="320" y="345" width="80" height="4" fill="#10B981" rx="2" />
                <rect x="320" y="360" width="120" height="4" fill="#60A5FA" rx="2" />
                <rect x="320" y="375" width="90" height="4" fill="#F59E0B" rx="2" />
                <rect x="320" y="390" width="140" height="4" fill="#8B5CF6" rx="2" />
                <rect x="320" y="405" width="70" height="4" fill="#10B981" rx="2" />
                <rect x="320" y="420" width="100" height="4" fill="#EC4899" rx="2" />
            </g>

            {/* Monitor stand */}
            <rect x="380" y="450" width="40" height="15" fill={isLight ? '#374151' : '#1F2937'} rx="3" />

            {/* Keyboard */}
            <rect
                x="280"
                y="460"
                width="240"
                height="15"
                fill={isLight ? '#6B7280' : '#374151'}
                rx="3"
            />

            {/* Mouse */}
            <ellipse cx="540" cy="468" rx="12" ry="18" fill={isLight ? '#6B7280' : '#374151'} />

            {/* Coffee cup */}
            <g className="coffee-cup">
                <rect x="580" y="440" width="40" height="30" fill={isLight ? '#DC2626' : '#991B1B'} rx="5" />
                <ellipse cx="600" cy="440" rx="20" ry="8" fill={isLight ? '#EF4444' : '#DC2626'} />
                <path d="M 620 450 Q 635 450 635 465" stroke={isLight ? '#DC2626' : '#991B1B'} strokeWidth="3" fill="none" />
            </g>

            {/* Steam */}
            {[0, 1, 2].map((i) => (
                <path
                    key={i}
                    d={`M ${590 + i * 10} 435 Q ${592 + i * 10} 420 ${590 + i * 10} 410`}
                    stroke={isLight ? '#9CA3AF' : '#6B7280'}
                    strokeWidth="2"
                    fill="none"
                    className="steam"
                    style={{ animationDelay: `${i * 0.3}s` }}
                />
            ))}

            {/* Programmer */}
            <circle cx="400" cy="380" r="30" fill={isLight ? '#FCA5A5' : '#DC2626'} />
            <path d="M 380 365 Q 400 350 420 365" fill={isLight ? '#1F2937' : '#0F172A'} />
            <rect x="375" y="410" width="50" height="50" fill={isLight ? '#3B82F6' : '#1E40AF'} rx="8" />

            {/* Arms */}
            <line
                x1="375"
                y1="425"
                x2="320"
                y2="460"
                stroke={isLight ? '#3B82F6' : '#1E40AF'}
                strokeWidth="12"
                strokeLinecap="round"
                className="arm-left"
            />
            <line
                x1="425"
                y1="425"
                x2="480"
                y2="460"
                stroke={isLight ? '#3B82F6' : '#1E40AF'}
                strokeWidth="12"
                strokeLinecap="round"
                className="arm-right"
            />

            {/* Window */}
            <rect
                x="50"
                y="100"
                width="180"
                height="220"
                fill={isLight ? '#DBEAFE' : '#1E3A8A'}
                stroke={isLight ? '#93C5FD' : '#3B82F6'}
                strokeWidth="6"
                rx="10"
            />
            <line x1="140" y1="100" x2="140" y2="320" stroke={isLight ? '#93C5FD' : '#3B82F6'} strokeWidth="4" />
            <line x1="50" y1="210" x2="230" y2="210" stroke={isLight ? '#93C5FD' : '#3B82F6'} strokeWidth="4" />

            {/* Sun/Moon */}
            {isLight ? (
                <circle cx="120" cy="160" r="35" fill="#FCD34D" className="sun" />
            ) : (
                <>
                    <circle cx="120" cy="160" r="30" fill="#FDE047" className="moon" />
                    <circle cx="80" cy="130" r="3" fill="#FFF" className="star" />
                    <circle cx="170" cy="150" r="3" fill="#FFF" className="star" style={{ animationDelay: '0.5s' }} />
                    <circle cx="100" cy="250" r="3" fill="#FFF" className="star" style={{ animationDelay: '1s' }} />
                    <circle cx="190" cy="280" r="3" fill="#FFF" className="star" style={{ animationDelay: '1.5s' }} />
                </>
            )}

            {/* Lamp (dark mode) */}
            {!isLight && (
                <g className="lamp">
                    <circle cx="220" cy="450" r="12" fill="#374151" />
                    <line x1="220" y1="450" x2="220" y2="390" stroke="#374151" strokeWidth="6" />
                    <ellipse cx="220" cy="375" rx="30" ry="15" fill="#FCD34D" opacity="0.9" />
                    <circle cx="220" cy="410" r="60" fill="#FCD34D" opacity="0.15" className="lamp-glow" />
                </g>
            )}

            {/* Plant */}
            <g className="plant">
                <ellipse cx="620" cy="450" rx="25" ry="10" fill={isLight ? '#92400E' : '#78350F'} />
                <path d="M 620 450 Q 610 420 620 390" stroke="#10B981" strokeWidth="3" fill="none" />
                <ellipse cx="620" cy="390" rx="15" ry="25" fill="#10B981" />
                <path d="M 620 450 Q 630 430 625 405" stroke="#10B981" strokeWidth="3" fill="none" />
                <ellipse cx="625" cy="405" rx="12" ry="20" fill="#059669" />
            </g>
        </svg>
    );
}

export default AnimatedBackground;