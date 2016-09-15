/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'
import { Field, reduxForm, change } from 'redux-form'
import { ReactSelectWrapper, ToggleWrapper, InputWrapper } from './wrappers'
import { button as Button } from '../../shared/components'
import { fields } from '../constants'

class FilterBuilder extends React.Component {

  getSelectedValuePicker(selectedFilter) {

    const { dispatch, picker } = this.props

    if (fields[selectedFilter] instanceof Boolean)
      return <Field name='picker' component={ToggleWrapper} callback={(value) => dispatch(change('filterBuilder', 'picker', value))} active={picker} label={selectedFilter}/>
    else
      return <Field name='picker' component={InputWrapper} type='text' value={picker || ''} onChange={(e) => dispatch(change('filterBuilder', 'picker', e.target.value))}/>

  }

  render() {

    const { filterableOptions, dispatch, selectedFilter } = this.props
    const renderSelectedFilterValuePicker = selectedFilter ? this.getSelectedValuePicker(selectedFilter) : null

    return (
      <form onSubmit={() => console.log('handling submit')}>
        <div>
          <label htmlFor='firstName'>Select Filter</label>
          <Field name='selectedFilter' component={ReactSelectWrapper} options={filterableOptions} componentValue={selectedFilter} onChange={(value) => dispatch(change('filterBuilder', 'selectedFilter', value))}/>

        </div>
        {renderSelectedFilterValuePicker}
        <Button label='Apply' onClick={() => console.log('applied')}/>
      </form>
    )

  }

}

export default reduxForm({
  form: 'filterBuilder'
})(FilterBuilder)