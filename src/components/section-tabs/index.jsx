import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { TabWrapper } from './style'
import classNames from 'classnames'

const SectionTab = memo(function SectionTab(props) {
  const { tabNames = [], tabClick } = props
  
  const [ currentIndex, setCurrentIndex ] = useState(0)
  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClick(index, item)
  }
  return (
    <TabWrapper>
      {
        tabNames.map((item,index) => {
          return (
            <div 
              className={classNames("item", { active: index === currentIndex })}
              onClick={e => itemClickHandle(index, item)}
              key={index}
            >
              {item}</div>
          )
        })
      }
    </TabWrapper>
  )
})

SectionTab.propTypes = {
    tabNames: PropTypes.array
}

export default SectionTab
