import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'
import Footer from '../Footer';
function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> You can reach to me via social media's like twitter,linkedin etc. <br /> But I had given the link for linkedin in the below link. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://www.linkedin.com/in/aravind-p-32584a258/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BauDKqivfT4yPGZIkpin1QA%3D%3D");
          }}
        >Say Hello</button>
        <span></span>
        <hr className='line' />
        <Footer />
      </Container>
    </div>
  )
}

export default Contactpage