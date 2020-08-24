import styled from "styled-components";

export const HeaderContainer = styled.div``;

export const LogoIcon = styled.img`
  height: 2.4rem;
  width: 2.4rem;

  @media (max-width: 768px) {
    height: 1.8rem;
    width: 1.8rem;
  }
`;

export const LogoTitle = styled.h1`
  font-family: "Nunito";
  color: ${(props) => props.theme.secondary};
  font-size: 1.4rem;
  margin: 0 0;
  padding: 18px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1vw 2vw;

  &:hover {
    cursor: pointer;
    color: red;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
