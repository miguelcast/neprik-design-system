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
  ref: any
};

type State = {
  value: string
}

class Input extends PureComponent<Props, State> {
  state = {
    value: ''
  }

  render() {
    const { defaultValue, placeholder, label, icon, error, ref } = this.props
    const { value } = this.state
    return (
      <Wrapper error={!!error}>
        {icon && (
          <WrapperIcon>
            <Icon type={icon} size={32} />
          </WrapperIcon>
        )}
        <WrapperLabelInput>
          {(label || error) && (
            <WrapperLabel onlyError={!(label && value) && error}>
              {label && value && <Label>{label}</Label>}
              {error && <Error>{error}</Error>}
            </WrapperLabel>
          )}
          <InputStyled
            ref={ref}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            onChange={e => this.setState({ value: e.target.value })}
          />
        </WrapperLabelInput>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.error ? '#FF5471' : '#566275'};
  
  height: 45px;
  transition: border-bottom-width 0.3s ease-in-out;
  
  &:focus-within {
    border-bottom-width: 2px;
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
`

const WrapperLabel = styled.div`
  display: flex;
  justify-content: ${props => props.onlyError ? 'flex-end' : 'space-between'};
`

const showing = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Label = styled.label`
  display: inline-block;
  color: #2C384B;
  font-size: 0.7rem;
  animation: ${showing} 0.3s ease-in-out;
`

const Error = styled.span`
  order: 2;
  display: inline-block;
  color: #FF5471;
  font-size: 0.7rem;
  animation: ${showing} 0.3s ease-in-out;
`

const InputStyled = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  color: #2C384B;
  font-size: 1.3rem;
  font-weight: 300;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #566275;
  }
`

export default React.forwardRef((props: Props, ref: any) => <Input {...props} ref={ref} />)
