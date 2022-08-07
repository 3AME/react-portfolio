import React from 'react'
import CV from '../../assets/CV.pdf'
import Button from '@mui/material/Button';

const CTA = () => {
  return (
    <div className='cta'>
      <Button variant='contained' ><a href={CV} download>Download CV</a></Button>
        {/* <a href={CV} download className='btn'>Download CV</a> */}
        {/* <a href='#contact' className='btn btn-primary'>Let's talk</a> */}
        <Button variant='contained' > <a href='#contact' >Let's talk</a></Button>
    </div>
  )
}

export default CTA