import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2vw;
`;

export const LeftPanelContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 90vh;
  border-right: 1px outset ${(props) => props.theme.background};
  padding-top: 30px;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.secondary};
  outline: none;
  text-decoration: none;
  font-size: 1.1rem;
  display: block;
  text-align: left;
  font-family: Roboto;
  padding: 30px;
  background-color: ${(props) => props.theme.background};
`;

export const StyledImage = styled.img`
  height: 1.8rem;
  width: 1.8rem;
`;
