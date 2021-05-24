import React from 'react';
import Tilt from 'react-tilt'
import logo from '../logo/logo.png';



const Logo = () => {
    
    return (
          <div className=" m-2">
                <Tilt className="Tilt" options={{ max : 35 }} style={{ height:200, width: 50 }} >
                <div className="Tilt-inner">
                    <img src={logo} alt='logo' width="50px"/>
                </div>
            </Tilt>
          </div>
      
    );

}



export default Logo