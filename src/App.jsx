
import { useEffect, useState } from 'react'
import './App.css'
import Hand from './components/Hand'

function App() {
  const paper = 'paper'
  const rock = 'rock'
  const scissors = 'scissors'

  const [secondHand, setSecondHand] = useState(false);
  const [points, setPoints] = useState(0);
  const [playerHand, setPlayerHand] = useState('');
  const [computerHand, setComputerHand] = useState('');
  const [resultText, setResultText] = useState('');
 
  useEffect(() => {
    if (playerHand !== '') {
      handleComputerHand();
    }
    setSecondHand(true);
    
  }, [playerHand]);

  const handleHand = (e) => {
    const bgclass = e.currentTarget
    if(bgclass.classList.contains('paper')){
      setPlayerHand(paper);
    } else if(bgclass.classList.contains('rock')){
      setPlayerHand(rock);
    } else {
      setPlayerHand(scissors);
    }
  }

  const handleComputerHand = () => {
    const hands = ['paper', 'rock', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(hands[randomNumber]);
    setComputerHand(hands[randomNumber]);
    determineResult(hands[randomNumber])
  };

  const determineResult = (computerChoice) => {
    if (playerHand === computerChoice) {
      setResultText('It\'s a draw!');
    } else if (
      (playerHand === 'rock' && computerChoice === 'scissors') ||
      (playerHand === 'paper' && computerChoice === 'rock') ||
      (playerHand === 'scissors' && computerChoice === 'paper')
    ) {
      setResultText('You win!');
      setPoints(points + 1);
    } else {
      setResultText('You lose!');
      if(points > 0) {
        setPoints(points - 1);
      } else {
        setPoints(0)
      }
      
    }
  };

  const resetGame = () => {
    setPlayerHand('');
    setComputerHand('');
    setSecondHand(false);
    setResultText('');
  };

  // const handlePoints = () => {
  //    if()
  // }

  console.log(playerHand)
  return (
    <>
      <div className='flex justify-center gap-4 m-auto border-2 rounded-xl border-gray-400 w-[40%] p-4 flex-wrap'>
          <div className='text-white font-bold pl-2 text-start text-xl uppercase'>
            <h1>Rock</h1>
            <h1>Paper</h1>
            <h1>Scissors</h1>
          </div>  
          <div className='bg-white px-8 rounded-lg flex flex-col justify-center'>
             <p className='font-bold'>Score</p>
             <span className='text-3xl font-bold'>{points}</span>
          </div>
          
      </div>
      
      <div>
      {playerHand === '' ? (
          
          <div className='mt-36 flex justify-around items-center flex-wrap gap-4'>
            <Hand onClick={handleHand} playHand={paper} hand={paper} background={`bg-${paper}`}/>
            <Hand onClick={handleHand} playHand={rock} hand={rock} background={`bg-${rock}`}/>
            <Hand onClick={handleHand} playHand={scissors} hand={scissors} background={`bg-${scissors}`}/>

        </div>) : (
          <div className='mt-32 flex justify-around items-center flex-wrap gap-4'>
            <div className=''>
              <h1 className='pb-10 text-3xl text-white font-bold'>You Picked</h1>
              <Hand playHand={playerHand} hand={playerHand} background={`bg-${playerHand}`}/>
            </div>
            { playerHand !== '' && computerHand !== '' ? (
               <div>
               {resultText && (
                 <h1 className='text-white font-bold text-4xl mb-6'>{resultText}</h1>
               )}
               <button onClick={resetGame} className='bg-white px-6 py-4'>Play Again</button>
             </div>
            ) : null }
            <div className='flex flex-col items-center' >
                <h1 className='pb-10 text-3xl text-white font-bold'>The House Picked</h1>
                {
                  secondHand && 
                  <Hand playHand={computerHand} hand={computerHand} background={`bg-${computerHand}`}/>
                }
             </div>
          </div>

        ) }
      </div>
      {/* <button className='text-white py-4  px-8 text-2xl rounded-lg font-bold mt-10 border-2 border-white' >Rules</button> */}
    </>
  )
}

export default App
