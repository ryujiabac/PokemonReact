import React, { useState } from 'react'
import { BiColor } from 'react-icons/bi';
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function LinkPoke() {
   
    const [like,setLike] = useState(false);
    const toggleLike = () =>{
           setLike((check) => !check);
    }
  
  
  return (
   <button onClick={toggleLike}>
      {like ? <FaHeart style={{color:"red"}}/> : <FaRegHeart/>}
   </button>
  )
}

export default LinkPoke