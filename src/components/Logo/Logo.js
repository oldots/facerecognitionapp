import React from 'react';
import App from '../../App';
import Tilt from 'react-tilt'
import brain from './faceapp.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className = 'ma4 mt0' >
            <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 80, width: 100 }} >
                <div className="Tilt-inner">
                    <img style={{borderRadius: '5px'}}alt='faceapp logo'src={brain}/>    
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;
