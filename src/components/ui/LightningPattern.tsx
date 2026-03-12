import React from "react";

interface Bolt {
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  variant: number;
}

const generateBolts = (count: number, seed: number): Bolt[] => {
  const bolts: Bolt[] = [];
  for (let i = 0; i < count; i++) {
    const pseudo = ((seed + i * 7919) % 97) / 97;
    const pseudo2 = ((seed + i * 6271) % 89) / 89;
    const pseudo3 = ((seed + i * 3571) % 83) / 83;
    const pseudo4 = ((seed + i * 4517) % 71) / 71;
    bolts.push({
      x: pseudo * 100,
      y: pseudo2 * 100,
      size: 18,
      rotation: Math.floor(pseudo4 * 360),
      opacity: 0.15 + pseudo3 * 0.2,
      variant: i % 5,
    });
  }
  return bolts;
};

// Tiny single bolt
const BoltIcon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={color} />
  </svg>
);

// Cluster: 3 bolts together
const BoltCluster = ({ size, color }: { size: number; color: string }) => (
  <svg width={size * 2.5} height={size * 2} viewBox="0 0 60 48" fill="none">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={color} transform="translate(0,4) scale(0.7)" />
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={color} transform="translate(18,0) scale(0.9)" />
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={color} transform="translate(36,8) scale(0.6)" />
  </svg>
);

// Double bolt - mirrored
const BoltDouble = ({ size, color }: { size: number; color: string }) => (
  <svg width={size * 2} height={size * 1.5} viewBox="0 0 48 36" fill="none">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={color} transform="translate(0,2) scale(0.75)" />
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={color} transform="translate(20,6) scale(0.55) rotate(15 12 12)" />
  </svg>
);

// Outline bolt
const BoltOutline = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke={color} strokeWidth="1.5" />
  </svg>
);

// Scattered mini bolts
const BoltScatter = ({ size, color }: { size: number; color: string }) => (
  <svg width={size * 3} height={size * 2} viewBox="0 0 72 48" fill="none">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={color} transform="translate(2,2) scale(0.45)" />
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={color} transform="translate(22,18) scale(0.35)" />
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={color} transform="translate(40,4) scale(0.5)" />
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={color} transform="translate(52,22) scale(0.4)" />
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke={color} strokeWidth="1" transform="translate(12,28) scale(0.4)" />
  </svg>
);

interface LightningPatternProps {
  density?: "sparse" | "normal" | "dense";
  seed?: number;
  className?: string;
}

const densityMap = { sparse: 40, normal: 65, dense: 90 };

const LightningPattern: React.FC<LightningPatternProps> = ({
  density = "normal",
  seed = 42,
  className = "",
}) => {
  const count = densityMap[density];
  const bolts = generateBolts(count, seed);
  const color = "hsl(0 0% 35%)";

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {bolts.map((bolt, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${bolt.x}%`,
            top: `${bolt.y}%`,
            transform: `rotate(${bolt.rotation}deg)`,
            opacity: bolt.opacity,
          }}
        >
          {bolt.variant === 0 && <BoltIcon size={bolt.size} color={color} />}
          {bolt.variant === 1 && <BoltCluster size={bolt.size} color={color} />}
          {bolt.variant === 2 && <BoltDouble size={bolt.size} color={color} />}
          {bolt.variant === 3 && <BoltOutline size={bolt.size} color={color} />}
          {bolt.variant === 4 && <BoltScatter size={bolt.size} color={color} />}
        </div>
      ))}
    </div>
  );
};

export default LightningPattern;
