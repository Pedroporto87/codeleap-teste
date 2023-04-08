import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Home } from './pages/firstPage'
import { Posts } from './pages/mainPage'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/posts",
        element: <Posts />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
