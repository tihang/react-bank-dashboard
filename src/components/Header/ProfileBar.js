import React, { useState, useRef, useEffect } from "react";
import {
  StyledProfileBar,
  StyledProfilePic,
  StyledProfileBarSvg,
  StyledProfileDropdown,
  ProfileBarWrapper,
  ThemeToggler,
} from "./styled";

import ProfilePhoto from "../../icons/profile-pic.png";
import DarkSwitch from "../../icons/switch-dark.svg";
import LightSwitch from "../../icons/switch-light.svg";

const ProfileBar = ({ darkTheme, setDarkTheme }) => {
  const node = useRef();
  const [open, setOpen] = useState(false);

  const handleClickOutside = (e) => {
    if (!node.current.contains(e.target)) {
      // Outside click
      setOpen(false);
    }
    // Inside click
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <ProfileBarWrapper>
      {/* THEME SWITCH */}
      <ThemeToggler
        src={darkTheme ? DarkSwitch : LightSwitch}
        onClick={() => setDarkTheme(!darkTheme)}
      />

      <StyledProfileBar ref={node} onClick={() => setOpen(!open)}>
        <StyledProfilePic src={ProfilePhoto}></StyledProfilePic>
        <StyledProfileBarSvg
          className="fas fa-caret-down"
          open={open}
        ></StyledProfileBarSvg>
      </StyledProfileBar>

      <StyledProfileDropdown open={open}>
        <ul>
          <li>
            Signed in as <strong>John Doe</strong>
          </li>
          <li>Upgrade To Pro</li>
          <li logout>Log out</li>
        </ul>
      </StyledProfileDropdown>
    </ProfileBarWrapper>
  );
};

export default ProfileBar;
