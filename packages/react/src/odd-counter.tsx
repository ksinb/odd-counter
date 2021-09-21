import React, { useEffect, useRef } from 'react';
import * as Counter from '@ksinb/odd-counter';

export interface OddCounterProps {
  count: number;
}

export const OddCounter: React.FC<OddCounterProps> = ({
  children,
  ...props
}) => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const counter = new Counter.OddCounter({
      target: el.current,
      props,
    });

    return () => {
      counter.$destroy();
    };
  }, []);

  return <div ref={el}></div>;
};
