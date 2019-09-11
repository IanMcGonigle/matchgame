import React,{ useState, useEffect } from 'react';
import Card from './Card';


const GameGrid = props => {
  const {cards, onMatch} = props;
  const [activeCards, setActive] = useState([]);
  const [matched, setMatched] = useState([]);
  const [checking, setChecking] = useState(false);

  const onCardClicked = (index) => {
    if( checking ) return;
    if( !activeCards.includes(index) ){
      setActive([...activeCards, index])
    }
  }

  useEffect( ()=> {
    if( activeCards.length >= 2){
      const [index1, index2] = activeCards;
      const card1 = cards[index1];
      const card2 = cards[index2];

      setChecking(true)

      if( card1 === card2 && !matched.includes(index1) && !matched.includes(index2 )){
        setMatched( [...matched, index1, index2] );
        onMatch();
      }

      setTimeout(() => {
        setActive([]);
        setChecking(false);
      }, 1000);
    }
  }, [activeCards, cards, matched, onMatch]);

  useEffect(()=> {
    setMatched([]);
    setActive([]);
  }, [cards])

  return (
    <div className="tile-grid">
      {
        cards.map( (item, index) => {
          const isFlipped = Boolean(matched.includes(index) || activeCards.includes(index) );
          return <Card key={`${item}_${index}`} onClick={onCardClicked} image={item} index={index} flipped={ isFlipped ? 1 : 0 }/> })
      }
    </div>
  )

}

export default GameGrid;