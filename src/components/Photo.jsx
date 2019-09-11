import React from 'react';


const Photo = props => {
  const { path } = props;
  return(
    <div className="tile__wrapper tile__front">
      <img className="tile__image" src={`./images/${path}`} alt={path}/>
    </div>
  )
}
export default Photo;