import { createContext, useReducer } from "react";
import questions from "../data/questions"

const STAGES = ["Start", "Playing", "End"]

const initialStage = {
    gameStage: STAGES[0],
    questions,
}

const quizReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_STATE":
            return {
                gameStage: STAGES[1]
            }
        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialStage)

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}