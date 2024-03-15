import React from 'react'
import './gallery.css'
import Header from '../../components/header/Header'
import HeaderImage from '../../images/header_bg_3.jpg'

const Gallery = () => {
  const gallerylength= 18;
  const images = [];
  for (let i=1; i<=gallerylength; i++){
    images.push(require( `../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title={"Our Gallery"} image={HeaderImage}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolor ipsam, placeat blanditiis voluptate quam nulla incidunt atque iusto animi.
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {images.map((image,index)=>(
            <article key={index}>
              <img src={image} alt={`gallery image ${index +1}`} />
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Gallery
