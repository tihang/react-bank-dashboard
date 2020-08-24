import styled, { css } from "styled-components";

const Button = styled.button`
  font-family: ${(props) => props.theme.font};
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  background-color: ${(props) => props.theme.primary};
  color: #fff;
  /* background: ${(props) => (props.primary ? "red" : "green")}; */
  /* background: ${(props) =>
    props.primary ? props.theme.primary : props.theme.secondary}; */
  
  ${(props) =>
    props.color &&
    css`
      background: ${(props) => props.theme[props.color]};
    `}

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
