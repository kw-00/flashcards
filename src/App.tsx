
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuizPage from './pages/QuizPage'
import { Provider } from './components/ui/provider'

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  )
}

export default App
