export default function ChartMotif({ className = '' }) {
  const bars = [40, 65, 45, 80, 55, 70, 50, 90, 60, 75]

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 80" className="h-full w-full opacity-[0.15] dark:opacity-[0.12]">
        {bars.map((h, i) => (
          <rect
            key={i}
            x={i * 20 + 4}
            y={80 - h * 0.75}
            width="12"
            height={h * 0.75}
            rx="2"
            fill="url(#barGradient)"
          />
        ))}
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
