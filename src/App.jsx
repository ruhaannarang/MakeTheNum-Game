import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/homepage'
import Play from './components/play'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const  router=createBrowserRouter([
    {path:"/",
      element:<><Homepage/></>
    },
    {
      path:"/play",
      element:<><Play/></>
    }
  ])
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
