import { useState, useCallback, type CSSProperties } from 'react';

/**
 * Replicates the source design tool's `style-hover` attribute: merges a hover-only
 * style object over the base style while the pointer is over the element.
 */
export function useHover<T extends HTMLElement = HTMLElement>() {
  const [hover, setHover] = useState(false);
  const onMouseEnter = useCallback(() => setHover(true), []);
  const onMouseLeave = useCallback(() => setHover(false), []);

  const mergeStyle = (base: CSSProperties, hoverStyle: CSSProperties): CSSProperties =>
    hover ? { ...base, ...hoverStyle } : base;

  return { hover, onMouseEnter, onMouseLeave, mergeStyle } as {
    hover: boolean;
    onMouseEnter: (e: React.MouseEvent<T>) => void;
    onMouseLeave: (e: React.MouseEvent<T>) => void;
    mergeStyle: (base: CSSProperties, hoverStyle: CSSProperties) => CSSProperties;
  };
}
