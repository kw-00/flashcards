import { useState, type MouseEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getQuestion, pickRandomQuestion } from './logic/service'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(pickRandomQuestion())
  const [answer, setAnswer] = useState<string | null>(null)

  const viewAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setAnswer(getQuestion(currentQuestionIndex).A)
  }

  const nextQuestion = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setAnswer(null)
    setCurrentQuestionIndex(pickRandomQuestion(currentQuestionIndex))
  }

  return (
    <>
      <div className="themed vcontainer">
        <div className='themed hcontainer'>
          <div></div>
          {/** Quiz container */}
          <div className="themed cardContainer">
            {/** Question */}
            <div className="themed card">
              <h2 className='themed'>
                Question: 
              </h2>
              <p className='themed'>
                {getQuestion(currentQuestionIndex).Q}
              </p>
            </div>
            {/** Answer */}
            <div className="themed card">
              <h2 className='themed'>
                Answer:
              </h2>
              <p className='themed'>
                {answer !== null ? answer : "..."}
              </p>
            </div>
            {/** Buttons */}
            <div>
              <button onClick={viewAnswer} className='themed card cardButton'>
                View answer
              </button>
              <button onClick={nextQuestion} className='themed card cardButton'>
                Next
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>



    </>
  )
}

export default App
