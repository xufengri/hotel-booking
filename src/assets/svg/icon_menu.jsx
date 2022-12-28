import React, { memo } from "react";
import styleStrToSubject from "./utils";

export default memo(function iconMenu() {
  return (
    <div>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        style={styleStrToSubject("display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;")}
      >
        <g fill="none" fill-rule="nonzero">
          <path d="m2 16h28"></path>
          <path d="m2 24h28"></path>
          <path d="m2 8h28"></path>
        </g>
      </svg>
    </div>
  );
});
