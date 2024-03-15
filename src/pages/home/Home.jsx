import React from 'react'
import './home.css'
import MainHeader from '../../components/header/MainHeader'
import Programs from '../../components/programs/Programs'
import Values from '../../components/values/Values'
import Faqs from '../../components/faqs/Faqs'
import Testimonials from '../../components/testimonials/Testimonials'


const Home = () => {
  return (
    <div>
      <MainHeader/>
      <Programs/>
      <Values/>
      <Faqs/>
      <Testimonials/>
     
    </div>
  )
}

export default Home
