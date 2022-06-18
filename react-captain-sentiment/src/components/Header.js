import React from 'react'
import Header_nav from './Header_Nav'

const Header = () => {
    // <h1>Captain Sentiment</h1>
    //         <ul>
    //             <li><a href="" > About </a></li> {/* Short page about how this project came to be */}
    //             <li><a href=""> Data Interpretation </a></li> {/* Create an data interpretation page later */}
    //             <li><a href=""> Technologies Used </a></li> {/* Create page with the technologies used later Somewhat like a readme */}
    //             <li><a href=""> Github </a></li> {/* Fill with public Github Link later */}     
    //         </ul>
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <a href="/" className="header-logo">Captain Sentiment</a>
                </section>
            <section className="header-top__navbar">
        <section className="header-top__navigation">
            <Header_nav />
        </section>
        <hr className="header-top__seperator" />
        </section>
    </section>
    </section>
    )
}

export default Header

