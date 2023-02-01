import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomlist = [], itemWidth } = props
  return (
    <RoomsWrapper>
      {
        roomlist?.slice(0, 8)?.map(item => {
          return <RoomItem itemData={ item } itemWidth={itemWidth} key={ item.id } />
        })
      }
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomlist: PropTypes.array
}

export default SectionRooms
