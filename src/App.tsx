import React, { useState } from 'react';

const HackathonLeaderboard = () => {
  const [participants, setParticipants] = useState([
    { id: 1, name: 'Dristi Agarwal', score: 18 },
    { id: 2, name: 'Harshit Gupta', score: 0 },
    { id: 3, name: 'Manav Garg', score: 20 },
    { id: 4, name: 'Pari Goyal', score: 43 },
    { id: 5, name: 'Sanchita Das', score: 14 },
    { id: 6, name: 'Sumit Kumar', score: 3 },
    { id: 7, name: 'Tanish Kashyap', score: 29 },
    { id: 8, name: 'Utsav Garg', score: 26 },
    { id: 9, name: 'Yashasvini Sharma', score: 3 },
    { id: 10, name: 'Khrish Chauhan', score: 16 },
    { id: 11, name: 'Himanshu', score: 17 },
    { id: 12, name: 'Akansha', score: 0 },
    { id: 13, name: 'Bhavya', score: 2 },
    { id: 14, name: 'Himani', score: 0 }
  ]);

  const sortedParticipants = [...participants].sort((a, b) => b.score - a.score);

  const handleDelete = (id) => {
    setParticipants(participants.filter(p => p.id !== id));
  };

  const getMedalEmoji = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return `#${index + 1}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');
      `}</style>
      {/* Cosmic Background Effect */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <img
  src="ggg.jpg"
  className="w-64 h-auto"
  alt="logo"
/>

          </div>
          
          <div className="relative inline-block my-8">
            <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-amber-500"></div>
            <div className="absolute -left-28 top-1/2 transform -translate-y-1/2 text-amber-500">◆</div>
            
            <h1 className="text-7xl font-serif tracking-wide" style={{
              background: 'linear-gradient(to bottom, #FCD34D 0%, #F59E0B 50%, #D97706 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(251, 191, 36, 0.5)',
              fontFamily: 'Cinzel, Georgia, serif'
            }}>
              CODE VEDA
            </h1>
            
            <div className="absolute -right-32 top-1/2 transform -translate-y-1/2 w-32 h-px bg-gradient-to-l from-transparent via-amber-500 to-amber-500"></div>
            <div className="absolute -right-28 top-1/2 transform -translate-y-1/2 text-amber-500">◆</div>
          </div>
          
          <p className="text-3xl font-light tracking-widest text-amber-200/90 mt-6" style={{fontFamily: 'Cinzel, Georgia, serif'}}>
            DWITIYA ADHYAYA
          </p>
          
          <div className="mt-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-4"></div>
            <p className="text-lg text-cyan-300/60 tracking-wider">Registration Leaderboard</p>
            <p className="text-3xl font-bold text-white mt-3">{participants.length} Registered</p>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="space-y-4">
          {sortedParticipants.map((participant, index) => (
            <div
              key={participant.id}
              className={`relative overflow-hidden rounded-lg backdrop-blur-sm transition-all hover:scale-[1.02] ${
                index === 0
                  ? 'bg-gradient-to-r from-amber-500/30 to-yellow-500/30 border-2 border-amber-400/50 shadow-lg shadow-amber-500/30'
                  : index === 1
                  ? 'bg-gradient-to-r from-slate-400/20 to-gray-400/20 border-2 border-slate-400/40'
                  : index === 2
                  ? 'bg-gradient-to-r from-orange-600/20 to-amber-700/20 border-2 border-orange-400/40'
                  : 'bg-gradient-to-r from-slate-800/30 to-slate-900/30 border border-white/10'
              }`}
            >
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-6 flex-1">
                  <div className="text-4xl font-bold w-20 text-center">
                    {getMedalEmoji(index)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">{participant.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/60 mb-1">Score</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {participant.score}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-block relative">
            <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-amber-500/50"></div>
            <div className="absolute -left-28 top-1/2 transform -translate-y-1/2 text-amber-500/50 text-xs">◆</div>
            
            <div className="px-8">
              <p className="text-lg font-semibold tracking-wide text-white/90 mb-1">GEEK ROOM</p>
              <p className="text-sm tracking-wider text-white/70">ADGIPS</p>
            </div>
            
            <div className="absolute -right-32 top-1/2 transform -translate-y-1/2 w-32 h-px bg-gradient-to-l from-transparent via-amber-500/50 to-amber-500/50"></div>
            <div className="absolute -right-28 top-1/2 transform -translate-y-1/2 text-amber-500/50 text-xs">◆</div>
          </div>
          <p className="text-5xl font-bold mt-8 mb-2" style={{
            background: 'linear-gradient(to right, #94A3B8, #E5E7EB, #94A3B8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Cinzel, Georgia, serif'
          }}>2026</p>
        </div>
      </div>
    </div>
  );
};

export default HackathonLeaderboard;
