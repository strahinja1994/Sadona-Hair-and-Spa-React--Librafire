import React from 'react'

function Services() {
  return (
    <div id='services' className='services'>

        <div className='services__pointerone'></div>
        <h2 className='services__title'>Sadona Salon + Spa was inspired around Ayurvedic principles.</h2>
        <h4 className='services__text'>The belief that health and wellness occur when there is true balance between the mind, body and spirit.</h4>
        <a className='services__link' href='#stories'>Our Story</a>
        <div className='services__pointertwo'></div>

        <div id='salon' className='services__salon'>
          <div className='services__flowerfive'></div>
          <div className='services__leafsix'></div>
          <div className='services__leafseven'></div>
          <div className='services__salon-content'>
            <div className='services__salon-content--images'>
              <div className='services__salon-content--images---icon'></div>
              <h4 className='services__salon-content--images---title'>Services</h4>
            </div>
            <h2 className='services__salon-content--title'>Salon Services</h2>
            <p className='services__salon-content--text'>Our salon is a forward-thinking studio with experts that understand your individuality and specialize in your unique beauty.</p>
            <a className='services__salon-content--link' href='#services'>All services</a>
          </div>
          <img className='services__salon-center' src='../assets/images/cover1.png' alt='Our salon offer' />
          <div className='services__salon-side'>
            <img className='services__salon-side--img' src='../assets/images/cover1a.png' alt='salon side' />
            <div className='services__salon-side--more'>
              <div className='services__salon-side--more---icon'></div>
              <h5 className='services__salon-side--more---text'>Check out more</h5>
            </div>
          </div>
        </div>

        <div id='spa' className='services__spa'>
          <img className='services__spa-img' src='../assets/images/cover2.png' alt='spa services' />
            <div className='services__spa-img--flowersix'></div>
            <div className='services__spa-img--leafeight'></div>
          <div className='services__spa-content'>
            <div className='services__spa-content--images'>
              <div className='services__spa-content--images---icon'></div>
              <h4 className='services__spa-content--images---title'>Services</h4>
            </div>
            <h2 className='services__spa-content--title'>Spa Services</h2>
            <p className='services__spa-content--text'>Both an escape and an oasis, the luxurious spa experiences at Sadona will leave you feeling soothed, energized and refreshed.</p>
            <a className='services__spa-content--link' href='#services'>All services</a>
            <div className='services__spa-content--more'>
              <div className='services__spa-content--more---icon'></div>
              <h5 className='services__spa-content--more---text'>Check out more</h5>
            </div>
          </div>
        </div>

        <div id='bridal' className='services__bridal'>
          <div className='services__bridal-background'></div>
          <div className='services__bridal-content'>
            <div className='services__bridal-flowerseven'></div>
            <div className='services__bridal-leafnine'></div>
            <div className='services__bridal-content--images'>
              <div className='services__bridal-content--images---icon'></div>
              <h4 className='services__bridal-content--images---title'>Services</h4>
            </div>
            <h2 className='services__bridal-content--title'>Bridal Services</h2>
            <p className='services__bridal-content--text'>We offer full bridal salon & spa services as well as a little retreat to prepare and enjoy that memorable “get ready time” with family and friends on your most beautiful and special day!</p>
            <a className='services__bridal-content--link' href='#services'>All services</a>
            <div className='services__bridal-content--more'>
              <div className='services__bridal-content--more---icon'></div>
              <h5 className='services__bridal-content--more---text'>Check out more</h5>
            </div>
          </div>
        </div>

        <div className='services__salt'>
          <div className='services__salt-flowereight'></div>
            <div className='services__salt-leaften'></div>
            <div className='services__salt-info'>
                <div className='services__salt-info--images'>
                    <div className='services__salt-info--images---icon'></div>
                    <h4 className='services__salt-info--images---title'>Services</h4>
                </div>
                <h2 className='services__salt-info--title'>Salt</h2>
                <p className='services__salt-info--text'>Salt possesses wonderful healing and rejuvenation properties. Indulge in one of our salt treatments and experience strength and vitality from one of nature's most ancient forms of therapy.</p>
            </div>
            <img className='services__salt-image' src='../assets/images/cover4.png' alt='salt treatman' />
        </div>
    </div>
  )
}

export default Services