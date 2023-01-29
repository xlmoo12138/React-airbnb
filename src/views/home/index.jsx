import { fetchHomeDataAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo } =  useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }))
  /** 派发异步的事件:  发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxx"))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <h2>{ goodPriceInfo.title }</h2>
      </div>
    </HomeWrapper>
  )
})

export default Home
