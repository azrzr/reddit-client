import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ItemsOutlet from './components/ItemsOutlet/ItemsOutlet.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    Component: App,
    children: [
          {
            path: 'subreddit/:subredditId',
            Component: ItemsOutlet,
          }
        ],
      },
    ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)