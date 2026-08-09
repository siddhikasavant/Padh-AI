import * as SolidIcons from "@heroicons/react/24/solid";
import * as OutlineIcons from "@heroicons/react/24/outline";
import { ComponentType, SVGProps } from "react";

type IconName =
  | keyof typeof SolidIcons
  | keyof typeof OutlineIcons;

interface AppIconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export default function AppIcon({
  name,
  className = "",
  size = 20,
}: AppIconProps) {
  const Icon =
    (OutlineIcons[name as keyof typeof OutlineIcons] ??
      SolidIcons[name as keyof typeof SolidIcons]) as
      | ComponentType<SVGProps<SVGSVGElement>>
      | undefined;

  if (!Icon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <Icon
      width={size}
      height={size}
      className={className}
    />
  );
}