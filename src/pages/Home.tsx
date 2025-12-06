import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Users, Sparkles } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();
    const [participants] = useState([
        { id: 1, name: 'Dristi Agarwal', score: 27 },
        { id: 2, name: 'Harshit Gupta', score: 0 },
        { id: 3, name: 'Manav Garg', score: 27 },
        { id: 4, name: 'Pari Goyal', score: 66 },
        { id: 5, name: 'Sanchita Das', score: 51 },
        { id: 6, name: 'Sumit Kumar', score: 6 },
        { id: 7, name: 'Tanish Kashyap', score: 74 },
        { id: 8, name: 'Utsav Garg', score: 91 },
        { id: 9, name: 'Yashasvini Sharma', score: 4 },
        { id: 10, name: 'Khrish Chauhan', score: 19 },
        { id: 11, name: 'Himanshu', score: 55 },
        { id: 12, name: 'Akansha', score: 1 },
        { id: 13, name: 'Bhavya', score: 3 },
        { id: 14, name: 'Himani', score: 8 }
    ]);

    const sortedParticipants = [...participants].sort((a, b) => b.score - a.score);

    const getRankStyle = (index: number) => {
        if (index === 0) {
            return {
                bg: 'bg-gradient-to-br from-yellow-400/20 via-amber-500/20 to-yellow-600/20',
                border: 'border-2 border-yellow-400/60',
                glow: 'shadow-xl shadow-yellow-500/30',
                scale: 'hover:scale-[1.03]'
            };
        }
        if (index === 1) {
            return {
                bg: 'bg-gradient-to-br from-slate-300/15 via-gray-400/15 to-slate-500/15',
                border: 'border-2 border-slate-300/50',
                glow: 'shadow-lg shadow-slate-400/20',
                scale: 'hover:scale-[1.02]'
            };
        }
        if (index === 2) {
            return {
                bg: 'bg-gradient-to-br from-orange-400/15 via-amber-600/15 to-orange-700/15',
                border: 'border-2 border-orange-400/50',
                glow: 'shadow-lg shadow-orange-500/20',
                scale: 'hover:scale-[1.02]'
            };
        }
        return {
            bg: 'bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-purple-800/20',
            border: 'border border-purple-400/20',
            glow: 'shadow-md shadow-purple-500/10',
            scale: 'hover:scale-[1.01]'
        };
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#26154c] to-[#16213e] text-white relative overflow-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap');
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 1; }
                }

                .float-animation {
                    animation: float 6s ease-in-out infinite;
                }

                .twinkle {
                    animation: twinkle 3s ease-in-out infinite;
                }
            `}</style>

            {/* Enhanced Cosmic Background */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Animated gradient orbs */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Stars */}
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full twinkle"
                        style={{
                            width: Math.random() * 3 + 1 + 'px',
                            height: Math.random() * 3 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 3 + 's'
                        }}
                    ></div>
                ))}
            </div>

            {/* Top Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-purple-950/30 border-b border-purple-500/20">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Trophy className="w-6 h-6 text-amber-400" />
                        <span className="text-lg md:text-xl font-semibold tracking-wide text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Registration Leaderboard
                        </span>
                    </div>
                    <button
                        onClick={() => navigate('/campus-ambassadors')}
                        className="group relative px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold text-xs md:text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 w-auto"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <Users className="w-4 h-4" />
                            Campus Ambassadors Leaderboard
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-16 relative z-10">
                {/* Hero Header */}
                <div className="text-center mb-12 md:mb-20">
                    <div className="flex justify-center mb-8 md:mb-12 float-animation">
                        <img
                            src="/CV.png"
                            className="w-68 md:w-80 h-auto drop-shadow-2xl"
                            alt="Code Veda Logo"
                        />
                    </div>

                    <div className="relative inline-block my-8 md:my-12">
                        {/* Decorative lines */}
                        <div className="absolute -left-40 top-1/2 transform -translate-y-1/2 hidden lg:block">
                            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-amber-500"></div>
                            <Sparkles className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400 animate-pulse" />
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black tracking-wider mb-4" style={{
                            background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 30%, #FBBF24 60%, #D97706 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 0 40px rgba(251, 191, 36, 0.4))',
                            fontFamily: 'Cinzel, Georgia, serif'
                        }}>
                            CODE VEDA
                        </h1>

                        <div className="absolute -right-40 top-1/2 transform -translate-y-1/2 hidden lg:block">
                            <div className="w-32 h-px bg-gradient-to-l from-transparent via-amber-500 to-amber-500"></div>
                            <Sparkles className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400 animate-pulse" />
                        </div>
                    </div>

                    <p className="text-2xl md:text-4xl font-light tracking-[0.3em] text-amber-200/90 mb-8 md:mb-12" style={{ fontFamily: 'Cinzel, Georgia, serif' }}>
                        DWITIYA ADHYAYA
                    </p>

                    {/* Stats Card */}
                    <div className="inline-block backdrop-blur-xl bg-white/5 border border-purple-400/30 rounded-2xl px-6 md:px-12 py-4 md:py-6 shadow-2xl w-full md:w-auto">
                        <div className="flex items-center justify-center gap-4">
                            <Users className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                            <div className="text-left">
                                <p className="text-xs md:text-sm text-cyan-300/70 tracking-wider uppercase">Total Participants</p>
                                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    {participants.length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top 3 Podium */}
                {/* Top 3 Podium */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                    {/* Second Place - Order 2 on mobile */}
                    <div className="order-2 md:order-1 md:pt-12">
                        <div className="backdrop-blur-xl bg-gradient-to-br from-slate-400/20 to-gray-500/20 border-2 border-slate-300/50 rounded-2xl p-6 shadow-xl shadow-slate-400/20 hover:scale-105 transition-all">
                            <div className="text-4xl md:text-6xl mb-3 text-center">🥈</div>
                            <p className="text-lg md:text-xl font-bold text-center mb-2">{sortedParticipants[1]?.name}</p>
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-slate-300 to-gray-400 bg-clip-text text-transparent">
                                    {sortedParticipants[1]?.score}
                                </p>
                                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Points</p>
                            </div>
                        </div>
                    </div>

                    {/* First Place - Order 1 on mobile */}
                    <div className="order-1 md:order-2">
                        <div className="backdrop-blur-xl bg-gradient-to-br from-yellow-400/30 to-amber-600/30 border-2 border-yellow-400/70 rounded-2xl p-6 md:p-8 shadow-2xl shadow-yellow-500/40 hover:scale-105 transition-all relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Champion
                            </div>
                            <div className="text-6xl md:text-7xl mb-4 text-center animate-pulse">🥇</div>
                            <p className="text-xl md:text-2xl font-bold text-center mb-3">{sortedParticipants[0]?.name}</p>
                            <div className="text-center">
                                <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                                    {sortedParticipants[0]?.score}
                                </p>
                                <p className="text-sm text-white/60 uppercase tracking-wider mt-2">Points</p>
                            </div>
                        </div>
                    </div>

                    {/* Third Place - Order 3 on mobile */}
                    <div className="order-3 md:order-3 md:pt-12">
                        <div className="backdrop-blur-xl bg-gradient-to-br from-orange-400/20 to-amber-700/20 border-2 border-orange-400/50 rounded-2xl p-6 shadow-xl shadow-orange-500/20 hover:scale-105 transition-all">
                            <div className="text-4xl md:text-6xl mb-3 text-center">🥉</div>
                            <p className="text-lg md:text-xl font-bold text-center mb-2">{sortedParticipants[2]?.name}</p>
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-orange-400 to-amber-600 bg-clip-text text-transparent">
                                    {sortedParticipants[2]?.score}
                                </p>
                                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Points</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rest of Leaderboard */}
                <div className="space-y-3 max-w-4xl mx-auto">
                    {sortedParticipants.slice(3).map((participant, index) => {
                        const actualIndex = index + 3;
                        const style = getRankStyle(actualIndex);
                        return (
                            <div
                                key={participant.id}
                                className={`relative overflow-hidden rounded-xl backdrop-blur-lg transition-all duration-300 ${style.bg} ${style.border} ${style.glow} ${style.scale}`}
                            >
                                <div className="flex items-center justify-between p-5">
                                    <div className="flex items-center gap-6 flex-1">
                                        <div className="text-2xl font-bold w-16 text-center text-purple-300">
                                            #{actualIndex + 1}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                                                {participant.name}
                                            </h3>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                                {participant.score}
                                            </p>
                                            <p className="text-xs text-white/50 uppercase tracking-wider">Points</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="mt-12 md:mt-20 text-center">
                    <div className="inline-block backdrop-blur-xl bg-white/5 border border-purple-400/20 rounded-2xl px-8 md:px-12 py-6 md:py-8 w-full md:w-auto">
                        <p className="text-xl md:text-2xl font-bold tracking-wide text-white/95 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            GEEK ROOM
                        </p>
                        <p className="text-xs md:text-sm tracking-[0.3em] text-white/60 mb-4 md:mb-6">ADGIPS</p>
                        <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-4 md:mb-6"></div>
                        <p className="text-4xl md:text-6xl font-black" style={{
                            background: 'linear-gradient(135deg, #94A3B8, #E5E7EB, #CBD5E1, #94A3B8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontFamily: 'Cinzel, Georgia, serif'
                        }}>
                            2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
