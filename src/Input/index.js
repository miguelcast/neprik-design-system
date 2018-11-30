// @flow
import React, { PureComponent } from 'react'
import styles from './style.css';

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
      <div
        className={styles.wrapper}
        style={{ borderBottom: `1px solid ${!!error ? '#FF5471' : '#566275'}` }}
      >
        {icon && (
          <div className={styles.wrapperIcon}>
            <Icon type={icon} size={32} />
          </div>
        )}
        <div className={styles.wrapperLabelInput}>
          {(label || error) && (
            <div
              className={styles.wrapperLabel}
              style={{ justifyContent: !(label && value) && error ? 'flex-end' : 'space-between' }}
            >
              {label && value && <label>{label}</label>}
              {error && <span>{error}</span>}
            </div>
          )}
          <input
            {...rest}
            ref={ref}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            onChange={this.handlerChange}
          />
        </div>
      </div>
    )
  }
}

const InputForward = React.forwardRef((props: Props, ref: any) => <Input {...props} ref={ref} />)
InputForward.displayName = 'Input';
export default InputForward
