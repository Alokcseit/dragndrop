import React from 'react'
import "./DragDrop.css"
import PhotoDrag from './PhotoDrag'
import { useDrop } from 'react-dnd'
import { useState } from 'react'
function DragDrop() {
    const [picture,setPicture]=useState([
        {
            id:1,
            src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        }
        ,
        {
            id:2,
            src:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        },
        {
            id:3,
            src:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        }
    ])

const [dropItem, setDropItem] = useState([])
const[{isOver}, drop]=useDrop(()=>({
    accept:"image",
    drop:(item,collect)=>{
        addImageToDroplist(item.id)
    },
    collect:monitor=>({
        isOver: !!monitor.isOver()
    })
}))
 const addImageToDroplist= (id) =>{
    console.log(id)
    const droppedImage= picture.find((item)=>item.id===id)
    setDropItem((prev)=>[...prev,droppedImage])
    setPicture((prev) => prev.filter((item) => item.id !== id));
    
   
 }

  return (
    <>
    <div className='drag'>
     {picture.map((item)=>{
        return  <PhotoDrag key={item.id} id={item.id} src={item.src}/>
     })}
    </div>
    <div className='drop' ref={drop}>

    {
        dropItem.map((item)=>{
            return  <PhotoDrag key={item.id} id={item.id} src={item.src}/>
        })
    }
    </div>
    </>
  )
}

export default DragDrop
