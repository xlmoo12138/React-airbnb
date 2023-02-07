import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  // tabNames.push('abc')
  // tabNames.push('bca')
  // tabNames.push('cba')

  function itemClickHandle(index, item) {
    // console.log(index);
    setCurrentIndex(index)
    tabClick(index, item)
  }
  return (
    <TabsWrapper>
      <ScrollView>
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
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs
