import { useNavigate } from 'react-router-dom';

const CampusAmbassadors = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#26154c] text-white p-4 md:p-8">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');
      `}</style>

            <div className="max-w-4xl mx-auto relative z-10">
                <button
                    onClick={() => navigate('/')}
                    className="mb-6 md:mb-8 px-4 md:px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2 text-sm md:text-base"
                >
                    ← Back to Leaderboard
                </button>

                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-5xl font-serif tracking-wide mb-4 md:mb-6" style={{
                        background: 'linear-gradient(to bottom, #FCD34D 0%, #F59E0B 50%, #D97706 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: 'Cinzel, Georgia, serif'
                    }}>
                        Campus Ambassadors
                    </h1>
                    <p className="text-lg md:text-xl text-cyan-300/80">Join us in spreading the word!</p>
                </div>

                <div className="space-y-3 md:space-y-4">
                    {[
                        { id: 1, name: 'Aarav Sharma', registrations: 45 },
                        { id: 2, name: 'Ishita Patel', registrations: 38 },
                        { id: 3, name: 'Rohan Gupta', registrations: 32 },
                        { id: 4, name: 'Sneha Singh', registrations: 28 },
                        { id: 5, name: 'Vikram Malhotra', registrations: 25 }
                    ].map((ambassador, index) => (
                        <div
                            key={ambassador.id}
                            className={`relative overflow-hidden rounded-lg backdrop-blur-sm transition-all hover:scale-[1.02] ${index === 0
                                ? 'bg-gradient-to-r from-amber-500/30 to-yellow-500/30 border-2 border-amber-400/50 shadow-lg shadow-amber-500/30'
                                : 'bg-gradient-to-r from-slate-800/30 to-slate-900/30 border border-white/10'
                                }`}
                        >
                            <div className="flex items-center justify-between p-4 md:p-6">
                                <div className="flex items-center gap-4 md:gap-6 flex-1">
                                    <div className="text-2xl md:text-4xl font-bold w-12 md:w-20 text-center">
                                        #{index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-2xl font-bold">{ambassador.name}</h3>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs md:text-sm text-white/60 mb-1">Registrations</p>
                                        <p className="text-lg md:text-xl font-bold text-cyan-400">
                                            {ambassador.registrations}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CampusAmbassadors;
