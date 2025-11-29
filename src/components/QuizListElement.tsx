
import { Card, Text } from "@chakra-ui/react"




type QuizListElementProps = {
    quizName: string
} & Card.RootProps

export default function QuizListElement({quizName, ...rest}: QuizListElementProps) {

    return (
        <Card.Root {...rest}>
            <Card.Body>
                <Text>{quizName}...</Text>
            </Card.Body>
        </Card.Root>
    )
}