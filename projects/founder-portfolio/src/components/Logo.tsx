// Signal Core Co. mark — a signal radiating from its core.
// Ink tile, paper core dot, ember broadcast arcs.
export default function Logo({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Signal Core Co. logo"
      className={className}
    >
      <rect width="48" height="48" rx="12" fill="#1C1917" />
      <circle cx="17" cy="24" r="4.5" fill="#FAF6EE" />
      <path
        d="M 22 15.3 A 10 10 0 0 1 22 32.7"
        stroke="#E8551F"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 25 10.1 A 16 16 0 0 1 25 37.9"
        stroke="#E8551F"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
