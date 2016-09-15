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

    const { filterableOptions, dispatch, selectedFilter, picker, onFilterApplied } = this.props
    const renderSelectedFilterValuePicker = selectedFilter ? this.getSelectedValuePicker(selectedFilter) : null

    return (
      <div>
        <div>
          <Field
            name='selectedFilter'
            component={ReactSelectWrapper}
            options={filterableOptions}
            componentValue={selectedFilter}
            onChange={(value) => dispatch(change('filterBuilder', 'selectedFilter', value))}
            placeholder='Choose a Filter' />
        </div>
        {renderSelectedFilterValuePicker}
        <Button label='Apply' onClick={() => {

          if (selectedFilter)
            onFilterApplied(selectedFilter, picker)

        }}/>
      </div>
    )

  }

}

export default reduxForm({
  form: 'filterBuilder'
})(FilterBuilder)