import React from 'react'
import '../SlotBox.css'
import axios from 'axios'

const SlotBox = ({slot,onSlotHover,onSlotClick}) => {

  


  return (
    <div className={`slotContainer${slot.background ? 'Background' : ''}`} onClick={()=>onSlotClick(slot.id)}>
        <p >{slot.day}</p>
        <p className='date'>{slot.date}</p>
        <p>{slot.month}</p>
    </div>
  )
}

export default SlotBox