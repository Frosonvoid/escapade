import starsBg from "../assets/strrrs.png";

export function LeaderboardSection() {
  const rankings = [
    { rank: "1st", team: "Light Crew", time: "06:07:08" },
    { rank: "2nd", team: "Light Crew", time: "06:07:08" },
    { rank: "3rd", team: "Light Crew", time: "06:07:08" },
    { rank: "4th", team: "Light Crew", time: "06:07:08" },
    { rank: "5th", team: "Light Crew", time: "06:07:08" },
  ];

  return (
    <section
      id="leaderboard"
      style={{ backgroundImage: `url(${starsBg})` }}
      className="min-h-[70vh] flex flex-col items-center justify-center p-8 border-t border-white/10 text-white text-center bg-cover bg-center bg-no-repeat"
    >
      <h2 className="text-4xl sm:text-6xl font-orbitron font-black text-white uppercase tracking-widest mb-8">
        MISSION RANKINGS
      </h2>

      {/* Main Container with Lowered Gradient Opacity (0.2) */}
      <div
        className="w-full max-w-2xl p-6 sm:p-8 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl flex flex-col gap-3"
        style={{
          background:
            "linear-gradient(135deg, rgba(222, 0, 0, 0.1), rgba(64, 192, 206, 0.1), rgba(73, 180, 46, 0.1), rgba(255, 222, 66, 0.1))",
        }}
      >
        {rankings.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all"
          >
            <div className="flex items-center gap-6">
              <span className="w-12 text-left font-orbitron font-extrabold text-xl sm:text-2xl text-white">
                {item.rank}
              </span>
              <span className="font-orbitron text-base sm:text-lg text-white/90">
                {item.team}
              </span>
            </div>
            <span className="font-orbitron text-base sm:text-lg text-white/90">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}