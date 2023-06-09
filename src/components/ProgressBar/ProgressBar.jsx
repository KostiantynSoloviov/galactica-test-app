import React from "react";
import { memo } from "react";

import styles from "./ProgressBar.module.css";

function Progress({
  progress = 0,
  strokeWidth = 4,
  ballStrokeWidth = 16,
  reduction = 0.25,
  transitionDuration = 0.5,
  transitionTimingFunction = "ease",
  background = "#dde2e9",
  hideBall = false,
  hideValue = false,
  gradient = [
    { stop: 0.0, color: "#FFFFFF" },
    { stop: 1, color: "#FFFFFF" },
  ],
  subtitle = "",
  style,
  className,
  suffix = "%",
}) {
  progress = Math.round(progress * 100) / 100;
  const width = 200;
  const center = width / 2;
  const height = 200 || center + center * Math.cos(reduction * Math.PI);
  const [unique] = React.useState(() => Math.random().toString());
  const rotate = 90 + 180 * reduction;
  const r = center - strokeWidth / 2 - ballStrokeWidth / 2;
  const circumference = Math.PI * r * 2;
  const offset = (circumference * (100 - progress * (1 - reduction))) / 100;

  return (
    <div className={`${className} ${styles.progress}`} style={style}>
      <svg viewBox={`0 0 ${width} ${height}`} className={styles.svg}>
        <defs>
          <linearGradient
            id={"gradient" + unique}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            {gradient.map(({ stop, color }) => (
              <stop
                key={stop}
                offset={stop * 100 + (suffix || "")}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>
        {!hideValue && (
          <text
            x={center}
            y={center}
            textAnchor="middle"
            fontSize="30"
            fill="#3c3c3c"
          >
            {progress}%
          </text>
        )}
        <text
          x={center}
          y={center + (30 * 3) / 4}
          textAnchor="middle"
          fill="#9c9c9c"
        >
          {subtitle}
        </text>
        <circle
          transform={`rotate(${rotate} ${center} ${center})`}
          id="path"
          cx={center}
          cy={center}
          r={r}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * reduction}
          fill="none"
          stroke={background}
          strokeLinecap="round"
        ></circle>
        <circle
          style={{
            transition: `stroke-dashoffset ${transitionDuration}s ${transitionTimingFunction}`,
          }}
          transform={`rotate(${rotate} ${center} ${center})`}
          id="path"
          cx={center}
          cy={center}
          r={r}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference}`}
          strokeDashoffset={offset}
          fill="none"
          stroke={`url(#gradient${unique})`}
          strokeLinecap="round"
        ></circle>
        {!hideBall && (
          <circle
            style={{
              transition: `stroke-dashoffset ${transitionDuration}s ${transitionTimingFunction}`,
            }}
            transform={`rotate(${rotate} ${center} ${center})`}
            id="path"
            cx={center}
            cy={center}
            r={r}
            strokeWidth={ballStrokeWidth}
            strokeDasharray={`1 ${circumference}`}
            strokeDashoffset={offset}
            fill="none"
            stroke={`url(#gradient${unique})`}
            strokeLinecap="round"
          ></circle>
        )}
      </svg>
    </div>
  );
}

const Progressing = memo(Progress);
Progressing.displayName = "Progress";

const ProgressBar = ({ progress, strokeWidth, hideBall }) => {
  return (
    <div className={styles.wrapper}>
      <Progressing
        progress={progress}
        reduction={0}
        className={styles.progress__bar}
        strokeWidth={strokeWidth || 2}
        ballStrokeWidth={8}
        background={"#FFFFFF1A"}
        hideValue={true}
        hideBall={hideBall}
      />
    </div>
  );
};

export default ProgressBar;
