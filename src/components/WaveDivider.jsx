export default function WaveDivider() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <svg
        width="120"
        height="20"
        viewBox="0 0 120 20"
        fill="none"
      >
        <path
          d="M0 10 Q10 0 20 10 T40 10 T60 10 T80 10 T100 10 T120 10"
          stroke="#d4af37"
          strokeWidth="2"
          fill="transparent"
          style={{
            animation: "waveAnim 2s ease-in-out infinite"
          }}
        />
      </svg>
    </div>
  );
}