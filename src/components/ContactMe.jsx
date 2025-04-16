import React from 'react';
import FaceB from "../assets/fb_image.png"
import Gmail from "../assets/gmail_img.png"
import LinkedIn from "../assets/linkedin_img.png"


const ContactMe = () => {
    return (
        <section className='background_cn'>
            <div className="content_cnt">
                <h2>Let's Get in Touch</h2>
                    <a href='#'><img src={FaceB} alt='Facebook Logo' className='imgs'/></a>
                    <a href='#'><img src={Gmail} alt='Gmail Logo' className='imgs' /></a>
                    <a href='#'><img src={LinkedIn} alt='LinkedIn Logo' className='imgs'/></a>
                </div>
        </section>
    );
}


export default ContactMe;