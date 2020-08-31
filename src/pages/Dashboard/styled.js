import styled from "styled-components/macro";

export const DashboardWrapper = styled.div`
  padding: 1.3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-row-gap: 2.8rem;
  justify-content: center;
  grid-template-areas:
    "a c"
    "b d";
  background-color: ${(props) => props.theme.background};

  @media (max-width: 1051px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "a"
      "b"
      "c"
      "d";
  }
`;
