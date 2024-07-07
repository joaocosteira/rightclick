import React from 'react'
function Menu({ position }) {

  return (
    <div
    className='absolute w-32 h-32 bg-blue-400'
    style={{ top: position.y, left: position.x }}
    ></div>
  )
}

export default Menu