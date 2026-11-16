export function GradientBlob({
  color,
  size = '400px',
  className = '',
}: {
  color: string;
  size?: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute rounded-full animate-pulse-glow pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(80px)',
        opacity: 0.15,
      }}
    />
  );
}
