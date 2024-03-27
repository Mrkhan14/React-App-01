import { createContext, useReducer } from "react"

const initiaValue ={
   data2: [],
   term: '',
   filter: 'all'
}

export const  Context = createContext()

const reducer = (state = initiaValue, action )=>{
   const {type, payload} = action
   switch (type) {
      case 'GET_DATA':
         return {...state, data2: payload}
      case 'ON_DELETE':
         const deleteArr = state.data2.filter(c => c.id !== payload)
         return{...state, data2: deleteArr}
      default:
         return{state};
   }
}

const Provider = ({children}) =>{
   const [state, dispatch] = useReducer(reducer, initiaValue)

   return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
}
export default Provider