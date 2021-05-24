import React from 'react';


const Imagebox = ({passImage}) => {
    
    return (
        <div className="container">
           <div className="row mt-4">
                <div className="col-6 m-auto">
                <img
                     src={passImage}
                      alt=""
                      width='100%'
                      height='100%'
                      className="displayImg"
                   />
              </div>
            </div>
        </div>
    );

}


export default Imagebox;