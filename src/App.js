import Page from "./component/page";
import PostList from "./container/post-list";

function App() {
  return (
    <Page>
      <PostList />
    </Page>
  );
}

// import { useMemo,  useState, createContext, } from "react";

// export const THEME_TYPE = {
//   LIGHT: "light",
//   DARK: "dark"
// }

// export const ThemeContext = createContext(null)

// const THEME_ACTION_TYPE = {
//   TOGGLE: 'toggle'
// }

// const themeReducer = (state, action) => {
//   switch (action.type) {
//     case THEME_ACTION_TYPE.TOGGLE:
//       return state === THEME_TYPE.DARK ? THEME_TYPE.LIGHT : THEME_TYPE.DARK
//     default: return state
//   }
// }

// function App() {
//   const [currentTheme, dispatch] = useReducer(themeReducer, THEME_TYPE.LIGHT)

//   const theme = useMemo (() => ({
//     value: currentTheme,
//     toggle: () => dispatch({type: THEME_ACTION_TYPE.TOGGLE})
//   }), [currentTheme])

//   return (
//     <Page>
//       <ThemeContext.Provider value={theme}>
//         <PostList />
//       </ThemeContext.Provider>
//     </Page>
//   )
// }

// import { lazy, useEffect, useState, Suspense } from "react";

// const Child = lazy (() => import("./Child"))

// function App() {
//   const [value, setValue] = useState(0)

//   useEffect(() => {
//     const id = setInterval(() => setValue((prev) => prev + 1), 1000)
//     return () => clearInterval(id)
//   })
//     return (
//       <Page>
//         <div>State: {value}</div>
//         <div>
//           {value > 5 &&
//             <Suspense fallback={<div>Loading...</div>}>
//               <Child value={value}/>
//             </Suspense>
//           }
//         </div>
//       </Page>
//     )
// }

// import {useMemo, useCallback} from 'react'

// function Child ({state}) {
//   const data = useMemo(() => { return state * 10}, [state])
//   return (
//     <div>Child {data}</div>
//   )
// }

// function Child2 ({state}) {
//   const handleClick = useCallback(() => alert(state), [state])

//   useEffect(() => console.log('new handleClick'), [handleClick])
//   return <div onClick={handleClick}>Child2</div>
// }

// function App() {
//   const [state, setState] = useState(0)
//   const [state2, setState2] = useState(0)

//   useEffect(() => {
//     const id = setInterval(() => setState((prev) => prev + 1), 1000)
//     const id2 = setInterval(() => setState2((prev) => prev + 1), 5000)

//     return () => {
//       clearInterval(id)
//       clearInterval(id2)
//     }
//   }, [])

//   return (
//     <Page>
//       Hello World {state}
//       <Child state={state2}/>
//       <Child2 state={state2}/>
//     </Page>
//   )

// }

// import {useRef, useEffect} from 'react'

// function App() {
//   const scrollPositionRef = useRef(0)

//   const handleScroll = () => {
//     scrollPositionRef.current = window.scrollY
//   }
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   useEffect(() => {
//     console.log("scrollPositionRef", scrollPositionRef)
//   }, [scrollPositionRef.current])

//   return (
//     <Page>
//       <button onClick={handleScroll}>Click</button>
//       <p style={{height: 10000}}></p>
//     </Page>
//   )
// }

// import Grid from "./component/grid"
// import Box from "./component/box"

// function App() {
//   const prevValueRef = useRef(null)

//   const [value, setValue] = useState(0)

//   useEffect (() => {
//     prevValueRef.current = value

//   }, [value])

//   const handleIncrement = () => {
//     setValue(value + 1)
//   }

//   return (
//     <Page>
//       <Grid>
//         <Box>
//           <p>Value: {value}</p>
//           <p>PrevValueRef: {prevValueRef.current}</p>
//         </Box>
//         <Box>
//           <button onClick={handleIncrement}>Increment</button>
//         </Box>
//       </Grid>
//     </Page>
//   )
// }

// function App() {
//   const inputRef = useRef(null)
//   useEffect (() => {
//     if(inputRef && inputRef.current) inputRef.current.focus()
//   }, [])
//   return (
//     <Page>
//       <Grid>
//         <Box>
//           <input ref={inputRef} placeholder="Введіть пошту..."/>
//         </Box>
//         <Box>
//           <input placeholder="Введіть пароль..."/>
//         </Box>
//       </Grid>
//     </Page>
//   )
// }

// function App() {
//   const fistCatRef = useRef(null)
//   const secondCatRef = useRef(null)
//   const lastCatRef = useRef(null)

//   function handleScrollBy(ref) {
//     console.log(ref)
//     if(ref && ref.current) {
//       const offsetTop = ref.current.offsetTop
//       window.scrollBy({
//         top: offsetTop,
//         behavior: "smooth"
//       })
//     }
//   }

//   return (
//     <Page>
//       <Grid>
//         <button onClick={() => handleScrollBy(fistCatRef)}>Cat 1</button>
//         <button onClick={() => handleScrollBy(secondCatRef)}>Cat 2</button>
//         <button onClick={() => handleScrollBy(lastCatRef)}>Cat 3</button>
//       </Grid>
//       <div>
//         <ul style={{display: 'grid', gap: '500px', marginBottom: '500px'}}>
//           <li>
//             <img src="https://placecats.com/g/200/200" alt="Cat 1" ref={fistCatRef}/>
//           </li>
//           <li>
//             <img src="https://placecats.com/g/200/200" alt="Cat 2" ref={secondCatRef}/>
//           </li>
//           <li>
//             <img src="https://placecats.com/g/200/200" alt="Cat 3" ref={lastCatRef}/>
//           </li>
//         </ul>
//       </div>
//     </Page>
//   )
// }

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
