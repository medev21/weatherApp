interface SpinnerProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
}

function Loader ({
    size = 40,
    strokeWidth = 4,
    color = '#1976d2',
}: SpinnerProps)  {
    const center = size / 2;
    const radius = center - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }}
        >
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                role="status"
                aria-label="Loading..."
                style={{ display: 'block' }}
            >
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference * 0.75} ${circumference}`}
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={`0 ${center} ${center}`}
                        to={`360 ${center} ${center}`}
                        dur="0.9s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
        </div>
    );
};

export default Loader;
