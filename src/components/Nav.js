import React from 'react'

function Nav() {

    const [hoverActive, setHoverActive] = React.useState('#');

    const homeHover = () => {
        setHoverActive('#')
    }

    const  storiesHover = () => {
        setHoverActive('#stories')
    }

    const servicesHover = () => {
        setHoverActive('#services')
    }

    const productsHover = () => {
        setHoverActive('#products')
    }

    const newsHover = () => {
        setHoverActive('#news')
    }

    const contactHover = () => {
        setHoverActive('#footer')
    }

  return (
    <nav className='navbar'>
        <ul className='navbar__left'>
            <li>
                <a onMouseOver={homeHover} className={hoverActive === '#' ? 'navbar__left-link navbar__left-link-active' : 'navbar__left-link'} href='#'>Home</a>
            </li>
            <li>
                <a onMouseOver={servicesHover} onMouseLeave={homeHover} className={hoverActive === '#stories' ? 'left-link-active' : 'navbar__left-link'} href='#stories'>Our Stories</a>
            </li>
            <li className='relative-list-item'>
                <a onMouseOver={servicesHover} className='navbar__left-link navbar__left-sources' href='#services'>
                    Services <div className='navbar__left-link--icon'></div>
                </a>
                <ul className='navbar__left-sources--links'>
                    <li>
                        <a className='navbar__left-sources--links---link' href='#salon'>
                            Salon Services
                        </a>
                    </li>
                    <li>
                        <a className='navbar__left-sources--links---link' href='#spa'>
                            Our Story
                        </a>
                    </li>
                    <li>
                        <a className='navbar__left-sources--links---link' href='#bridal'>
                            Services
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <img className='navbar__logo' src='../assets/images/logo.png' alt='Logo' />
        <ul className='navbar__right'>
            <li>
                <a onMouseOver={productsHover} onMouseLeave={homeHover} className={hoverActive === '#' ? 'navbar__right-link navbar__right-link-active' : 'navbar__right-link'} href='#products'>Products</a>
            </li>
            <li>
                <a onMouseOver={newsHover} onMouseLeave={homeHover} className={hoverActive === '#' ? 'navbar__right-link navbar__right-link-active' : 'navbar__right-link'} href='#faqs'>News</a>
            </li>
            <li>
                <a onMouseOver={contactHover} onMouseLeave={homeHover} className={hoverActive === '#' ? 'navbar__right-link navbar__right-link-active' : 'navbar__right-link'} href='#footer'>Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav