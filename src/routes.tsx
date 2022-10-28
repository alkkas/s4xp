import LoginPage from 'pages/auth/Login/LoginPage'
import RegisterPage from 'pages/auth/Register/RegisterPage'
import Main from 'pages/Main/Main'
import MainContent from 'pages/Main/MainContent'
import NotFound from 'pages/NotFound/NotFound'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <MainContent /> },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
])
export default router
