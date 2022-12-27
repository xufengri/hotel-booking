import React, { memo } from 'react'
import HeaderCenter from './cpns/cpn-center'
import HeaderLeft from './cpns/cpn-left'
import HeaderRight from './cpns/cpn-right'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
        <HeaderLeft></HeaderLeft>
        <HeaderCenter></HeaderCenter>
        <HeaderRight></HeaderRight>
    </HeaderWrapper>
  )
})
export default AppHeader
