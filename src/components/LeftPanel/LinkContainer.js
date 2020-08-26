import React from "react";
import { StyledLink, StyledImage } from "./styled";

const LinkContainer = (props) => {
  return (
    <StyledLink {...props}>
      <div>
        <StyledImage src={props.logo} />
      </div>
      <div>{props.children}</div>
    </StyledLink>
  );
};

export default LinkContainer;
