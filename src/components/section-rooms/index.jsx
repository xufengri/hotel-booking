import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionRoomWrapper } from './style'
import RoomItem from '../room-item'
const index = memo(function index(props) {
    const { roomList = [] } = props
    return (
    <SectionRoomWrapper>
        <ul className='room-list'>
            {
                roomList?.map(item => {
                return <RoomItem key={item.id} itemData={item}></RoomItem>
                })
            }
        </ul>
    </SectionRoomWrapper>
  )
})

index.propTypes = {
    roomList:PropTypes.array
}

export default index
