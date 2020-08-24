import React from "react";
import { StyledLink, StyledImage, StyledLinkContainer } from "./styled";

const LinkContainer = (props) => {
  return (
    <StyledLinkContainer>
      <StyledImage src={props.logo} />
      <StyledLink to={props.to}>{props.children}</StyledLink>
    </StyledLinkContainer>
  );
};

export default LinkContainer;
