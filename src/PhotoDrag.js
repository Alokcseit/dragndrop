import React from 'react'
import { useDrag } from 'react-dnd'
function PhotoDrag({id, src}) {
  const[{isDragging},drag]=useDrag(()=>{
    return {
      type:"image",
      item:{id,src},
      collect:monitor=>({
        isDragging: !!monitor.isDragging()
      })
    }
  })


  // const opacity = isDragging ? 0.4 : 1
  // drag.style.opacity = opacity

  return (
    <div>
      <img  ref={drag} src={src} width={"150px"} height={"150px"} alt='ph' style={{opacity: isDragging ? 0.4 : 1} }/>
    </div>
  )
}

export default PhotoDrag
