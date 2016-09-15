/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'
import { Field, reduxForm, change } from 'redux-form'
import { StyleSheet, css } from 'aphrodite/no-important'

import { ReactSelectWrapper, ToggleWrapper, InputWrapper } from './wrappers'
import { button as Button } from '../../shared/components'
import { fields } from '../constants'

class FilterBuilder extends React.Component {

  getSelectedValuePicker(selectedFilter) {

    const { dispatch, pickedValue } = this.props

    if (fields[selectedFilter] instanceof Boolean)
      return <Field name='pickedValue' component={ToggleWrapper} callback={(value) => dispatch(change('filterBuilder', 'pickedValue', value))} active={pickedValue} label={selectedFilter} />
    else
      return <Field name='pickedValue' component={InputWrapper} type='text' value={pickedValue || ''} onChange={(e) => dispatch(change('filterBuilder', 'pickedValue', e.target.value))} placeholder='Type here...' />

  }

  render() {

    const { styles } = FilterBuilder
    const { filterableOptions, dispatch, selectedFilter, pickedValue, onFilterApplied } = this.props
    const renderSelectedFilterValuePicker = selectedFilter ? <div className={ css(styles.formComponentMargin, styles.formComponentMaxWidth) }>{this.getSelectedValuePicker(selectedFilter)}</div> : null
    const renderApplyButton = selectedFilter ? <Button label='Apply' theme='primary' onClick={() => selectedFilter && onFilterApplied(selectedFilter, pickedValue)} /> : null

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