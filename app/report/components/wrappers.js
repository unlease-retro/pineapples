/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'
import Select from 'react-select'
import { toggle as Toggle, input as Input } from '../../shared/components'

export class ReactSelectWrapper extends React.Component {

  constructor(props) {

    super(props)

  }

  render() {

    return (
      <Select
        {...this.props}
        value={this.props.componentValue}
      />
    )

  }

}

export class ToggleWrapper extends React.Component {

  constructor(props) {

    super(props)

  }

  render() {

    return (
      <Toggle
        {...this.props}
      />
    )

  }

}

export class InputWrapper extends React.Component {

  constructor(props) {

    super(props)

  }

  render() {

    // cannot do {...props} because redux-form inserts some other props which cause error
    const { value, type, onChange } = this.props

    return (
      <Input
        value={value}
        type={type}
        onChange={onChange}
      />
    )

  }

}
