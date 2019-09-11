import React from 'react';
import './Banner.scss';

const Banner = props => {
  const {headline, subHead, onClick} = props;
  return(
    <div className="Banner" onClick={onClick}>
      <div className="Banner__bg">
      </div>
      <div className="Banner__headline">
      {headline}
      {subHead && (
        <span className="Banner_subHead">{subHead}</span>)
      }
      </div>
    </div>
  )
}

export default Banner;