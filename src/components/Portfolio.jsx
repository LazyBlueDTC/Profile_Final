import React from 'react'; 
import Sample from '../assets/Resume_Sample.pdf';


const Portfolio= () => {
    return (
        <div className='content_portf'> 
            <h1 className="universal_header">Portfolio</h1>
            <iframe src={Sample} alt ='Portfolio Sample'/ >
        </div>
    );
}


export default Portfolio; 
