import RoomItem from '@/components/room-item'
import SectionHeader from '@/components/section-header'
import { fetchHomeDataAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Rating from '@mui/material/Rating';

import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo } =  useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)
  /** 派发异步的事件:  发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxx"))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <ul className='room-list'>
            {
              goodPriceInfo.list?.slice(0, 8)?.map(item => {
                return <RoomItem itemData={ item } key={ item.id } />
              })
            }
          </ul>
        </div>
      </div>

      <Rating name="read-only" value={5} readOnly />
    </HomeWrapper>
  )
})

export default Home
