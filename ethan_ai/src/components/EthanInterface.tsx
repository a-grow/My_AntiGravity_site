const EthanInterface = () => {
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] mx-auto my-8 md:my-12">
      {/* SVG HUD Rings */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Cyan glow filter */}
          <filter id="glowCyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowCyanStrong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowOrange" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowGreen" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === RING 1 — Outermost: Tick marks === */}
        <g className="animate-spin-cw-slow" style={{ transformOrigin: '250px 250px' }}>
          {Array.from({ length: 72 }).map((_, i) => {
            const angle = (i * 5) * Math.PI / 180;
            const isMajor = i % 9 === 0;
            const r1 = isMajor ? 232 : 236;
            const r2 = 244;
            const x1 = 250 + r1 * Math.cos(angle);
            const y1 = 250 + r1 * Math.sin(angle);
            const x2 = 250 + r2 * Math.cos(angle);
            const y2 = 250 + r2 * Math.sin(angle);
            return (
              <line
                key={`outer-tick-${i}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="hsl(190 80% 50%)"
                strokeWidth={isMajor ? 2 : 0.8}
                opacity={isMajor ? 0.7 : 0.3}
              />
            );
          })}
          {/* Numbers on outer ring */}
          {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45].map((num, i) => {
            const angle = ((i * 36) - 90) * Math.PI / 180;
            const r = 222;
            const x = 250 + r * Math.cos(angle);
            const y = 250 + r * Math.sin(angle);
            return (
              <text
                key={`num-${num}`}
                x={x} y={y}
                fill="hsl(190 60% 45%)"
                fontSize="9"
                fontFamily="Orbitron, monospace"
                textAnchor="middle"
                dominantBaseline="central"
                opacity={0.5}
              >
                {num}
              </text>
            );
          })}
        </g>

        {/* === Orange arc (outer accent) === */}
        <g className="animate-spin-ccw-slow" style={{ transformOrigin: '250px 250px' }}>
          <path
            d={describeArc(250, 250, 240, -30, 40)}
            fill="none"
            stroke="hsl(25 100% 55%)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity={0.8}
            filter="url(#glowOrange)"
          />
        </g>

        {/* === Green arc (bottom accent) === */}
        <g className="animate-spin-cw-med" style={{ transformOrigin: '250px 250px' }}>
          <path
            d={describeArc(250, 250, 238, 160, 230)}
            fill="none"
            stroke="hsl(140 70% 45%)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity={0.6}
            filter="url(#glowGreen)"
          />
        </g>

        {/* === RING 2 — Segmented cyan arcs === */}
        <g className="animate-spin-ccw-slow" style={{ transformOrigin: '250px 250px' }}>
          {[
            { start: 10, end: 80, r: 210 },
            { start: 100, end: 160, r: 210 },
            { start: 200, end: 280, r: 210 },
            { start: 300, end: 350, r: 210 },
          ].map((arc, i) => (
            <path
              key={`seg2-${i}`}
              d={describeArc(250, 250, arc.r, arc.start, arc.end)}
              fill="none"
              stroke="hsl(190 80% 50%)"
              strokeWidth="2.5"
              opacity={0.5}
              filter="url(#glowCyan)"
            />
          ))}
        </g>

        {/* === RING 3 — Detailed tick ring === */}
        <g className="animate-spin-cw-med" style={{ transformOrigin: '250px 250px' }}>
          {Array.from({ length: 120 }).map((_, i) => {
            const angle = (i * 3) * Math.PI / 180;
            const isMajor = i % 10 === 0;
            const isMid = i % 5 === 0;
            const r1 = isMajor ? 185 : isMid ? 188 : 190;
            const r2 = 198;
            const x1 = 250 + r1 * Math.cos(angle);
            const y1 = 250 + r1 * Math.sin(angle);
            const x2 = 250 + r2 * Math.cos(angle);
            const y2 = 250 + r2 * Math.sin(angle);
            return (
              <line
                key={`mid-tick-${i}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="hsl(190 70% 55%)"
                strokeWidth={isMajor ? 1.8 : isMid ? 1 : 0.5}
                opacity={isMajor ? 0.8 : isMid ? 0.5 : 0.25}
              />
            );
          })}
          {/* Cyan arc segments on this ring */}
          {[
            { start: 20, end: 90 },
            { start: 140, end: 200 },
            { start: 250, end: 330 },
          ].map((arc, i) => (
            <path
              key={`arc3-${i}`}
              d={describeArc(250, 250, 200, arc.start, arc.end)}
              fill="none"
              stroke="hsl(190 90% 55%)"
              strokeWidth="1.5"
              opacity={0.4}
            />
          ))}
        </g>

        {/* === RING 4 — Block segments === */}
        <g className="animate-spin-ccw-med" style={{ transformOrigin: '250px 250px' }}>
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10) * Math.PI / 180;
            const r1 = 168;
            const r2 = 178;
            const gap = i % 3 === 0;
            if (gap) return null;
            const x1 = 250 + r1 * Math.cos(angle);
            const y1 = 250 + r1 * Math.sin(angle);
            const x2 = 250 + r2 * Math.cos(angle);
            const y2 = 250 + r2 * Math.sin(angle);
            return (
              <line
                key={`block-${i}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="hsl(210 80% 55%)"
                strokeWidth="3"
                opacity={0.3}
              />
            );
          })}
          {/* Segmented arcs */}
          {[
            { start: 0, end: 50 },
            { start: 70, end: 130 },
            { start: 180, end: 260 },
            { start: 290, end: 340 },
          ].map((arc, i) => (
            <path
              key={`arc4-${i}`}
              d={describeArc(250, 250, 173, arc.start, arc.end)}
              fill="none"
              stroke="hsl(210 70% 50%)"
              strokeWidth="8"
              opacity={0.15}
            />
          ))}
        </g>

        {/* === RING 5 — Fine inner ticks === */}
        <g className="animate-spin-cw-fast" style={{ transformOrigin: '250px 250px' }}>
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (i * 6) * Math.PI / 180;
            const isMajor = i % 5 === 0;
            const r1 = 148;
            const r2 = isMajor ? 158 : 154;
            const x1 = 250 + r1 * Math.cos(angle);
            const y1 = 250 + r1 * Math.sin(angle);
            const x2 = 250 + r2 * Math.cos(angle);
            const y2 = 250 + r2 * Math.sin(angle);
            return (
              <line
                key={`inner-tick-${i}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="hsl(0 0% 80%)"
                strokeWidth={isMajor ? 1.5 : 0.6}
                opacity={isMajor ? 0.7 : 0.35}
              />
            );
          })}
          {/* White inner ring circle */}
          <circle
            cx={250} cy={250} r={146}
            fill="none"
            stroke="hsl(0 0% 70%)"
            strokeWidth="1"
            opacity={0.4}
          />
          <circle
            cx={250} cy={250} r={160}
            fill="none"
            stroke="hsl(0 0% 70%)"
            strokeWidth="0.5"
            opacity={0.25}
          />
        </g>

        {/* === RING 6 — Innermost accent ring === */}
        <g className="animate-spin-ccw-slow" style={{ transformOrigin: '250px 250px' }}>
          <circle
            cx={250} cy={250} r={130}
            fill="none"
            stroke="hsl(190 80% 50%)"
            strokeWidth="2"
            opacity={0.6}
            filter="url(#glowCyan)"
          />
          {/* Dot accents */}
          <circle cx={250} cy={120} r="3" fill="hsl(190 80% 60%)" opacity={0.8} filter="url(#glowCyan)" />
          <circle cx={380} cy={250} r="2.5" fill="hsl(190 80% 60%)" opacity={0.6} filter="url(#glowCyan)" />
        </g>

        {/* === Core glow ring === */}
        <circle
          cx={250} cy={250} r={110}
          fill="none"
          stroke="hsl(190 80% 55%)"
          strokeWidth="2.5"
          opacity={0.7}
          filter="url(#glowCyanStrong)"
        />

        {/* Core background */}
        <circle
          cx={250} cy={250} r={108}
          fill="hsl(220 20% 8%)"
          fillOpacity={0.85}
        />
      </svg>

      {/* HUD Labels - positioned absolutely */}
      <span className="absolute top-[8%] left-[30%] font-orbitron text-[8px] sm:text-[10px] tracking-[0.2em] uppercase animate-glow-pulse"
        style={{ color: 'hsl(190 80% 50%)', textShadow: '0 0 8px hsl(190 80% 50% / 0.6)' }}>
        SYS.GPU
      </span>
      <span className="absolute top-[48%] left-[4%] sm:left-[6%] font-orbitron text-[8px] sm:text-[10px] tracking-[0.2em] uppercase animate-glow-pulse"
        style={{ color: 'hsl(190 80% 50%)', textShadow: '0 0 8px hsl(190 80% 50% / 0.6)', animationDelay: '0.8s' }}>
        SYS.CPU
      </span>
      <span className="absolute bottom-[22%] right-[12%] sm:right-[14%] font-orbitron text-[9px] sm:text-[11px] tracking-[0.15em] animate-glow-pulse"
        style={{ color: 'hsl(25 100% 55%)', textShadow: '0 0 8px hsl(25 100% 55% / 0.6)', animationDelay: '1.2s' }}>
        23°F
      </span>

      {/* Core Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="font-orbitron text-lg sm:text-2xl md:text-3xl font-bold tracking-wider"
          style={{
            color: 'hsl(0 0% 95%)',
            textShadow: '0 0 12px hsl(190 80% 55%), 0 0 30px hsl(190 80% 55% / 0.4)',
          }}>
          Ethan
        </span>
        <span className="font-rajdhani text-[10px] sm:text-xs md:text-sm mt-1 tracking-wide"
          style={{ color: 'hsl(25 100% 55%)', textShadow: '0 0 6px hsl(25 100% 55% / 0.5)' }}>
          21 memories
        </span>
        <span className="font-rajdhani text-[10px] sm:text-xs md:text-sm mt-0.5 tracking-wide"
          style={{ color: 'hsl(0 0% 70%)' }}>
          Listening…
        </span>
      </div>
    </div>
  );
};

/** Helper to describe an SVG arc path */
function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

export default EthanInterface;
