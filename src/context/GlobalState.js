import React ,{ createContext,  useReducer} from 'react'
import AppReducer from './AppReducer'
//Initial  State
const initialState ={
    transaction: [
            { id: 1, description: 'Income', amount: -20 },
            { id: 2, description: 'Salary', amount: 300 },
            { id: 3, description: 'Book', amount: -10 },
            { id: 4, description: 'Camera', amount: 150 }
        ]

}

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
           const [state,dispatch] = useReducer(AppReducer , initialState);

    return(<GlobalContext.Provider value={{
        
        transaction: state.transaction
    }}>
        {children}
    </GlobalContext.Provider>)

}