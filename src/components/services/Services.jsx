import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create design prototypes using tools such as figma, axure.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Based on a human-centred design philosophy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Participate in teamwork or lead a team.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML + CSS + javascript based web development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Development using react.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web development with bootstrap</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Determining the content of the web pages.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User research and user data analysis.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Brainstorming.</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services