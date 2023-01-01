import React, { memo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'


import SectionRoom from '@/components/section-rooms'
import SectionTab from '@/components/section-tabs'
import SelectionHeader from '@/components/selection-header'
import { HomeSectionV2Wrapper } from './style'
const HomeSectionV2 = memo(function HomeSectionV2(props) {
  const { infoData } = props

  // 数据转换
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])
  return (
    <HomeSectionV2Wrapper>
        <SelectionHeader title={ infoData.title } subtitle={ infoData.subtitle }></SelectionHeader>
        <SectionTab tabNames={tabNames} tabClick={tabClickHandle}></SectionTab>
        <SectionRoom roomList={ infoData.dest_list?.[name] } itemWidth="33.33%"></SectionRoom>
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2
