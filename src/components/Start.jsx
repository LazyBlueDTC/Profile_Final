import React from "react";
import Prof from '../assets/profile.jpg';

const Start = () => {
    return (


        
        <div>
          <div className="intro_sect">
            <p>Luke Benedict P. Borras</p>
          </div>
          <div className="blank_Sect"/>
            <h1 className="universal_header">
              About Me</h1>
            <div className='main_am'>
              <img className='app_img' src= {Prof} alt='Me :)'/>
                <div className='abm_wrd'>
                <div className='background-shape'></div>
                <div className='background-shape-bottom'></div>
                  <p>Hallooo, I'm Luke, a independent freelancer with experience on network and system administration. With experience building up on my life as well as fun times on a dime, it would be a pleasure working with you in some time.</p>
                </div>
            </div>
        </div>
          
    );
}

export default Start;