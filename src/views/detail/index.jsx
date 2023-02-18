import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DetailInfos from './c-cpns/detail-infos'
import DetailPicture from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false}))
  }, [dispatch])
  return (
    <DetailWrapper>
      <DetailPicture />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail
