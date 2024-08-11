import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage.jsx'
import Dashboard from './routes/dashboard/Dashboard.jsx'
import Chatpage from './routes/chatpage/Chatpage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx'
import SignInpage from './routes/signInPage/SignInpage.jsx'
import SignUpPage from './routes/signUpPage/SignUpPage.jsx'




const router=createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[
      {
        path:"/",element:<Homepage/>
      },
      {
        path:"/signin/*",element:<SignInpage/>
      },
      {
        path:"/signout/*",element:<SignUpPage/>
      },
      {
        element:<DashboardLayout/>,
        children:[
          {
            path:"/dashboard",
            element:<Dashboard/>
          },
          {
            path:"/dashboard/chat/:id",
            element:<Chatpage/>
          }
        ]
      }

    ]

  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
