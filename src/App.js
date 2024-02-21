import React from 'react'

import CarouselScreen from './Screens/CarouselScreen'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CarouselScreen/>,
  },
])


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
