import React from "react";

const Arrow = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 29"
      style={{
        enableBackground: "new 0 0 29 29",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M27 8.2 14.5 20.8 2 8.2"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
      />
    </svg>
  )

export default Arrow;
