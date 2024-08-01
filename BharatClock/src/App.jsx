import React from 'react'
import AppHeading from './component/AppHeading'
import ClockTiming from './component/ClockTiming'
 import "./component/App.css"
const App = () => {
  return (
    <div>
      <div className="Clock-container">
      <AppHeading/>
      <ClockTiming/></div>
    </div>
  )
}

export default App
