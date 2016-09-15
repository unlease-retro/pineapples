/**
 * Created by BigaMasta on 9/14/16.
 */
import React from 'react'
import { Field, reduxForm, change } from 'redux-form'
import { colors } from 'styles/settings'
import { StyleSheet, css } from 'aphrodite/no-important'

import { ReactSelectWrapper, ToggleWrapper, InputWrapper } from './wrappers'
import { button as Button } from '../../shared/components'
import { fields } from '../constants'

class FilterBuilder extends React.Component {

  getSelectedValuePicker(selectedFilter) {

    const { dispatch, picker } = this.props

    if (fields[selectedFilter] instanceof Boolean)
      return <Field name='picker' component={ToggleWrapper} callback={(value) => dispatch(change('filterBuilder', 'picker', value))} active={picker} label={selectedFilter} />
    else
      return <Field name='picker' component={InputWrapper} type='text' value={picker || ''} onChange={(e) => dispatch(change('filterBuilder', 'picker', e.target.value))} placeholder='Type here...' />

  }

  render() {

    const { styles } = FilterBuilder
    const { filterableOptions, dispatch, selectedFilter, picker, onFilterApplied } = this.props
    const renderSelectedFilterValuePicker = selectedFilter ? <div className={ css(styles.formComponentMargin, styles.formComponentMaxWidth) }>{this.getSelectedValuePicker(selectedFilter)}</div> : null
    const renderApplyButton = selectedFilter ? <Button label='Apply' theme='primary' onClick={() => selectedFilter && onFilterApplied(selectedFilter, picker)} /> : null

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