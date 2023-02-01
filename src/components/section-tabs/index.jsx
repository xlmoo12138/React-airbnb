import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)

  function itemClickHandle(index, item) {
    console.log(index);
    setCurrentIndex(index)
    tabClick(index, item)
  }
  return (
    <TabsWrapper>
      {
        tabNames.map((item, index) => {
          return (
            <div
              key={item}
              className={classNames("item", {active: index === currentIndex})}
              onClick={e => itemClickHandle(index, item)}
            >{item}</div>
          )
        })
      }
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs
