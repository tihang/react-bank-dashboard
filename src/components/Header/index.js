import React from "react";
import Logo from "./Logo";
import Burger from "./Burger";
import ProfileBar from "./ProfileBar";
import { HeaderWrapper } from "./styled";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Burger open={props.open} setOpen={props.setOpen}></Burger>
      <Logo></Logo>
      <ProfileBar darkTheme={props.darkTheme} setDarkTheme={props.setDarkTheme}>
        <span>Test text</span>
      </ProfileBar>
    </HeaderWrapper>
  );
};

export default Header;
