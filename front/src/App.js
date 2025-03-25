import React from "react";
import Page from "./component/page"
import PostList from "./container/post-list"

function App() {
  return (
    <Page>
      <PostList/>
    </Page>
  )
}

// import Grid from "./component/grid"
// import Box from "./component/box"
// import { useReducer } from "react";

// const LIST_ACTION_TYPE = {
//   ADD: "add",
//   DELETE: "delete",
//   SELECT: "select",
//   REVERCE: "reverse"
// }

// function listReducer(state, action) {
//   switch (action.type) {
//     case LIST_ACTION_TYPE.ADD:
//       const id =  new Date().getTime()
//       const newItem = {value: action.payload, id}
//       return {...state, items: [...state.items, newItem]}
    
//     case LIST_ACTION_TYPE.DELETE:
//       const newItems = state.items.filter((item) => item.id !== action.payload)
//       return {...state, items: newItems}
    
//     case LIST_ACTION_TYPE.SELECT:
//       return {...state, selectedId: action.payload === state.selectedId ? null : action.payload}
      
//     case LIST_ACTION_TYPE.REVERCE:
//       return {...state, items: state.items.reverse()}

//     default: return {...state}
//   }
// }

// const initState = {items: []}

// function App() {
//   // за допомогою init  в useReducer можна передати початкові дані які будуть завжди додаватись
//   const init = (state) => {
//     if (state.items && state.items.length === 0) {
//       return {...state, items: [{id: 1233432, value: 'Start post'}]}
//     } else {
//       return state
//     }
//   }

//   console.log('render')
//   const [state, dispatch] = useReducer(listReducer, initState, init)

//   const handleAddItem = (e) => {
//     const { value } = e.target
//     if(!value) return
//     dispatch({type: LIST_ACTION_TYPE.ADD, payload: value})
//     e.target.value = ""
//   }

//   const handleRemoveItem = (id) => dispatch({type: LIST_ACTION_TYPE.DELETE, payload: id})

//   const handleSelectItem = (id) => dispatch({type: LIST_ACTION_TYPE.SELECT, payload: id})

//   const handleReverseItems = () => dispatch({type: LIST_ACTION_TYPE.REVERCE})

//   return (
//     <Page>
//       <Grid>
//         <Box>
//           <h1>Список елементів:</h1>
//           <ul>
//             <Grid>
//               {state.items.map(({value, id}) => (
//                 <li onClick={() => handleSelectItem(id)} key={id}>
//                   <Box style={{borderColor: state.selectedId === id ? 'green' : '#e6e6e6'}}>
//                     <span>{value}</span>
//                     <button onClick={(e) => {e.stopPropagation(); handleRemoveItem(id);}}>Видалити</button>
//                   </Box>
//                 </li>
//               ))}
//             </Grid>
//           </ul>
//         </Box>
//         <Box>
//           <input onBlur={handleAddItem} type="text" placeholder="Введіть новий елемент"/>
//         </Box>
//         <Box><button onClick={handleReverseItems}>Змінити порядок</button></Box>
//       </Grid>
//     </Page>
//   )
// }

// import { useEffect, useState } from "react";

// function App() {
//   const [location, setLocation] = useState(null)

//   useEffect(() => {
//     if("geolocation" in navigator){
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const {latitude, longitude} = position.coords;
//           setLocation({latitude, longitude})
//         }, 
//         (error) => {
//           console.error("Помилка отримання геолокації:", error.message)
//         }
//       )
//     } else {
//       console.error("Геолокація не підтримується в браузері.")
//     }
//   }, [])


//   return (
//     <Page>
//       {location ? (
//         <div>
//           <h1>Ваша геолокація</h1>
//           <p>Широта: {location.latitude}</p>
//           <p>Довгота: {location.longitude}</p>
//         </div>
//       ) : (
//         <p>Отримання геолокації...</p>
//       )}
//     </Page>
//   )
// }

export default App;