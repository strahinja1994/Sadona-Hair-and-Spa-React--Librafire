import React from 'react'

function Banner() {

  const [activeSlide, setActiveSlide] = React.useState(1);

  const prevSlide = () => {
    setActiveSlide(activeSlide === 1 ? 4 : activeSlide - 1);
  };

  const nextSlide = () => {
    setActiveSlide(activeSlide === 4 ? 1 : activeSlide + 1);
  };

  const sliderItems = [
    { number: '01'},
    { number: '02'},
    { number: '03'},
    { number: '04'}
  ];

  const sliders = sliderItems.map((item, index) => {
    return(
      <div key={index} className={`banner__slider-${index + 1}`}>
        <div className={`banner__slider-${index + 1}--space  ${activeSlide === index + 1 ? 'active-slide' : ''}`}>
          <h2 className={`banner__slider-${index + 1}--number`}>{item.number}</h2>
        </div>
      </div>
    )
    
  })

  return (
    <div className='banner'>
      <h2 className='banner__salon'>A new type of salon.</h2>
      <h1 className='banner__experience'>A new type of<br />experience.</h1>
      <a className='banner__link' href='#footer'>Contact</a>
      <div className='banner__slider'>
        <div className='banner__slider-left' onClick={prevSlide}>
          <div className='banner__slider-left--icon'></div>
        </div>
        <div className='slider__container'>
          {sliders}
        </div>
        <div className='banner__slider-right' onClick={nextSlide}>
          <div className='banner__slider-right--icon'></div>
        </div>
      </div>
      <div className='banner__flowerone'></div>
      <div className='banner__flowertwo'></div>
      <div className='banner__flowerthree'></div>
      <div className='banner__leafone'></div>
      <div className='banner__leaftwo'></div>
      <div className='banner__leafthree'></div>
      <div className='banner__facebook'></div>
      <div className='banner__instagram'></div>
      <div className='banner__pointer'></div>
    </div>
  )
}

export default Banner