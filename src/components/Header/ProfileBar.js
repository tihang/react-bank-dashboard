import React from "react";
import {
  StyledProfileBar,
  StyledProfilePic,
  StyledProfileText,
} from "./styled";

import ProfilePhoto from "../../icons/profile-pic.png";

const ProfileBar = () => {
  return (
    <StyledProfileBar>
      <StyledProfilePic src={ProfilePhoto}></StyledProfilePic>
      <StyledProfileText>John Doe</StyledProfileText>
    </StyledProfileBar>
  );
};

export default ProfileBar;
