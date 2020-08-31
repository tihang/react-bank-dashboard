import styled from "styled-components";

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 12%) 1fr;
  background-color: ${(props) => props.theme.background};
  height: 100vh;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default AppLayout;
