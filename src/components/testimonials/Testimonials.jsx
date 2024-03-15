import React, { useState } from 'react'
import "./testimonials.css"
import SectionHead from '../programs/SectionHead'
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../../UI/Card'
import { testimonials } from '../../data'
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
const Testimonials = () => {
    const [index,setIndex]=useState(0)
    const {name, quote,job,avatar}=testimonials[index]
    const previousTestimonial=()=>{
        setIndex(prev=>prev-1)
        if(index >= 0){
            setIndex(testimonials.length-1)
        }
    }
    const nextTestimonial=()=>{
        setIndex(prev=>prev+1)
        if(index >= testimonials.length-1){
            setIndex(0)
        }
    }
  return (
    <section className='testimonials'>
        <div className="container testimonials_container">
            <SectionHead icon={<ImQuotesLeft/>} title={"Testimonials"} className={"testimonials_head"}/>
            <Card className={"testimonial"}>
            <div className="testimonials_avatar">
                <img src={avatar} alt={avatar} />
            </div>
            <p className="testimonials_quote">{`${quote}`}</p>
            <h5>{name}</h5>
            <small className='testimonials_title'>{job}</small>
            </Card>
            <div className="testimonials_btn-container">
                <button className="testimonials_btn" onClick={previousTestimonial}><IoIosArrowDropleftCircle/></button>
                <button className="testimonials_btn" onClick={nextTestimonial}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>

      
    </section>
  )
}

export default Testimonials
