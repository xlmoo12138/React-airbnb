import React, { memo, useState, useRef, useEffect } from 'react'

import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  /** 定义内部状态 */
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  /**使用 ref 记录偏移距离*/
  const totalDistanceRef = useRef()

  /** 组件渲染完毕，判断是否显示右侧的按钮 */
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [])

  /** 事件处理的逻辑 */
  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex] // 下一次要移动到的元素
    // console.log(newEl, newEl.offsetLeft);
    const newOffsetLeft = newEl.offsetLeft  // 下一次元素要移动的宽度
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    /** 是否继续显示左边、右边按钮 */
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }
  return (
    <ViewWrapper>
      {showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView
