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
  const getFontWeight = (fw?: fontWeightType) => {
    if (!fw) {
      return "font-normal";
    }
    return `font-${fw}`;
  };

  // TODO: Tailwind does not allow assigning class using string formatting, find a better way than this
  const getFontSize = (fs?: fontSizeType) => {
    switch (fs) {
      case "xs":
        return "text-xs";
      case "sm":
        return "text-sm";
      case "base":
        return "text-base";
      case "lg":
        return "text-lg";
      case "xl":
        return "text-xl";
      case "2xl":
        return "text-2xl";
      default:
        return "text-base";
    }
  };

  return (
    <p
      style={{ color }}
      className={clsx(getFontWeight(fontWeight), getFontSize(size), className)}
    >
      {children}
    </p>
  );
}
