import React from 'react'
import './about.css'
import Header from '../../components/header/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title={"About Us"} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet sequi enim hic tempora porro recusandae voluptatum nostrum explicabo ad.
      </Header>
      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Story Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolor vel, blanditiis necessitatibus ipsum veritatis rerum asperiores non corporis officia commodi pariatur explicabo. Necessitatibus iusto nisi, maxime fugiat saepe enim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea rem, natus incidunt nesciunt molestiae distinctio ad animi alias aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nobis qui, maxime placeat consequuntur aspernatur error consequatur eum recusandae culpa facere eveniet autem reiciendis, nulla iure cum tempora quod minima!</p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolor vel, blanditiis necessitatibus ipsum veritatis rerum asperiores non corporis officia commodi pariatur explicabo. Necessitatibus iusto nisi, maxime fugiat saepe enim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea rem, natus incidunt nesciunt molestiae distinctio ad animi alias aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nobis qui, maxime placeat consequuntur aspernatur error consequatur eum recusandae culpa facere eveniet autem reiciendis, nulla iure cum tempora quod minima!</p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Vision Image" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Mission Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolor vel, blanditiis necessitatibus ipsum veritatis rerum asperiores non corporis officia commodi pariatur explicabo. Necessitatibus iusto nisi, maxime fugiat saepe enim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea rem, natus incidunt nesciunt molestiae distinctio ad animi alias aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nobis qui, maxime placeat consequuntur aspernatur error consequatur eum recusandae culpa facere eveniet autem reiciendis, nulla iure cum tempora quod minima!</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
