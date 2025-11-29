import { useState, type MouseEvent } from 'react'
import { getQuestion, pickRandomQuestion } from './logic/service'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FlashCardPage from './pages/FlashCardPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FlashCardPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
