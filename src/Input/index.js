// @flow
import React, { PureComponent } from 'react'
import styled, { keyframes } from 'styled-components'

import Icon from '../Icon'

type Props = {
  label?: string,
  defaultValue?: string,
  placeholder?: string,
  icon?: string,
  error?: string,
  onChange?: (e: any) => void,
  ref: any
};

type State = {
  value: string
}

class Input extends PureComponent<Props, State> {
  state = {
    value: ''
  }

  handlerChange = e => {
    this.setState({ value: e.target.value })
    this.props.onChange(e)
  }

  render() {
    const { defaultValue, placeholder, label, icon, error, ref, ...rest } = this.props
    const { value } = this.state
    return (
      <Wrapper color={error ? '#FF5471' : '#566275'}>
        {icon && (
          <WrapperIcon>
            <Icon type={icon} size={32} />
          </WrapperIcon>
        )}
        <WrapperLabelInput>
          {(label || error) && (
            <WrapperLabel
              justifyContent={!(label && value) && error ? 'flex-end' : 'space-between'}
            >
              {label && value && <label>{label}</label>}
              {error && <span>{error}</span>}
            </WrapperLabel>
          )}
          <input
            {...rest}
            ref={ref}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            onChange={this.handlerChange}
          />
        </WrapperLabelInput>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  transition: border-bottom-width 0.3s ease-in-out;
  border-bottom: 1px solid ${({ color }) => color};
  
  &:focus-within {
    border-bottom-color: #2C384B;
  }
  
  &:focus-within label {
    font-weight: bold;
  }
`

const WrapperIcon = styled.div`
  color: #566275;
  padding-right: 0.5rem;
`

const WrapperLabelInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 2px;
    
  & > input {
    width: 100%;
    border: none;
    background-color: transparent;
    color: #2C384B;
    font-size: 1.3rem;
    font-weight: 300;
  }
  
  & > input:focus {
    outline: none;
  }
  
  & > input::placeholder {
    color: #566275;
  }
`

const SHOWING = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const WrapperLabel = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  
  & > label {
    display: inline-block;
    color: #2C384B;
    font-size: 0.7rem;
    animation: ${SHOWING} 0.3s ease-in-out;
  }
  
  & > span {
    order: 2;
    display: inline-block;
    color: #FF5471;
    font-size: 0.7rem;
    animation: ${SHOWING} 0.3s ease-in-out;
  }
`

const InputForward = React.forwardRef((props: Props, ref: any) => <Input {...props} ref={ref} />)
InputForward.displayName = 'Input'
export default InputForward
