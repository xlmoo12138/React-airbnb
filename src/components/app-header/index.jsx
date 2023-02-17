import classNames from 'classnames'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  /** 从redux中获取数据 */
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const { isFixed } = headerConfig

  return (
    <HeaderWrapper className={classNames({ Fixed: isFixed})}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>
        <div className="search-area"></div>
      </div>
      <div className="cover"></div>
    </HeaderWrapper>
  )
})

export default AppHeader
