import { useQuizContext } from "@/contexts/QuizContext";
import { VStack, type StackProps } from "@chakra-ui/react";
import QuizListElement from "./QuizListElement";
import QuizUpload from "./QuizUpload";



export default function QuizList(props: StackProps) {

    const {quizNames, loadQuizFromDB, uploadQuiz} = useQuizContext()

    return (
        <VStack {...props}>
            <VStack>
                {quizNames.map((name, n) => {
                    return <QuizListElement key={n} quizName={name} onClick={() => loadQuizFromDB(name)}/>
                })}
            </VStack>
            <QuizUpload onFileAccept={(details) => uploadQuiz(details.files[0])}/>
        </VStack>
    )

}