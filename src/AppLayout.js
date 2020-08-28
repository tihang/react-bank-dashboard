import styled from "styled-components";

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 12%) 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default AppLayout;
