import questions from "./questions";
import type { Question } from "./questions";
import { range, sample, without } from "lodash";

export function pickRandomQuestion(current?: number): number {
    if (questions.length === 0) throw new Error("There are no questions!")
    if (current === undefined) return sample(range(questions.length)) as any
    return sample(without(range(questions.length), current)) as any
}

export function getQuestion(index: number): Question {
    return questions[index]
}