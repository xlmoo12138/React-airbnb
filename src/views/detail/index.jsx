import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import DetailInfos from './c-cpns/detail-infos'
import DetailPicture from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPicture />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail
