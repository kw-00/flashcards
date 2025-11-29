
import { useQuizContext } from "@/contexts/QuizContext";
import { Button, VStack, type StackProps } from "@chakra-ui/react";
import { useState, type MouseEvent } from "react";
import Question from "./Question";


export default function Quiz(props: StackProps) {

  const {question, nextQuestion} = useQuizContext()
  const [showAnswer, setShowAnswer] = useState(false)

  // Switches to next question and hides answer
  const nextQuestionHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowAnswer(false)
    nextQuestion()
  }

    return (
      <VStack {...props}>
        <Question question={question} showAnswer={showAnswer} onClick={() => setShowAnswer(!showAnswer)} alignItems="stretch" flexGrow={1}/>
        <VStack>
          <Button onClick={nextQuestionHandler}>Next question</Button>
        </VStack>
      </VStack>
    )
}