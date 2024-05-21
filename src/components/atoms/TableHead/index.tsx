import { colorMapper } from '@/constants/color';
import { clsx } from 'clsx';
import React, { useMemo } from 'react';

export interface HeadItemProps {
  children: React.ReactNode;
}

interface ThStyleProps {
  roundedTopLeft?: boolean;
  roundedTopRight?: boolean;
}

interface FullThProps extends HeadItemProps, ThStyleProps {}

export default function TableHead({
  children,
  roundedTopLeft,
  roundedTopRight,
}: FullThProps) {
  const computedThClassname: string = useMemo(() => {
    const baseClass = `w-fit py-2 px-3 font-medium text-base sticky top-0`;
    const classes: string[] = [baseClass];
    if (roundedTopLeft) classes.push('rounded-tl-lg');
    if (roundedTopRight) classes.push('rounded-tr-lg');

    return classes.join(' ');
  }, [roundedTopLeft, roundedTopRight]);

  return (
    <th
      className={clsx(computedThClassname)}
      style={{ backgroundColor: colorMapper.grey }}
    >
      {children}
    </th>
  );
}
