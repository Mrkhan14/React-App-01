import { createContext, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';
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
      case 'ON_TOGGLE_PROP':
         const {id, prop} = payload
         const toggleArr = state.data2.map(item =>{
            if (item.id === id){
               return{...item, [prop]: !item[prop]}
            }
            return item
         })
         return{...state, data2: toggleArr}
      case 'ADD_FORM':
         const {name, viewers} = payload
         const  addFormArr = { 
            name: name, 
            viewers: viewers,  
            id: uuidv4(),  
            favourite: false, 
            like: false
         }
         return{...state, data2: [...state.data2, addFormArr]}
      case 'ON_TERM':
         return {...state, term: payload}
      case 'ON_FILTER':
         return {...state, filter: payload}
      default:
         return{state};
   }
}

const Provider = ({children}) =>{
   const [state, dispatch] = useReducer(reducer, initiaValue)

   return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
}
export default Provider