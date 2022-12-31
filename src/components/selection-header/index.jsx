import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SelectionHeaderWrapper } from './style'

const SelectionHeader = memo(function SelectionHeader(props) {
  const { title, subtitle } = props 

  return (
    <SelectionHeaderWrapper>
        <h2 className='title'>{title}</h2>
        { subtitle && <div className='subtitle'>{subtitle }</div>}
    </SelectionHeaderWrapper>
  )
})

SelectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default SelectionHeader
