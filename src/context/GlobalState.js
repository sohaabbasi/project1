import React ,{ createContext,  useReducer} from 'react'
import AppReducer from './AppReducer'
//Initial  State
const initialState ={
    transactions: [
            { id: 1, description: 'Income 1', amount: -20 },
            { id: 2, description: 'Book', amount: 300 },
            { id: 3, description: 'Flower', amount: -10 },
            { id: 4, description: 'Watch', amount: 150 }
        ]

}

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
           const [state] = useReducer(AppReducer , initialState);

    return(<GlobalContext.Provider value={{
        
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)

}