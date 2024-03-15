import React from 'react'
import './contact.css'
import Header from '../../components/header/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

const Contact = () => {
  return (
    <>
      <Header title={"Get In Touch"} image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, assumenda.
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="#" target='_blank' rel={"noreferrer noopener"}><MdEmail/></a>
            <a href="#" target='_blank' rel={"noreferrer noopener"}><BsMessenger/></a>
            <a href="#" target='_blank' rel={"noreferrer noopener"}><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
