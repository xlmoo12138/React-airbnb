import React, { memo, useState } from 'react'

import SearchTitles from "@/assets/data/search_titles.json"
import SearchTabs from './c-cpns/search-tabs'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import { CenterWrapper } from './style'
import SearchSetions from './c-cpns/search-sections'

const HeaderCenter = memo(() => {
  const titles = SearchTitles.map(item => item.title)
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <CenterWrapper>
      {/* <div className="search-bar">
        <div className="text">
          搜索房源和体验
        </div>
        <div className="icon">
          <IconSearchBar/>
        </div>
      </div> */}

      <div className="search-detail">
        <SearchTabs titles={titles} tabClick={setTabIndex} />
        <div className="infos">
          <SearchSetions searchInfos={SearchTitles[tabIndex].searchInfos} />
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter
