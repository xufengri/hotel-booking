import { fetchHomeDataAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { HomeWrapper } from './styles'

const home = memo(() => {
  //从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
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
        { Object.keys(discountInfo).length && <HomeSectionV2 infoData={discountInfo} />}
        <HomeSectionV1 infoData={ goodPriceInfo } />
        <HomeSectionV1 infoData={ highScoreInfo } />
      </div>
    </HomeWrapper>
  )
})

export default home