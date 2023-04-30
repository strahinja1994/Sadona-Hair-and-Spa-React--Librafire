import React from 'react'

function Products() {
  return (
    <div id='products' className='products'>
        <div className='products__flowernine'></div>
        <div className='products__leafeleven'></div>
        <div className='products__pointer'></div>
        <h2 className='products__title'>Sadona Salon + Spa was inspired around Ayurvedic principles.</h2>
        <h4 className='products__text'>The belief that health and wellness occur when there is true balance between the mind, body and spirit.</h4>
        <div className='products__pointer'></div>
        <div className='products__banner'>
          <div className='products__banner-content'>
            <div className='products__banner-content--images'>
              <div className='products__banner-content--images---icon'></div>
              <h4 className='products__banner-content--images---title'>Products</h4>
            </div>
            <h2 className='products__banner-title'>Cezanne</h2>
            <p className='products__banner-text'>Transform your frizzy, difficult, kinky, curly hair into soft, manageable, beautiful locks.</p>
            <div className='products__banner-more'>
              <p className='products__banner-more--text'>Full range of products available</p>
              <div className='products__banner-more--icon'></div>
            </div>
          </div>
          <img className='products__banner-image' src='../assets/images/cover5.png' alt='cezzane products' />
        </div>
    </div>
  )
}

export default Products