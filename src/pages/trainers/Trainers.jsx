import React from 'react'
import './trainer.css'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import { FaFacebook,FaLinkedin } from 'react-icons/fa'
import { AiOutlineTwitter,AiFillInstagram } from 'react-icons/ai'
import Header from '../../components/header/Header'
import Trainer from './Trainer'


const Trainers = () => {
  return (
    <>
      <Header title={"Our Trainers"} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur eius natus nihil nam enim aspernatur nulla sequi, assumenda cupiditate.
      </Header>
      <section className="trainers">
        <div className="container trainers_container">
          {trainers.map(({id,image,name,job,socials})=>{
            return <Trainer key={id} image={image} name={name} job={job} socials={[
              {icon:<AiFillInstagram/>, link:socials[0]},
              {icon:<AiOutlineTwitter/>, link:socials[1]},
              {icon:<FaFacebook/>, link:socials[2]},
              {icon:<FaLinkedin/>, link:socials[3]},
            ]}/>

          })}
        </div>
      </section>
    </>
  )
}

export default Trainers
