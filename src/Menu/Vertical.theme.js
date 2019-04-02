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
