import React from 'react'
import BannerOne from '../Components/Banners/BannerOne'
import Footer from '../Components/Footer/Footer'
import Contact from '../Features/Contact/Contact'
import Folio from '../Features/Folio/Folio'
import MainServices from '../Features/MainServices/MainServices'
import Services from '../Features/Services/Services'
import Social from '../Features/Social/Social'
import Sponsor from '../Features/Sponsors/Sponsor'

function HomePage() {
  return (
    <>
      <BannerOne />
      <MainServices />
      <Services />
      <Folio />
      <Sponsor />
      <Contact />
      <Social />
      <Footer />
    </>
  )
}

export default HomePage