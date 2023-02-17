import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SearchTabs = memo((props) => {
  const { titles, tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index) {
    setCurrentIndex(index)
    if (tabClick) tabClick(index)
  }
  return (
    <TabsWrapper>
      {
        titles.map((item, index) => {
          return (
            <div
              className={classNames("item", { active: currentIndex === index })}
              key={index}
              onClick={e => itemClickHandle(index)}
            >
              <span className="text">{item}</span>
              <span className="bottom"></span>
            </div>
          )
        })

      }
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {
  titles: PropTypes.array
}

export default SearchTabs
