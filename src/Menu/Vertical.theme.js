import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  left: 0;
  width: 80px;
  height: 100%;
  box-shadow: ${({theme}) => theme === 'dark' 
    ? '0 4px 6px rgba(0, 0, 0, 0.7), 0 5px 15px rgba(0, 0, 0, 0.1)'
    : '0 4px 6px rgba(50, 50, 50, 0.1), 0 5px 15px rgba(50, 50, 50, 0.1)'};
  background-color: ${({theme}) => theme === 'dark' ? '#2c384b' : 'white'};
  color: ${({theme}) => theme === 'dark' ? 'white' : '#2c384b'};
  transition: width 180ms ease-in-out;
  &:hover {
    width: 200px;
  }
`

export const Top = styled.div`
  width: 100%;
  text-align: center;
  .logoMenu {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Bottom = styled.div`
  width: 100%;
  text-align: center;
`

export const WrapperItem = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: ${({ hover, haveText }) => hover && haveText ? 'flex-start' : 'center'};;
  align-items: center;
  cursor: pointer;
  padding-left: ${({ hover, haveText }) => hover && haveText ? '12px' : '0'};
  & > i {
    padding-right: ${({ hover }) => hover ? '8px' : '0'};
    opacity: ${({ hover, haveText }) => hover && haveText ? '0.6' : '1'};
  }
  & > span {
    transition: opacity 600ms ease-out;
    transition-delay: 300ms;
    opacity: ${({ hover }) => hover ? '1' : '0'};
  }
  ${({ hover }) => hover && css`
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      &:after {
        content: '';
        position: absolute;
        width: 2px;
        height: 100%;
        background-color: #FF5471;
        right: 0;
      }
    }
  `}
`;
