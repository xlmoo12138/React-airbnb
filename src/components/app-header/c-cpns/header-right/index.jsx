import IconAvatar from '@/assets/svg/icon-avatar'
import IconGlobal from '@/assets/svg/icon-global'
import IconMenu from '@/assets/svg/icon-menu'
import React, { memo, useState, useEffect } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  /** 定义组件内部状态 */
  const [showPanel, setShowPanel] = useState(false)

  /** 副作用代码 */
  useEffect(() => {
    function windowClickHandle() {
      setShowPanel(false)
    }
    window.addEventListener('click', windowClickHandle, true)

    return () => {
      window.removeEventListener('click', windowClickHandle, true)
    }
  }, [])
  /** 事件处理函数 */
  function profileClickHandle() {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn btn-register'>注册</span>
        <span className='btn btn-icon'>
          <IconGlobal/>
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />

        { showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">来爱彼迎发布房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        ) }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
