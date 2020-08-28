import React, { useState, useRef, useEffect } from "react";
import {
  StyledProfileBar,
  StyledProfilePic,
  StyledProfileBarSvg,
  StyledProfileDropdown,
  ProfileBarWrapper,
} from "./styled";

import ProfilePhoto from "../../icons/profile-pic.png";

const ProfileBar = () => {
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
