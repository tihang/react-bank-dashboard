import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const LeftPanelContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 90vh;
  border-right: 4px solid ${(props) => props.theme.secondary_background};

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.secondary};
  outline: none;
  text-decoration: none;
  font-size: 1.1rem;
  text-align: left;
  font-family: Roboto;
  transition: 0.2s;

  &:hover {
    background-color: whitesmoke;
  }

  &.active {
    color: ${(props) => props.theme.success};
    background-color: ${(props) => props.theme.secondary_background};
  }
`;

export const StyledImage = styled.img`
  height: 1.8rem;
  width: 1.8rem;
  padding: 0 2rem;
`;
