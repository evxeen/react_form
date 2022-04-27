import React, { FC } from "react";
import "./Wpapper.scss";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }: WrapperProps) => {
  return <div className="wrapper">{children}</div>;
};
