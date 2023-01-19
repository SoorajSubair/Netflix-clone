import React from 'react';

import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import TwitterIcon from './TwitterIcon';
import YoutubeIcon from './YoutubeIcon';

import './socialLinks.css';

const SocialLinks = () => {
    return (
        <div className="box">
            <a href="facebook.com" className="iconLink">
                <FacebookIcon />
            </a>
            <a href="instagram.com" className="iconLink">
                <InstagramIcon />
            </a>
            <a href="twitter.com" className="iconLink">
                <TwitterIcon />
            </a>
            <a href="youtube.com" className="iconLink">
                <YoutubeIcon />
            </a>
        </div>
    );
};

export default SocialLinks;