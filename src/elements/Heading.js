import styled from "styled-components/macro";

export const Heading = styled.h1`
  font-family: Nunito, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${(props) => props.theme.text_dark};
  outline: none;
  padding: 2rem 2rem;
`;

export const SubHeading = styled.h2`
  font-family: Nunito, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => props.theme.text_light};
  outline: none;
  padding: 8px 8px;
`;
