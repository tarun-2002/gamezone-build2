import React from 'react'
import "../Map/Map.css"
const Map = () => {
  return (
    <>
    <div className='gMap'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2193144502826!2d80.9351966754292!3d26.896533960785607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999577affa00ed5%3A0xb70cf57e4ce6b106!2sGamer&#39;s%20burnout!5e0!3m2!1sen!2sin!4v1686377320635!5m2!1sen!2sin" width="80%" height="400" style={{border:"2px",borderRadius:"40px",boxShadow: "0 0px 20px #FFD93D",display:"block",margin:"0 auto"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  )
}

export default Map
