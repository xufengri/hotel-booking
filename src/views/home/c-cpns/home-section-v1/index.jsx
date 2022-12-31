import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { HomeSectionWrapper } from './styles'
import SelectionHeader from '@/components/selection-header'
import SectionRoom from "@/components/section-rooms"
const HomeSectionV1 = memo(function HomeSectionV1(props) {
  const { infoData } = props
  return (
    <HomeSectionWrapper>
        <SelectionHeader title={infoData.title} subtitle={infoData.subtitle}></SelectionHeader>
        <SectionRoom roomList={ infoData.list }></SectionRoom>
    </HomeSectionWrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1
