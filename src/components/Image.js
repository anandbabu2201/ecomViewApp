import React from 'react';

const Image=({name,image,uiAttributes})=>{
    return (
      <img className={`eachImage ${uiAttributes?uiAttributes:''}`} alt={name} src={image} />
      );
}

export default Image;
