import * as React from "react";

const Npm = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <title>npm</title>
    <path fill="#C12127" d="M0 256V0h256v256z" />
    <path fill="#FFF" d="M48 48h160v160h-32V80h-48v128H48z" />
  </svg>
);

export default Npm;
