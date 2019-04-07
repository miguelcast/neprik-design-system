import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 10px;
  box-shadow: ${({theme}) => theme === 'dark'
  ? '0 4px 6px rgba(0, 0, 0, 0.7), 0 5px 15px rgba(0, 0, 0, 0.1)'
  : '0 2px 4px rgba(200, 200, 200, 0.1), 0 5px 15px rgba(100, 100, 100, 0.1)'};
  background-color: ${({theme}) => theme === 'dark' ? '#2c384b' : 'white'};
  color: ${({theme}) => theme === 'dark' ? 'white' : '#2c384b'};
`

export const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .logoMenu {
    padding: 0 15px 0 5px;
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const WrapperItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  cursor: pointer;
  text-align: left;
  padding-left: 8px;
  padding-right: 8px;
  & > i {
    padding-right: 8px;
    opacity: 0.6;
  }
  ${({ hover }) => hover && css`
    &:hover {
      background-color: ${({theme}) => theme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'none'};
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #FF5471;
        bottom: 0;
      }
    }
  `}
`;
