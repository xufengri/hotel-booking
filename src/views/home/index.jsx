import SectionRoom from '@/components/section-rooms'
import SelectionHeader from '@/components/selection-header'
import { fetchHomeDataAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './styles'

const home = memo(() => {
  //从redux中获取数据
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  // 派发异步的事件: 发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('xxx'))
  }, [dispatch])
  
  return (
    <HomeWrapper>
      <HomeBanner>
      </HomeBanner>
      <div className='content'>
        <div className='good-price'>
          <SelectionHeader title={goodPriceInfo.title}></SelectionHeader>
          <SectionRoom roomList={goodPriceInfo.list}></SectionRoom> 
        </div>
      </div>
    </HomeWrapper>
  )
})

export default home