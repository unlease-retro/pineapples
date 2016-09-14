/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'
import Select from 'react-select'

export class ReactSelectWrapper extends React.Component {

  constructor(props) {

    super(props)

  }

  render() {

    return (
      <Select
        {...this.props}
      />
    )

  }

}
