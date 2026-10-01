import starsBg from "../assets/strrrs.png";
import { ScrollReveal } from "../components/ScrollReveal";

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
      <ScrollReveal>
        <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-orbitron font-black text-white uppercase tracking-widest mb-8">
          MISSION RANKINGS
        </h2>
      </ScrollReveal>

      {/* Main Container with Lowered Gradient Opacity (0.2) */}
      <ScrollReveal delay="100ms" className="w-full max-w-2xl">
        <div
          className="w-full p-6 sm:p-8 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl flex flex-col gap-3"
          style={{
            background:
              "linear-gradient(135deg, rgba(222, 0, 0, 0.1), rgba(64, 192, 206, 0.1), rgba(73, 180, 46, 0.1), rgba(255, 222, 66, 0.1))",
          }}
        >
          {rankings.map((item, index) => (
            <ScrollReveal key={index} delay={`${150 + index * 80}ms`}>
              <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all">
                <div className="flex items-center gap-3 sm:gap-6">
                  <span className="w-8 sm:w-12 text-left font-orbitron font-extrabold text-sm sm:text-xl md:text-2xl text-white">
                    {item.rank}
                  </span>
                  <span className="font-orbitron text-xs sm:text-base md:text-lg text-white/90">
                    {item.team}
                  </span>
                </div>
                <span className="font-orbitron text-xs sm:text-base md:text-lg text-white/90">
                  {item.time}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}