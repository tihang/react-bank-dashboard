import styled, { css } from "styled-components/macro";

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

// PROFILE BAR

export const ProfileBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 0.8rem;
  position: relative;
`;

export const StyledProfileBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const StyledProfilePic = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 100px;
  padding: 1px;
  border: 1px solid ${(props) => props.theme.success};
  /* padding: 1rem; */
`;

export const StyledProfileBarSvg = styled.i`
  color: ${(props) =>
    props.open ? props.theme.success : props.theme.secondary};
  padding: 0.5rem;
  transition: all 0.3s ease-in-out 0s;

  ${(props) => (props.open ? "transform: rotate(360deg)" : null)}
`;

//PROFILE DROPDOWN
export const StyledProfileDropdown = styled.div`
  outline: none;
  ${(props) =>
    props.open
      ? css`
          position: absolute;
          right: 18px;
          top: 52px;
          z-index: 99;
          width: 200px;
          background-color: white;
          border: 1px solid #e1e4e8;
          border-radius: 6px;
          box-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);
          padding-top: 4px;
          padding-bottom: 4px;
          background-clip: padding-box;

          @media (max-width: 768px) {
            right: 10px;
            top: 62px;
          }
        `
      : css`
          display: none;
        `}
  ul {
    color: ${(props) => props.theme.secondary};
    li {
      &:last-child {
        &:hover {
          color: ${(props) => props.theme.danger};
        }
      }
      font-family: "Nunito";
      text-align: start;
      padding: 10px;
      border-bottom: 1px solid ${(props) => props.theme.secondary_background};
      ${(props) => (props.logout ? "color: red" : null)}
      &:hover {
        background-color: ${(props) => props.theme.secondary_background};
        color: ${(props) => props.theme.success};
        cursor: pointer;
      }
      strong {
        font-weight: 600;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
          "Helvetica Neue", sans-serif;
      }
    }
  }
`;

//NAVIGATION BURGER
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

// BRAND LOGO
export const LogoIcon = styled.img`
  height: 50px;
  width: 50px;

  @media (max-width: 768px) {
    height: 34px;
    width: 34px;
  }
`;

export const LogoTitle = styled.h1`
  font-family: "Nunito";
  color: ${(props) => props.theme.secondary};
  font-size: 1rem;
  margin: 0 0;
  padding: 18px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-right: 0;
    padding-left: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-left: 20px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 0;
    margin-left: 0;
  }
`;
