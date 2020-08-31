import styled from "styled-components/macro";

export const CardInfoWrapper = styled.div`
  grid-area: b;
`;

export const CardTable = styled.table`
  font-family: Nunito;

  td {
    padding: 1.5rem;
    color: ${(props) => props.theme.text_light};
    span {
      color: ${(props) => props.theme.secondary};
    }
  }
`;
