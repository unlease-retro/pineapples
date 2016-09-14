/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { ReactSelectWrapper } from './ReactSelectWrapper'

class FilterBuilder extends React.Component {

  render() {

    const { filterableOptions } = this.props
    const renderReactSelectWrapper = props => (<ReactSelectWrapper {...props}/>)

    return (
      <form onSubmit={() => console.log('handling submit')}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <Field name='field' component={renderReactSelectWrapper} options={filterableOptions}/>
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <Field name='lastName' component='input' type='text'/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <Field name='email' component='input' type='email'/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )

  }

}

export default reduxForm({
  form: 'filterBuilder'
})(FilterBuilder)