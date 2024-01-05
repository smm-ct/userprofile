import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { Router } from './router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
)
