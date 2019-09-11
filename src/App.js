import React,{ useState, useEffect } from 'react';
import shuffle from 'lodash.shuffle';
import data from './data'

import Score from './components/Score';
import GameGrid from './components/GameGrid';
import Banner from './components/Banner';
import './App.css';

const CARD_COUNT = 5;
const TIME_TOTAL = 20;

function App() {
  const images = shuffle(data.images).slice(0, CARD_COUNT);
  const [matches, setMatches] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(TIME_TOTAL);
  const [doubleCards, setDoubleCards] = useState(shuffle([...images, ...images, ...images, ...images]));

  useEffect( ()=> {
    let interval = null;
    if(isActive){
      interval = setInterval(() => {
        setTime(time => time -1);
      }, 1000);

      if(time <= 0){
        alert("TIME OUT!");
        resetGame();
      }
    }else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [isActive, time])

  useEffect( ()=> {
    console.log("CHECK FOR WIN");
    if( matches === doubleCards.length/2){
      setTimeout( ()=> {
        alert("Winner! Winner Chicken Dinner!");
      }, 500);
    };
  }, [doubleCards.length, matches]);

  const resetGame = () => {
    const newImages = shuffle(data.images).slice(0, CARD_COUNT);
    setDoubleCards(shuffle([...newImages, ...newImages, ...newImages, ...newImages]));
    setMatches(0);
    setIsActive(false);
    setTime(TIME_TOTAL)
  }

  return (
    <div className="App">
      <Score current={matches} total={doubleCards.length/2} timeRemaining={time}/>
      <div className="game">
        <GameGrid cards={doubleCards} onMatch={ () => setMatches(matches +1) } />
        { !isActive ? <div className="game__blocker"></div> : null}
      </div>
      <button onClick={resetGame}>Reset</button>
      <button onClick={() => setIsActive( !isActive )}>{ isActive ? "STOP" : "START"}</button>
      <Banner onClick={() => setIsActive( !isActive )} headline="Matching Game!" subHead="Click to play!"/>
    </div>
  );
}

export default App;
