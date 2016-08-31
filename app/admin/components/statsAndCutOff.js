import React from 'react'
import Button from '../../shared/components/button'
import Stats from './stats'

class StatsAndCutOff extends React.Component {

  render() {

    const { stats } = this.props

    return (
      <div>
        <Stats stats={stats} />
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

export default StatsAndCutOff