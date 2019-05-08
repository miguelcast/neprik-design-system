// @flow
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import moment from 'moment'
import Staff from './Staff'

type StaffProps = {
  id: number | string,
  name: string,
  avatar: string
};

type BusinessProps = {|
  from: string,
  to: string
|}

type Props = {
  businessHours: BusinessProps,
  staff: Array<StaffProps>
};

const hourSize = 160

function Schedule({ staff, businessHours }: Props) {
  const [ indexHover, setIndexHover ] = useState(null)

  console.log('businessHours', businessHours)
  const bhFrom = moment(businessHours.from, 'HH:mm')
  const bhTo = moment(businessHours.to, 'HH:mm')

  return (
    <Wrapper>
      <Staff staff={staff} indexHover={indexHover} onHover={setIndexHover} />
      <WrapperCalendar>
        <Header>
          <HourHeader>8am</HourHeader>
          <HourHeader>9am</HourHeader>
          <HourHeader>10am</HourHeader>
          <HourHeader>11am</HourHeader>
          <HourHeader>12pm</HourHeader>
          <HourHeader>1pm</HourHeader>
          <HourHeader>2pm</HourHeader>
          <HourHeader>3pm</HourHeader>
          <HourHeader>4pm</HourHeader>
          <HourHeader>5pm</HourHeader>
          <HourHeader>6pm</HourHeader>
          <HourHeader>7pm</HourHeader>
          <HourHeader>8pm</HourHeader>
          <HourHeader>9pm</HourHeader>
          <HourHeader>10pm</HourHeader>
        </Header>
        <Content>
          {staff && staff.map((person, idx) => (
            <ScheduleItem onMouseOver={() => setIndexHover(idx)} onMouseOut={() => setIndexHover(null)} hover={indexHover === idx}>
              {person.dates && person.dates.map(date => (
                <Date duration={date.duration} position={date.position}>
                  <div>{date.customer}</div>
                  <div>6:30pm</div>
                </Date>
              ))}
            </ScheduleItem>
          ))}
        </Content>
      </WrapperCalendar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1 100%;
  overflow-x: scroll;
`

const WrapperCalendar = styled.div`
  position: relative;
  margin-left: 5px;
  padding: 0 15px;
  width: calc(100% - 250px);
  overflow-x: scroll;
`

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  height: 45px;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 0 10px;
  box-shadow: 0 0 2px rgba(200, 200, 200, 0.1), 0 0 10px rgba(100, 100, 100, 0.1);
  background-color: #ffffff;
  color: #2c384b;
`

const HourHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${hourSize}px;
  min-width: ${hourSize}px;
  height: 100%;
  color: #566275;
  
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 60%;
    background-color: #D1D1D1;
    right: 0;
  }
  
  &:last-child:after {
    background-color: transparent;
  }
`

const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 5px;
  width: max-content;
  padding: 0 10px;
  box-shadow: 0 0 2px rgba(200, 200, 200, 0.1), 0 0 10px rgba(100, 100, 100, 0.1);
  background-color: #ffffff;
`

const ScheduleItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${hourSize * 15}px;
  height: 65px;
  border-bottom: 1px #D1D1D1 dashed;
  transition: opacity 0.15s ease-in-out;
  ${({ hover }) => hover && css`
    background-color: #eaeffe;
  `}
  &:last-child {
    border-bottom: none;
  }
`

const Date = styled.div`
  position: absolute;
  left: ${props => props.position * hourSize}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${props => props.duration * hourSize}px;
  height: 45px;
  border-radius: 5px;
  color: #ffffff;
  box-shadow: 0 0 2px rgba(200, 200, 200, 0.1), 0 0 10px rgba(100, 100, 100, 0.1);
  padding: 0 15px;
  background-color: #788B9C;
  
  &, & > * {
    font-weight: 300;
  }
  
  & > div:first-child {
    font-size: 14px;
  }
  
  & > div:last-child {
    font-size: 10px;
  }
`

Schedule.displayName = 'Schedule'

export default Schedule
