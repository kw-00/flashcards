import type { Question } from "@/logic/service"
import { Card, Heading, VStack, type StackProps } from "@chakra-ui/react"


type QuestionProps = {
    question: Question | null
    showAnswer: boolean,
} & StackProps


export default function Question({question, showAnswer, ...rest}: QuestionProps) {
    return (
        <VStack {...rest}>
            <Card.Root h="2/6">
                <Card.Header>
                    <Heading>
                        Question
                    </Heading>
                </Card.Header>
                <Card.Body>
                    <Card.Description>
                        {question ? question.q : "No question selected."} 
                    </Card.Description>
                </Card.Body>
            </Card.Root>
            <Card.Root h="4/6">
                <Card.Header>
                    <Heading>
                        Answer
                    </Heading>
                </Card.Header>
                <Card.Body>
                    <Card.Description>
                        {question ? (showAnswer ? question.a : "Click to show answer.") : ""}
                    </Card.Description>
                </Card.Body>
            </Card.Root>
        </VStack>
    )
}