
const DB_NAME = "flashcards"
const DB_VERSION = 3
const QUIZ_STORE_NAME = "quiz"

export type Quiz = {
    name: string
    questions: Question[]
}

export type Question = {
    q: string
    a: string
}

const onUpgradeNeeded = (e: IDBVersionChangeEvent) => {
    console.log("Upgrade")
    const db = (e.target as IDBOpenDBRequest).result
    if (!db.objectStoreNames.contains(QUIZ_STORE_NAME)) {
        db.createObjectStore(QUIZ_STORE_NAME, {keyPath: "name", autoIncrement: false})
    }
    console.log("Created store")
}


export async function loadQuizFromFile(file: File): Promise<Quiz> {
    const name = file.name
    const text = await file.text()

    const questions = text
        .split(/[\n\r]{3,}/)
        .map(question => question.split(/[,]{2}/))
        .map(qa => {
            return {q: qa[0], a: qa[1]}
        })
    return {
        name: name,
        questions: questions
    }
}

export function cacheQuiz(quiz: Quiz, callback: (errorMessage?: string) => void): void {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onerror = () => {
        callback("Cannot access IndexedDB. This makes uploading and accessing quizes impossible.")
    }

    request.onupgradeneeded = onUpgradeNeeded

    request.onsuccess = (e: Event) => {
        const db = (e.target as IDBOpenDBRequest).result

        const quizObjectStore = db.transaction(QUIZ_STORE_NAME, "readwrite").objectStore(QUIZ_STORE_NAME)
        quizObjectStore.add(quiz)
        callback()
    }
}


export function loadQuizNames(callback: (namesOrErrorMessage: string[] | string) => void): void {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onerror = () => {
        callback("Could not open IndexedDB.")
    }
    
    request.onupgradeneeded = onUpgradeNeeded

    request.onsuccess = (e: Event) => {
        const db = (e.target as IDBOpenDBRequest).result
        const transaction = db.transaction(QUIZ_STORE_NAME, "readwrite")
        
        const getAllKeysRequest = transaction.objectStore(QUIZ_STORE_NAME).getAllKeys()
        getAllKeysRequest.onerror = () => {
            callback("Retrieving objectStorage keys failed.")
        }
        getAllKeysRequest.onsuccess = () => {
            const quizNames = getAllKeysRequest.result
            callback(quizNames as string[])
        }

    }
}

export function loadQuiz(name: string, callback: (quizOrErrorMessage: Quiz | string) => void): void {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onerror = () => {
        callback("Could not open IndexedDB.")
    }

    request.onupgradeneeded = onUpgradeNeeded
    
    request.onsuccess = (e: Event) => {
        const db = (e.target as IDBOpenDBRequest).result

        const quizObjectStore = db.transaction(QUIZ_STORE_NAME, "readwrite").objectStore(QUIZ_STORE_NAME)
        const quizRequest = quizObjectStore.get(name)
        quizRequest.onerror = () => {
            callback(`Failed to access quiz named "${name}".`)
        }
        quizRequest.onsuccess = (e: Event) => {
            const quiz = (e.target as IDBRequest).result
            callback(quiz)
        }
    }
}

