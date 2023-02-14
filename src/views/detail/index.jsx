import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)
  return (
    <div>{detailInfo.name}</div>
  )
})

export default Detail
