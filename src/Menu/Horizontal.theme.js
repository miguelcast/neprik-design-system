import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7), 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: #2c384b;
  color: white;
`

export const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > img:first-child {
    padding-right: 8px;
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const WrapperItem = styled.div`
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
