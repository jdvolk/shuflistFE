import styled from 'styled-components';

export const StyledMenu = styled.div<{ open: boolean }>`
  display: flex;
  flex-flow: column wrap;
  place-content: flex-start center;
  backdrop-filter: blur(16px);
  box-shadow: ${({ open }) => (open ? `4px 0px 14px #c8c6c6` : `none`)};
  transform: ${({ open }) => (open ? 'translateX(0px)' : 'translateX(-100%)')};
  height: 90vh;
  z-index: 100000;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  will-change: transform;

  @media (max-width: 576px) {
    width: 89vw;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 0.8rem;
    margin: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 1015px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;
export const StyledBlocker = styled.div<{ open: boolean }>`
  ${({ open }) =>
    open &&
    `
    z-index: 10000;
    overflow-x: hidden;
    overflow-y: hidden;
    position: absolute;
    width: 100vw;
    height: 100vh;
  `}
`;

export const StyledMenuContainer = styled.div``;
