import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  left: 0;
  width: 80px;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7), 0 5px 15px rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  background-color: #2c384b;
  color: white;
  transition: width 180ms ease-in-out;
  &:hover {
    width: 200px;
  }
`

export const Top = styled.div`
  width: 100%;
  text-align: center;
  
  & > img:first-child {
    margin-bottom: 5px;
  }
`

export const Bottom = styled.div`
  width: 100%;
  text-align: center;
`

export const WrapperItem = styled.div`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
  text-align: ${({ hover, haveText }) => hover && haveText ? 'left' : 'center'};
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
