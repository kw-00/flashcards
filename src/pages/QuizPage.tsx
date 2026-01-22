import { HStack } from '@chakra-ui/react'
import { QuizProvider } from '@/contexts/QuizContext'
import Quiz from '@/components/Quiz'
import QuizList from '@/components/QuizList'

function App() {

    return (
    <QuizProvider>
        <HStack justifyContent="space-between" alignItems="stretch" flexGrow={1} m="5">
            <QuizList/>
            <Quiz alignItems="stretch" w="3xl" mx="20"/>
            <div></div>
        </HStack>
    </QuizProvider>
    )
}

export default App
