import React from "react";

interface Bolt {
  x: string;
  y: string;
  size: number;
  rotation: number;
  opacity: number;
}

const generateBolts = (count: number, seed: number): Bolt[] => {
  const bolts: Bolt[] = [];
  for (let i = 0; i < count; i++) {
    const pseudo = ((seed + i * 7919) % 97) / 97;
    const pseudo2 = ((seed + i * 6271) % 89) / 89;
    const pseudo3 = ((seed + i * 3571) % 83) / 83;
    bolts.push({
      x: `${(pseudo * 100).toFixed(1)}%`,
      y: `${(pseudo2 * 100).toFixed(1)}%`,
      size: 16 + pseudo3 * 32,
      rotation: Math.floor(pseudo * 360),
      opacity: 0.04 + pseudo3 * 0.06,
    });
  }
  return bolts;
};

const BoltSVG = ({ size, rotation, opacity }: { size: number; rotation: number; opacity: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ transform: `rotate(${rotation}deg)`, opacity }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
      fill="hsl(0 0% 25%)"
      stroke="hsl(0 0% 20%)"
      strokeWidth="0.5"
    />
  </svg>
);

const ZapOutlineSVG = ({ size, rotation, opacity }: { size: number; rotation: number; opacity: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ transform: `rotate(${rotation}deg)`, opacity }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
      fill="none"
      stroke="hsl(0 0% 22%)"
      strokeWidth="1"
    />
  </svg>
);

const CircuitDotSVG = ({ size, rotation, opacity }: { size: number; rotation: number; opacity: number }) => (
  <svg
    width={size * 0.5}
    height={size * 0.5}
    viewBox="0 0 12 12"
    fill="none"
    style={{ transform: `rotate(${rotation}deg)`, opacity: opacity * 0.7 }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="2" fill="hsl(0 0% 20%)" />
    <line x1="6" y1="0" x2="6" y2="4" stroke="hsl(0 0% 18%)" strokeWidth="0.5" />
    <line x1="6" y1="8" x2="6" y2="12" stroke="hsl(0 0% 18%)" strokeWidth="0.5" />
  </svg>
);

interface LightningPatternProps {
  density?: "sparse" | "normal" | "dense";
  seed?: number;
  className?: string;
}

const densityMap = { sparse: 8, normal: 14, dense: 22 };

const LightningPattern: React.FC<LightningPatternProps> = ({
  density = "normal",
  seed = 42,
  className = "",
}) => {
  const count = densityMap[density];
  const bolts = generateBolts(count, seed);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {bolts.map((bolt, i) => {
        const variant = i % 3;
        return (
          <div
            key={i}
            className="absolute"
            style={{ left: bolt.x, top: bolt.y }}
          >
            {variant === 0 && <BoltSVG size={bolt.size} rotation={bolt.rotation} opacity={bolt.opacity} />}
            {variant === 1 && <ZapOutlineSVG size={bolt.size * 1.2} rotation={bolt.rotation} opacity={bolt.opacity} />}
            {variant === 2 && <CircuitDotSVG size={bolt.size} rotation={bolt.rotation} opacity={bolt.opacity} />}
          </div>
        );
      })}
    </div>
  );
};

export default LightningPattern;
