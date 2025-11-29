import { useState, type MouseEvent } from 'react'
import { getQuestion, pickRandomQuestion } from '@/logic/service'
import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { Provider } from '@/components/ui/provider'

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
    <Provider>
      <VStack>
        <HStack>
          <div></div>
          {/** Quiz container */}
          <VStack>
            {/** Question */}
            <VStack>
              <Heading>
                Question: 
              </Heading>
              <Text>
                {getQuestion(currentQuestionIndex).Q}
              </Text>
            </VStack>
            {/** Answer */}
            <VStack>
              <Heading>
                Answer:
              </Heading>
              <Text>
                {answer !== null ? answer : "..."}
              </Text>
            </VStack>
            {/** Buttons */}
            <HStack>
              <Button onClick={viewAnswer}>
                View answer
              </Button>
              <Button onClick={nextQuestion}>
                Next
              </Button>
            </HStack>
          </VStack>
          <div></div>
        </HStack>
      </VStack>
    </Provider>
  )
}

export default App
