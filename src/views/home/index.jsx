import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import { fetchHomeDataAction } from '@/store/modules/home'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import { HomeWrapper } from './style'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo } =  useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
  }), shallowEqual)


  /**数据的转换 */
  const [name, setName] = useState("佛山")
  const tabNames = discountInfo.dest_address?.map(item => item.name)
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])
  /** 派发异步的事件:  发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxx"))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
          <SectionRooms roomlist={discountInfo.dest_list?.[name]} itemWidth="33.33%" />
        </div>
        <HomeSectionV1 infoData={ goodPriceInfo } />
        <HomeSectionV1 infoData={ highScoreInfo } />
      </div>
    </HomeWrapper>
  )
})

export default Home
