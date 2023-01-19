
import React from 'react';

import SocialLinks from '../SocialLinks/SocialLinks';
import FooterLinks from '../FooterLinks/FooterLinks';
import './footer.css';

const Footer = () => {
    return (
        <footer className="box">
            <div className="socialLinks">
                <SocialLinks />
            </div>
            <FooterLinks />
        </footer>
    );
};

export default Footer;
