import React from "react";
import { LogoContainer, LogoIcon, LogoTitle } from "./styled";
import icon from "../../logo.svg";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoIcon src={icon} alt="Logo" />
      <LogoTitle>Rastra Bank</LogoTitle>
    </LogoContainer>
  );
};

export default Logo;
