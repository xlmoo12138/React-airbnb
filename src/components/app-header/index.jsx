import classNames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import useScrollPosition from '@/hooks/useScrollPosition'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  /** 定义组件内部状态 */
  const [isSearch, setIsSearch] = useState(false)
  /** 从redux中获取数据 */
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const { isFixed, topAlpha } = headerConfig

  /** 监听页面滚动 */
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  /** 在搜索条关闭时，不断记录其值 */
  if (!isSearch) prevY.current = scrollY
  /** 在搜索条展示时，滚动距离大于之前记录的距离的30时，关闭搜索条 */
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  /** 透明度的逻辑 */
  const isAlpha = topAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({ Fixed: isFixed})}>
        <div className="content">
          <div className="c-top">
            <HeaderLeft />
            <HeaderCenter isSearch={ isAlpha || isSearch} searchBarClick={ e => setIsSearch(true) } />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={ isAlpha || isSearch} />
        </div>
        { isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div> }
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
