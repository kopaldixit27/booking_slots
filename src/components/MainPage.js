import React, { useState,useEffect } from 'react'
import '../mainPage.css'
import {BsArrowLeft} from 'react-icons/bs'
import SlotBox from './SlotBox'
import SlotTimings from './SlotTimings'
import axios from 'axios'

const MainPage = ({slots,onSlotHover}) => {
  //const [timings, setTimings] =useState([])
  const [slotClicked,setSlotClicked]=useState({});
  const [slotTimimgs,setSlotTimings]=useState([])
  const [slotOne,setSlotOne]=useState({})
  const [slotTwo,setSlotTwo]=useState({})


  const onSlotClick=async (id)=>{
    slots.map((slot)=>{
      if(slot.id===id)
      {
        setSlotClicked(slot)
      }
    })
    console.log(slotClicked)
    const response= await fetch('https://cors-anywhere.herokuapp.com/https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json')
    const data= await response.json()
    console.log(data)
    data.map((timing)=>{
      const dates=new Date(timing.date);
      const thatDate=dates.getUTCDate();
      if(thatDate === slotClicked.date)
      {
        setSlotTimings(timing.available)
        console.log(slotTimimgs)
        setSlotOne(slotTimimgs[0])
        setSlotTwo(slotTimimgs[1])
        console.log(slotOne)
      }
    })
  }
  
  // useEffect(()=>{
  //   axios.get('https://cors-anywhere.herokuapp.com/https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json')
  //   .then(res=>{
  //     setTimings(res.data)
  //     console.log(timings)
      
  //   })
  //   .catch(err=>console.log(err.response.data))
  // },[])


  // const onSlotClick=(id)=>{
    
    
    
  // }
  
  
  return (
    <div className='mainContainer'>
      <div className='greyLine'></div>
        <div className='bookingContainer'>
          
           <div className='backIcon'>
               <BsArrowLeft />
            </div> 
            <h1>Book Demo Session Slot</h1>
            <div className='blocks'>
              <div className='red'></div>
              <div className='blue'></div>
            </div>
            <h3 className='selectDate'>Select Date</h3>
            <div className='slots'>
                {slots.map((slot)=>{
                        return <SlotBox key={slot.id} slot={slot} onSlotClick={onSlotClick}/>
                    }
                )}
            </div>
            <div className='slotTimings'>
                <h3 className='selectSlot'>Select Slot</h3>
                <SlotTimings slotTimimgs={slotTimimgs} slotOne={slotOne} slotTwo={slotTwo}/>
            </div>
            <div className='paymentBtn'>
                  <button>Proceed to pay</button>
            </div>
        </div>
    </div>
  )
}

export default MainPage