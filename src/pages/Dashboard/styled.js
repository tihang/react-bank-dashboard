import styled from "styled-components/macro";

export const DashboardWrapper = styled.div`
  padding: 1.3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 2.8rem;
  justify-content: center;
  grid-template-areas:
    "a c"
    "b d";

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "a"
      "b"
      "c"
      "d";
  }
`;
