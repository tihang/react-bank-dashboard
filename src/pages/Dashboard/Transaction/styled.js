import styled from "styled-components/macro";

export const TransactionWrapper = styled.div`
  grid-area: d;
`;

export const TransactionTable = styled.table`
  width: 100%;
  border: 1px soild black;

  tr {
    &:nth-child(even) {
      background: ${(props) => props.theme.secondary_background};
    }
  }

  th {
    font-family: Nunito;
    font-weight: 600;
    font-size: 1rem;
    color: ${(props) => props.theme.text_dark};
    padding: 1rem 0;
  }

  td {
    padding: 1rem 0;
    font-family: Nunito;
    text-align: center;
    color: ${(props) => props.theme.text_light};
    /* border-bottom: 1px solid ${(props) => props.theme.text_light}; */

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;
