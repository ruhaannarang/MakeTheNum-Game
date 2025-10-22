import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/homepage'
import Play from './components/play'
import Win from './components/Win'
import { useSelector, useDispatch } from 'react-redux'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { increment,decrement,multiply,divide,reset} from './redux/counter/counterSlice'

function App() {
  const  router=createBrowserRouter([
    {path:"/",
      element:<><Homepage/></>
    },
    {
      path:"/play",
      element:<><Play/></>
    },
    {
      path:"/won",
      element:<><Win/></>
    }
  ])
  // const [count, setCount] = useState(0)
  const count=useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
