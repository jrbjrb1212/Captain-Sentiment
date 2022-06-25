import React from 'react'
import Header_nav from './Header_Nav'

const Header = () => {
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

