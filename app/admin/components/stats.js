import React from 'react'
import Button from '../../shared/components/button'

class Stats extends React.Component {

  render() {

    const { cutOff } = this.props

    return (
      <div>
        <Button label='Cut off' onClick={cutOff}/>
      </div>
    )
    
  }
  
}

export default Stats