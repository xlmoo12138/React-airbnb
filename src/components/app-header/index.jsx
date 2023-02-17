import classNames from 'classnames'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'

const AppHeader = memo(() => {
  /** 定义组件内部状态 */
  const [isSearch, setIsSearch] = useState(false)
  /** 从redux中获取数据 */
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const { isFixed } = headerConfig

  return (
    <HeaderWrapper className={classNames({ Fixed: isFixed})}>
      <div className="content">
        <div className="c-top">
          <HeaderLeft />
          <HeaderCenter isSearch={isSearch} searchBarClick={ e => setIsSearch(true) } />
          <HeaderRight />
        </div>
        <SearchAreaWrapper isSearch={isSearch} />
      </div>
      { isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div> }
    </HeaderWrapper>
  )
})

export default AppHeader
