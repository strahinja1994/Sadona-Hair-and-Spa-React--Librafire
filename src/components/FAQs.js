import React from 'react'

function FAQs() {
  return (
    <div id='faqs' className='faqs'>
        <div className='faqs__header'>
            <div className='faqs__header-flowerten'></div>
            <div className='faqs__header-leaftwelve'></div>
            <div className='faqs__header-images'>
                <div className='faqs__header-images--information'></div>
                <h4 className='faqs__header-images--title'>FAQs</h4>
            </div>
            <div className='faqs__header-info'>
                <h1 className='faqs__header-info--title'>how can we help you?</h1>
                <a className='faqs__header-info--link' href=''>Recently asked questions</a>
            </div>
        </div>

        <div className='faqs__main'>
            <div className='faqs__main-flowereleven'></div>
            <h2 className='faqs__main-title'>News</h2>
            <div className='faqs__main-cards'>

                <div className='faqs__main-cards--card'>
                    <img className='faqs__main-cards--card---image' src='../assets/images/cover6.png' alt='cover news' />
                    <div className='faqs__main-cards--card---icons'>
                        <div className='faqs__main-cards--card---icons----img'></div>
                        <h4 className='faqs__main-cards--card---icons----title'>News</h4>
                    </div>
                    <h2 className='faqs__main-cards--card---title'>A Message from<br /> Donna Brown</h2>
                    <div className='faqs__main-cards--card---timetable'>
                        <p className='faqs__main-cards--card---timetable----date'>08.09.2020.</p>
                        <p className='faqs__main-cards--card---timetable----time'>14:30h</p>
                        <div className='faqs__main-cards--card---timetable----pointer'></div>
                    </div>
                    <p className='faqs__main-cards--card---text'>Sadona Salon + Spa was inspired around Ayurvedic principles—the belief that health and wellness occur when there is true balance between the mind...</p>
                    <div className='faqs__main-cards---card---more'>
                        <p className='faqs__main-cards--card---more----text'>Read more</p>
                        <div className='faqs__main-cards--card---more----icon'></div>
                    </div>
                </div>

                <div className='faqs__main-cards--card'>
                    <img className='faqs__main-cards--card---image' src='../assets/images/cover7.png' alt='cover news' />
                    <div className='faqs__main-cards--card---icons'>
                        <div className='faqs__main-cards--card---icons----img'></div>
                        <h4 className='faqs__main-cards--card---icons----title'>News</h4>
                    </div>
                    <h2 className='faqs__main-cards--card---title'>Sadona Salon <br />COVID update</h2>
                    <div className='faqs__main-cards--card---timetable'>
                        <p className='faqs__main-cards--card---timetable----date'>08.09.2020.</p>
                        <p className='faqs__main-cards--card---timetable----time'>14:30h</p>
                        <div className='faqs__main-cards--card---timetable----pointer'></div>
                    </div>
                    <p className='faqs__main-cards--card---text'>We have all become increasingly aware of the severity and seriousness of COVID-19. Your satisfaction and safety are of utmost concern to us...</p>
                    <div className='faqs__main-cards---card---more'>
                        <p className='faqs__main-cards--card---more----text'>Read more</p>
                        <div className='faqs__main-cards--card---more----icon'></div>
                    </div>
                </div>

                <div className='faqs__main-cards--card'>
                    <img className='faqs__main-cards--card---image' src='../assets/images/cover8.png' alt='covers news' />
                    <div className='faqs__main-cards--card---icons'>
                        <div className='faqs__main-cards--card---icons----img'></div>
                        <h4 className='faqs__main-cards--card---icons----title'>News</h4>
                    </div>
                    <h2 className='faqs__main-cards--card---title'>Love Yourself.</h2>
                    <div className='faqs__main-cards--card---timetable'>
                        <p className='faqs__main-cards--card---timetable----date'>08.09.2020.</p>
                        <p className='faqs__main-cards--card---timetable----time'>14:30h</p>
                        <div className='faqs__main-cards--card---timetable----pointer'></div>
                    </div>
                    <p className='faqs__main-cards--card---text'>Sadona Salon + Spa was inspired around Ayurvedic principles—the belief that health and wellness occur when there is true balance between the mind...</p>
                    <div className='faqs__main-cards---card---more'>
                        <p className='faqs__main-cards--card---more----text'>Read more</p>
                        <div className='faqs__main-cards--card---more----icon'></div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default FAQs