/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'
import { Field, reduxForm, change } from 'redux-form'
import { ReactSelectWrapper } from './ReactSelectWrapper'

class FilterBuilder extends React.Component {

  render() {

    const { filterableOptions, dispatch, selectedFilter } = this.props

    return (
      <form onSubmit={() => console.log('handling submit')}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <Field name='selectedFilter' component={ReactSelectWrapper} options={filterableOptions} componentValue={selectedFilter} onChange={(value) => dispatch(change('filterBuilder', 'selectedFilter', value))}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )

  }

}

export default reduxForm({
  form: 'filterBuilder'
})(FilterBuilder)