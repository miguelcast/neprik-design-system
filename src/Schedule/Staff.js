// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import Avatar from '../Avatar'

type StaffProps = {
  id: number | string,
  name: string,
  avatar: string
};

type Props = {
  staff: Array<StaffProps>,
  onHover: () => mixed,
  indexHover: ?number
}

function Staff({ staff, onHover, indexHover }: Props) {
  return (
    <WrapperStaff>
      <Title>Staff</Title>
      {staff.map((person, idx) => {
        const splitName = person.name.split(' ')
        const lengthName = splitName.length
        const [first = '', second = '', third = '', fourth = ''] = splitName
        return (
          <WrapperItem hover={indexHover === idx} key={person.id} onMouseOver={() => onHover(idx)} onMouseOut={() => onHover(null)}>
            <WrapperName>
              <Name>{lengthName > 2 ? `${first} ${second}` : first}</Name>
              <LastName>{lengthName > 2 ? `${third} ${fourth}` : second}</LastName>
            </WrapperName>
            <Avatar icon='User' image={person.avatar} size={40} />
          </WrapperItem>
        )
      })}
    </WrapperStaff>
  )
}

const WrapperStaff = styled.div`
  width: 250px;
  min-width: 200px;
  position: relative;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 0 10px;
  box-shadow: 0 0 2px rgba(200, 200, 200, 0.1), 0 0 10px rgba(100, 100, 100, 0.1);
  background-color: #ffffff;
  color: #2c384b;
`

const WrapperItem = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 45px;
  border-radius: 5px;
  margin: 10px 0 20px 0;
  padding: 0 15px;
  color: #2c384b;
  font-size: 14px;
  font-weight: 100;
  background-image: linear-gradient(to right, #ffffff);
  z-index: 1;
  cursor: pointer;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 5px;
    background-image: linear-gradient(to right, #ff9657, #ff865a, #ff765f, #ff6567, #ff5471);
    z-index: -1;
    transition: opacity 0.15s ease-in-out;
    opacity: 0;
    cursor: pointer;
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover {
    & > div > span {
      color: #F6F5FA !important;
    }
  }
  ${({ hover }) => hover && css`
    &::before {
      opacity: 1;
    }
    & > div > span {
      color: #F6F5FA !important;
    }
  `}
`

const WrapperName = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 10px;
`

const Name = styled.span`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 300;
  color: #ff5471;
`

const LastName = styled.span`
  margin-left: 10px;
  font-size: 12px;
  font-weight: 300;
  color: #2c384b;
`

Staff.displayName = 'Staff'

export default Staff
