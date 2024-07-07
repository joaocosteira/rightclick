import React, { useRef } from 'react'
import Menu from './Menu'
import { useRightClick } from './useRightClick';

function Modal() {

  const containerRef = useRef(null);
  const { rightClick, menuPosition } = useRightClick(containerRef);
  return (
    <div ref={containerRef} className='w-[50vw] h-[50vh] bg-fuchsia-400 relative' onClick={rightClick}>
      <Menu position={menuPosition} />
    </div>
  )
}

export default Modal