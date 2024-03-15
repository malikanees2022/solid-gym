import React from 'react'
import './faqs.css'
import SectionHead from '../programs/SectionHead'
import { FaQuestion } from 'react-icons/fa'
import { faqs } from '../../data'
import Faq from './Faq'

const Faqs = () => {
  return (
    <section className='faqs'>
        <div className="container faqs_container">
            <SectionHead icon={<FaQuestion/>} title={"FAQs"}/>
            <div className="faqs_wrapper">
                {faqs.map(({id,question,answer})=>(
                    <Faq key={id} question={question} answer={answer}/>
                ))}
            </div>
        </div>
      
    </section>
  )
}

export default Faqs
