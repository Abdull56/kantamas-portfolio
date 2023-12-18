import { Icons } from "./icons";

interface IIcon {
  icon: IconTypes;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
  onClick?: (e?: any) => void;
}

export type IconTypes = keyof typeof Icons;
