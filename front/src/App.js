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