/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'
import { Field, reduxForm, change } from 'redux-form'
import { StyleSheet, css } from 'aphrodite/no-important'

import { ReactSelectWrapper, ToggleWrapper, InputWrapper } from './wrappers'
import { button as Button } from '../../shared/components'
import { FIELDS } from '../constants'

class FilterBuilder extends React.Component {

  getSelectedValuePicker(selectedFilter) {

    const { dispatch, pickedValue, pickedStartValue, pickedEndValue } = this.props

    if (FIELDS[selectedFilter].type instanceof Boolean)
      return <Field name='pickedValue' component={ToggleWrapper} callback={(value) => dispatch(change('filterBuilder', 'pickedValue', value))} active={pickedValue} label={selectedFilter} />
    else if (FIELDS[selectedFilter].type instanceof Date)
      return (
        <div>
          Start: <Field name='pickedValueStart' component={InputWrapper} type='date' value={pickedStartValue} onChange={(e) => dispatch(change('filterBuilder', 'pickedStartValue', e.target.value))}/>
          End: <Field name='pickedValueEnd' component={InputWrapper} type='date' value={pickedEndValue} onChange={(e) => dispatch(change('filterBuilder', 'pickedEndValue', e.target.value))}/>
        </div>
      )
    else
      return <Field name='pickedValue' component={InputWrapper} type='text' value={pickedValue || ''} onChange={(e) => dispatch(change('filterBuilder', 'pickedValue', e.target.value))} placeholder='Type here...' />

  }

  render() {

    const { styles } = FilterBuilder
    const { filterableOptions, dispatch, selectedFilter, pickedValue, pickedStartValue, pickedEndValue, onFilterApplied } = this.props
    const renderSelectedFilterValuePicker = selectedFilter ? <div className={ css(styles.formComponentMargin, styles.formComponentMaxWidth) }>{this.getSelectedValuePicker(selectedFilter)}</div> : null
    const renderApplyButton = selectedFilter ? <Button label='Apply' theme='primary' onClick={() => selectedFilter && onFilterApplied(selectedFilter, pickedValue, pickedStartValue, pickedEndValue)} /> : null

    return (
      <div>

        <Field
          name='selectedFilter'
          component={ReactSelectWrapper}
          options={filterableOptions}
          componentValue={selectedFilter}
          onChange={(value) => dispatch(change('filterBuilder', 'selectedFilter', value))}
          placeholder='Choose a Filter'
          className={ css(styles.formComponentMargin, styles.formComponentMaxWidth) } />

        {renderSelectedFilterValuePicker}
        {renderApplyButton}

      </div>
    )

  }

}

FilterBuilder.styles = StyleSheet.create({
  formComponentMargin: {
    marginBottom: '20px'
  },
  formComponentMaxWidth: {
    maxWidth: '200px'
  }
})

export default reduxForm({
  form: 'filterBuilder'
})(FilterBuilder)