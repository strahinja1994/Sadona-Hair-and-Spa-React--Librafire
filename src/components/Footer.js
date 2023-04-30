import React from 'react'

function Footer() {
  return (
    <footer id='footer' className='footer'>
        <div className='footer__flowertwelve'></div>
        <div className='footer__leafthirteen'></div>
        <div className='footer__leaffourteen'></div>
        <div className='footer__top'>
            <h1 className='footer__top-title'>Surprice your friends & family with our gift card!</h1>
            <a className='footer__top-link'>purchase gift cards here</a>
        </div>

        <div className='footer__logo'>
            <div className='footer__logo-img'></div>
        </div>

        <div className='footer__contact'>
            <h1 className='footer__contact-title'>We'd love to<br /> hear from you.</h1>
            <div className='footer__contact-infos'>
                <div className='footer__contact-info'>
                    <div className='footer__contact-info--image footer__contact-info--phone'></div>
                    <p className='footer__contact-info--text'>(410) 263-1515</p>
                </div>
                <div className='footer__contact-info'>
                    <div className='footer__contact-info--image footer__contact-info--message'></div>
                    <p className='footer__contact-info--text'>info@mysadona.com</p>
                </div>
                <div className='footer__contact-info'>
                    <div className='footer__contact-info--image footer__contact-info--place'></div>
                    <p className='footer__contact-info--text'>15 West Street <br /> Annapolis, MD 21401</p>
                </div>
            </div>
            <div className='footer__contact-time'>
                <div className='footer__contact-time--header'>
                    <div className='footer__contact-time--header---clock'></div>
                    <h5 className='footer__contact-time--header---title'>Hours of Operation</h5>
                </div>
                <ul className='footer__contact-time--timetable'>
                    <li>Monday - Tuesday: 11am - 7pm</li>
                    <li>Wednesday - Friday: 9am - 7pm</li>
                    <li>Saturday: 8am - 4pm</li>
                    <li>Sunday: 10am - 4pm</li>
                </ul>
            </div>

            <div className='footer__contact-social'>
                <h5 className='footer__contact-social--title'>Follow us</h5>
                <div className='footer__contact-social--network'>
                    <div className='footer__contact-social--facebook'></div>
                    <div className='footer__contact-social--instagram'></div>
                </div>
            </div>
        </div>

        <div className='footer__blank'></div>

        <div className='footer__links'>
            <div className='footer__links-menu'>
                <h4 className='footer__links-menu--title'>Menu</h4>
                <div className='footer__links-menu--container'>
                    <a className='footer__links-menu--container---link' href='/'>Home</a>
                    <a className='footer__links-menu--container---link' href='#stories'>Our Story</a>
                    <a className='footer__links-menu--container---link' href='#services'>Services</a>
                    <a className='footer__links-menu--container---link' href='#products'>Products</a>
                    <a className='footer__links-menu--container---link' href='#faqs'>News</a>
                    <a className='footer__links-menu--container---link' href='#footer'>Contact</a>
                </div>
            </div>

            <div className='footer__links-services'>
                <h4 className='footer__links-services--title'>Services</h4>
                <div className='footer__links-services--container'>
                    <a className='footer__links-services--container---link' href='#salon'>Salon Services</a>
                    <a className='footer__links-services--container---link' href='#spa'>Spa Services</a>
                    <a className='footer__links-services--container---link' href='#bridal'>Bridal Services</a>
                </div>
            </div>
        </div>

        <div className='footer__bottom'>
            <h5 className='footer__bottom-text'>copyright 2016 herrmann advertising</h5>
            <div className='footer__bottom-space'></div>
            <h5 className='footer__bottom-text'>all rights reserved</h5>
        </div>
    </footer>
  )
}

export default Footer