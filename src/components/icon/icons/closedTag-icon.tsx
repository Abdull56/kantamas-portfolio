import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 100 125"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M91.7 58.4s-12.8 8.3-20.5 13.3c-2.5 2-6.2 0-6.2-4.1 0-2.5 2.6-5.3 5.2-7.3 4.6-2.9 10.9-6.8 10.9-6.8s-7.6-4.7-12.2-7.6c-3.5-2-3.9-3.8-3.9-6.8s1.8-6.2 4.7-4.9c7.4 4.8 22 14.3 22 14.3s3.4 1.5 3.3 5.7c0 3-3.3 4.2-3.3 4.2zM49 81.3s-.8 4.7-5.7 4.7-3.3-4.7-3.3-4.7l13.1-62.9s.4-4.5 5.2-4.5 3.9 4.5 3.9 4.5L49 81.3zM29.7 46.8C25.1 49.6 19 53.5 19 53.5s5.1 3.1 9.4 5.8c3.7 2.6 6.5 5.3 6.2 9.7 0 3.1-2.6 4.5-8.3.9-7.8-4.9-18-11.5-18-11.5S5 56.3 5 54.2c0-4.1 3.3-5.7 3.3-5.7s11-7.1 18.7-12.1c4.4-3.1 7.9-2.5 8 1.1.1 4.5-.3 6.6-5.3 9.3z"
      clipRule="evenodd"
    />
    <text
      y={115}
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize={5}
      fontWeight="bold"
    >
      {"Created by Centis MENANT"}
    </text>
    <text
      y={120}
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize={5}
      fontWeight="bold"
    >
      {"from the Noun Project"}
    </text>
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
