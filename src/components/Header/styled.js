import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 12%) 1fr;
  align-items: center;
  border-bottom: 4px solid ${(props) => props.theme.secondary_background};

  /* @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  } */
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledProfileBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-right: 0.6rem;
  /* display: grid;
  grid-template-columns: 4fr 1fr 1fr; */
`;

export const StyledProfilePic = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 100px;
`;

export const StyledProfileText = styled.div`
  font-family: "Nunito";
  color: ${(props) => props.theme.secondary};
`;

export const StyledBurger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    padding-left: 1rem;
    div {
      width: 2rem;
      height: 0.25rem;
      background: ${(props) => props.theme.secondary};
      border-radius: 10px;
      transition: all 0.3s linear;
      margin: 6px;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

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
    font-size: 0.8rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1vw 2vw;
  /* background-color: ${(props) => props.theme.secondary_background}; */

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
