import React from 'react';

function Footer () {

return (
    <section className="footer">
    <hr className="footer-seperator" />
        <section className="footer-social-media">
            <a href="/" className="footer-logo">Captain Sentiment</a>
        </section>
    <section className="footer-info">
        <section className="footer-info-left">
            <section className="footer-info__name">
                <a href="/about" className="navbar-footer-item">Motivation</a>
            </section>      
        </section>

        <section className="footer-info-center">
            <section className="footer-info__email">
                <a href="/portfolio" className="navbar-footer-item">Interpretation</a>
            </section>
        </section>

        <section className="footer-info-right">
            <section className="footer-info__number">
            <a href="/contact" className="navbar-footer-item">GitHub</a>
            </section>
        </section>
    </section>
    <hr className="footer-seperator" />
    </section>
)

}

export default Footer;

