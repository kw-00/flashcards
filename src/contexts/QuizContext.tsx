
import questions from "@/logic/questions";
import { cacheQuiz, loadQuiz, loadQuizFromFile, loadQuizNames, type Question, type Quiz } from "@/logic/service";
import { range, sample, without } from "lodash";
import React, { createContext, useContext, useEffect, useState } from "react";

    type QuizContextValue = {
        quizNames: string[]
        quiz: Quiz | null
        question: Question | null
        uploadQuiz: (file: File) => Promise<void>
        loadQuizFromDB: (name: string) => void
        nextQuestion: () => void
        setMaxQuestionsInMemory: React.Dispatch<React.SetStateAction<number>>
    }

const QuizContext = createContext<QuizContextValue | null>(null)

export function QuizProvider({children}: { children: React.ReactNode}) {
    const [quizNames, setQuizNames] = useState<string[]>([])
    const [quiz, setQuiz] = useState<Quiz | null>(null)
    const [question, setQuestion] = useState<Question | null>(null)
    const [questionMemory, setQuestionMemory] = useState<number[]>([])
    const [maxQuestionsInMemory, setMaxQuestionsInMemory] = useState(1)

    const loadAndSetQuizNames = () => {
        loadQuizNames((namesOrError) => {
                        if (!Array.isArray(namesOrError)) {
                alert(namesOrError)
                return
            }
            setQuizNames(namesOrError)
        })
    }

    // Loads quiz from DB
    const loadQuizFromDB = (name: string) => {
        loadQuiz(name, (quizOrErrorMessage) => {
            if (typeof quizOrErrorMessage === "string") {
                alert(quizOrErrorMessage)
            }
            setQuiz(quizOrErrorMessage as Quiz)
            localStorage.setItem("lastQuiz", name)
        })
    }

    // Uploads quiz from a file
    const uploadQuiz = async (file: File) => {
        const quiz = await loadQuizFromFile(file)
                cacheQuiz(quiz, () => loadAndSetQuizNames())
    }

    useEffect(() => {
        // Load all quiz names from DB
        loadAndSetQuizNames()

        // Set a default quiz to start with
        const lastQuiz = localStorage.getItem("lastQuiz")
        if (lastQuiz) {
            loadQuizFromDB(lastQuiz)
        } else {
            const quiz: Quiz = {name: "Node.js Quiz", questions: questions}
            setQuiz({name: "Node.js Quiz", questions: questions})
            cacheQuiz(quiz, e => {if (e) alert(e)})
        }
        nextQuestion()
    }, [])

    useEffect(() => {
        // Anytime the quiz changes, reset the question memory
        setQuestionMemory([])
        nextQuestion()
    }, [quiz])

    // Switches to another question
    const nextQuestion = () => {
        if (quiz === null) {
            return null
        }
        const questionsToChooseFrom = without(range(quiz.questions.length), ...questionMemory)
        const chosenIndex = sample(questionsToChooseFrom)!
        setQuestionMemory(questionMemory.concat([chosenIndex]))

                if (questionMemory.length > maxQuestionsInMemory) {
                        setQuestionMemory(questionMemory.filter((_, n) => n != 0))
        }
        setQuestion(quiz.questions[chosenIndex])
    }



    const value: QuizContextValue = {
        quizNames: quizNames,
        quiz: quiz,
        question: question,
        loadQuizFromDB: loadQuizFromDB,
        uploadQuiz: uploadQuiz,
        nextQuestion: nextQuestion,
        setMaxQuestionsInMemory: setMaxQuestionsInMemory
    }

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>

}

export function useQuizContext() {
    const context = useContext(QuizContext)
    if (context === null) {
        throw new Error("Function useQuizContext may only be called within a QuizProvider.")
    }
    return context
}