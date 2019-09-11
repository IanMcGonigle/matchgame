import React from 'react';
import { useSpring, animated as a } from 'react-spring';
import Photo from './Photo';


const Card = (props)  => {
  const { flipped, image, onClick, index } = props;
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div className="card" onClick={() => onClick(index)} >
      <a.div className="card__back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
        <Photo path="crossline-dots.png" />
      </a.div>
      <a.div className="card__face" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
        <Photo path={image} />
      </a.div>
    </div>
  )
}

export default Card;