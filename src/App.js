
import './App.css';
import SideBar from './components/SideBar';
import MainPage from '../src/components/MainPage'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [slots,setSlots]=useState(
    [
      {
        id:1,
        day:'Mon',
        date:22,
        month:'Feb',
        background:false
      },
      {
        id:2,
        day:'Tue',
        date:23,
        month:'Feb',
        background:false
      },
      {
        id:3,
        day:'Wed',
        date:24,
        month:'Feb',
        background:false
      },
      {
        id:4,
        day:'Thu',
        date:25,
        month:'Feb',
        background:false
      },
      {
        id:5,
        day:'Fri',
        date:'26',
        month:'Feb',
        background:false
      },
      {
        id:6,
        day:'Sat',
        date:27,
        month:'Feb',
        background:false
      },
      {
        id:7,
        day:'Sun',
        date:28,
        month:'Feb',
        background:false
      }
    ]
  )

  // const onSlotHover=(id)=>{
  //   setSlots(
  //     slots.map((slot)=>
  //       slot.id === id ? {...slot,background: !slot.background} : slot
  //     )
  //   )
  // }

  
  return (
    <Router>
    <div className="App">
     <SideBar />
     <div className='mainPageContainer'>
       <Routes>
         <Route path='/' element={<MainPage slots={slots}/>} />
       </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
