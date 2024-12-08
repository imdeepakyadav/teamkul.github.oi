export default function BackgroundPattern() {
  return (
    <div className="background-pattern">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L100,0 L100,100 Q50,50 0,100 Z" fill="currentColor" />
      </svg>
    </div>
  );
}
