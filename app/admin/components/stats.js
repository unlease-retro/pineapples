import React from 'react'
import Button from '../../shared/components/button'

class Stats extends React.Component {

  render() {

    return (
      <div>
        <Button label='Cut off' onClick={() => this._safeCutOff()}/>
      </div>
    )
    
  }

  _safeCutOff() {

    const { cutOff } = this.props

    if (confirm('Are you sure you want to generate new clusters?'))
      cutOff()

  }
  
}

export default Stats