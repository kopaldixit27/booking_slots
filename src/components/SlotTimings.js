import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import '../slotTimings.css'

const SlotTimings = ({slotTimimgs,slotOne,slotTwo}) => {
  
  const [background1,setBackground1]= useState(false)
  const [background2,setBackground2]= useState(false)

  if(slotTimimgs === undefined || slotOne === undefined || slotTwo === undefined || Object.keys(slotTimimgs) === 0 || Object.keys (slotOne)=== 0 || Object.keys(slotTwo)=== 0)
  {
      return (
          <div>
              Loading...
          </div>
      )
  }
else
{
  return (
    <div className='slots'>
      <div className={`slot1${background1 ? 'bg' : ''}`} onClick={()=>setBackground1(true)}>
        <span>{slotOne.hour}:00</span>
        <span> - </span>
        <span>{slotOne.hour +1}:00</span>
      </div>
      <div className={`slot2${background2 ? 'bg' : ''}`} onClick={()=>setBackground2(true)}>
        <span>{slotTwo.hour}: 00</span>
        <span> - </span>
        <span>{slotTwo.hour +1}: 00</span>
      </div>
    </div>
  )
}
}

export default SlotTimings