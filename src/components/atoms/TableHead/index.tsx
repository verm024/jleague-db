"use client";

import React, { useMemo } from "react";

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
    const BASE_CLASS = "w-fit py-2 px-3 bg-gray-200 font-medium text-base";
    const classess: string[] = [BASE_CLASS];
    if (roundedTopLeft) classess.push("rounded-tl-lg");
    if (roundedTopRight) classess.push("rounded-tr-lg");

    return classess.join(" ");
  }, [roundedTopLeft, roundedTopRight]);

  console.log(computedThClassname);

  return <th className={computedThClassname}>{children}</th>;
}
