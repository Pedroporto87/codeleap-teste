import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import FirstPage from './pages/firstPage'
import MainPage from './pages/mainPage'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <FirstPage />,
      },
      {
        path:"/posts",
        element: <MainPage />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
