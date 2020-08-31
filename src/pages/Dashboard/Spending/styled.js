import styled from "styled-components/macro";

export const SpendingWrapper = styled.div`
  grid-area: c;

  /* For graph info text */
  span {
    color: ${(props) => props.theme.text_light};
  }
`;
