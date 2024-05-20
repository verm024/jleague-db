import { color } from "@/constants/color";
import clsx from "clsx";

type fontWeightType =
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold";

type fontSizeType = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";

export interface TextProps {
  children: React.ReactNode;
  color?: color;
  fontWeight?: fontWeightType;
  size?: fontSizeType;
  className?: string;
}

export default function Text({
  children,
  color,
  fontWeight,
  size,
  className,
}: TextProps) {
  return (
    <p
      style={{ color }}
      className={clsx(`font-${fontWeight}`, `text-${size}`, className)}
    >
      {children}
    </p>
  );
}
