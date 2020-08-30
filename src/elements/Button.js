import styled, { css } from "styled-components";

// const Button = styled.button`
//   font-family: ${(props) => props.theme.font};
//   font-size: 1.1rem;
//   border: none;
//   border-radius: 5px;
//   padding: 7px 10px;
//   background-color: ${(props) => props.theme.primary};
//   color: #fff;
//   /* background: ${(props) => (props.primary ? "red" : "green")}; */
//   /* background: ${(props) =>
//     props.primary ? props.theme.primary : props.theme.secondary}; */

//   ${(props) =>
//     props.color &&
//     css`
//       background: ${(props) => props.theme[props.color]};
//     `}

//   &:hover {
//     cursor: pointer;
//   }
// `;

export const PrimaryButton = styled.button`
  width: 140px;
  height: 40px;
  border: none;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
  cursor: pointer;
  border-radius: 40px;
  font-family: Nunito;
  text-align: center;
  outline: none;
  font-size: 16px;
  margin: 0.4rem;
`;

export const SecondaryButton = styled.button`
  width: 140px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.secondary};
  background-color: white;
  color: ${(props) => props.theme.text_dark};
  cursor: pointer;
  border-radius: 40px;
  font-family: Nunito;
  text-align: center;
  outline: none;
  margin: 0.4rem;
`;
