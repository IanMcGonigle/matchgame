import React from 'react';

const Score = props => {
  const {current, total, timeRemaining} = props;
  return(
    <React.Fragment>
      <h3>{`${current} of ${total}`}</h3>
      <h4>{timeRemaining}</h4>
    </React.Fragment>
  )
}

export default Score;
