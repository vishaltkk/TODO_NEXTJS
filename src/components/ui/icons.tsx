import React, { SVGAttributes } from 'react';

export function ArrowRight({
  className,
}: SVGAttributes<SVGElement>): JSX.Element {
  return (
    <svg
      className={className}
      width="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 4.64844L23.3516 14L14 23.3516L12.3594 21.7109L18.8672 15.1484H4.64844V12.8516H18.8672L12.3594 6.28906L14 4.64844Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
