import React from 'react';
import "./SponsorCard.css"

function SponsorCard({sponsor = {}}) {
    const {photo = "images/sponsor_1.jpg"} = sponsor;
  return (
    <div className='item w-100'>
        <img src={`${photo}`} alt="" className='w-50' />
    </div>
  )
}

export default SponsorCard