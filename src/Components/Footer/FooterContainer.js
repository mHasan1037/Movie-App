import React from 'react'
import './style.css'

const FooterContainer = () => {
  return (
    <div className='footer'>
      @ 
      { 
      new Date().getFullYear()
      }
      <span> Mahmudul Hasan</span>
    </div>
  )
}

export default FooterContainer