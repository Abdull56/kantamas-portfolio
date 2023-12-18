import React from "react";
import { Icons } from "./icons";
import { IIcon } from "./icon";

export const Icon: React.FC<IIcon> = ({
  className,
  icon,
  size,
  width,
  height,
  onClick,
  ...rest
}) => {
  const IconComponent = Icons[icon] || null;

  return (
    <div {...rest} onClick={onClick} className="d-flex align-items-center">
      {IconComponent ? (
        <IconComponent
          width={size || width}
          height={size || height}
          onClick={onClick}
        />
      ) : null}
    </div>
  );
};
