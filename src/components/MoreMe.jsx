import React from 'react'; 
import Exercise from '../../public/exercise.webp';
import VG_Play from '../assets/vg_pl.jpg';
import MC_Play from '../assets/music_pl.jpg';


const MoreMe = () => {
    
    return (
        <div className='mm_content'>
            <h1 className="universal_header">More on Me</h1>
            <h3>HOBBIES</h3>
            <div className='hobbs_cont'>
                <div className='hobbs_type'>
                    <img src={VG_Play} alt='Game PLaying' />
                    <p>Videogames</p>
                </div>
                <div className='hobbs_type'>
                    <img src={MC_Play} alt='Music listening' />
                    <p>Listening Music</p>
                </div>
                <div className='hobbs_type'>
                    <img src={Exercise} alt='Exercising' />
                    <p>Exercising</p>
                </div>
            </div>
            
            <h3>LIFE GOALS</h3>
            <div className="checkbox-container">
                <div className="content-group">
                    <div className="checkbox-item">
                        <input className="checkboxu" type="checkbox" id="bx1" name="bx1" />
                        <label htmlFor="bx1">Be financially stable</label>
                    </div>
                    <div className="checkbox-item">
                        <input className="checkboxu" type="checkbox" id="bx2" name="bx2" />
                        <label htmlFor="bx2">Reunion with friends in 10 years</label>
                    </div>
                    <div className="checkbox-item">
                        <input className="checkboxu" type="checkbox" id="bx3" name="bx3" />
                        <label htmlFor="bx3">Immigrate to Canada</label>
                    </div>
                    <div className="checkbox-item">
                        <input className="checkboxu" type="checkbox" id="bx4" name="bx4" />
                        <label htmlFor="bx4">Start a Family with 2 kids</label>
                    </div>
                </div>
                <div className="content-group">
                    <div className="checkbox-item">
                        <input className="checkboxu" type="checkbox" id="bx5" name="bx5" />
                        <label htmlFor="bx5">Become a Sponsor</label>
                    </div>
                    <div className="checkbox-item">
                        <input className="checkboxu" type="checkbox" id="bx6" name="bx6" />
                        <label htmlFor="bx6">Visit Japan</label>
                    </div>
                    <div className="checkbox-item">
                        <input className="checkboxu" type="checkbox" id="bx7" name="bx7" />
                        <label htmlFor="bx7">Get dream car</label>
                    </div>
                    <div className="checkbox-item">
                        <input className="checkboxu" type="checkbox" id="bx8" name="bx8" />
                        <label htmlFor="bx8">Be happy...</label>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MoreMe; 
