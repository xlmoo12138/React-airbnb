import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  /** 从props中获取数据 */
  const { infoData } = props

  /** 定义内部的state*/
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)

  /** 数据转换 */
  const tabNames = infoData.dest_address?.map(item => item.name)

  /** 事件处理函数 */
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={ tabClickHandle } />
      <SectionRooms roomlist={infoData.dest_list?.[name]} itemWidth="33.33%" />
      <SectionFooter name={ name } />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2
