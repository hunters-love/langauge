import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-main">
            <div>
                <p>There are four sections to the test: Listening, Reading, Writing and Speaking. When you book your IELTS test with the British Council, the test will take place in an official British Council IELTS test centre, whether you take the test on paper or on a computer.</p>
            </div>
            <div>
                <h4>This way you can use for contact:</h4>
                <br />
                <p>mobile:01950146795</p>
                <p>facebook:www.facebook.com/langauge</p>
                <p>email:langauge@gmail.com</p>
            </div>
            <div>
                <p>Our Higher Education activities are aimed at addressing the needs of this sector and establishing sustainable links with Higher Educational Institutions (HEIs) in the UK. Partnership is at the heart of designing these programmes and, as a mediator, we promote public, private and global initiatives.</p>
            </div>
        </div>
    );
};

export default Footer;