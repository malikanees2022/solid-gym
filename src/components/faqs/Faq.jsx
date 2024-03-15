import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

const Faq = ({question,answer}) => {
    const [open,setOpen]=useState(false)
    
  return (
    <article className='faq' onClick={()=>setOpen(prev=>!prev)}>
        <div>
            <h4>{question}</h4>
        <button className="faq_icon" >{open ? <AiOutlineMinus/>: <AiOutlinePlus/>}</button>
        </div>
    {open && <p>{answer}</p>}
      
    </article>
  )
}

export default Faq
