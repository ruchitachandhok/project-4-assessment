import './Circles.css'

import React from 'react'

const Circles = ({ selectedCircle }) => {
  return (
    <div className="Circles">
       <div className={selectedCircle  === 1 ? "selected" : ""}>1</div>
      <div className={selectedCircle  === 2 ? "selected" : ""}>2</div>
      <div className={selectedCircle  === 3 ? "selected" : ""}>3</div>
      <div className={selectedCircle  === 4 ? "selected" : ""}>4</div>
    </div>
  )
}

export default Circles