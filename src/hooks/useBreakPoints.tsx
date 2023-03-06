/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {useMediaQuery} from "react-responsive";

// eslint-disable-next-line require-jsdoc
export default function useBreakPoints() {

  const xsm = useMediaQuery({
    query: "(min-width: 100px) and (max-width: 480px)",
  });
  const sm = useMediaQuery({
    query: "(min-width: 481px) and (max-width: 768px)"
  });

  const md = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)"
  });

  const lg = useMediaQuery({
    query: "(min-width: 1025px) and (max-width: 1200px)"
  });

  const xlg = useMediaQuery({
    query: "(min-width: 1201px)"
  });

  const s = (dimensions: number[]): number => {
    const breakpoints = [xsm, sm, md, lg, xlg];
    const curBreakpoint = breakpoints.findIndex((b) => b);
    return dimensions[curBreakpoint] || 0;
  };

  return { 
    s
  };
}