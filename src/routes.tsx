import GuardRoute from 'components/GuardRoute'
import LoginPage from 'pages/auth/Login/LoginPage'
import RegisterPage from 'pages/auth/Register/RegisterPage'
import Main from 'pages/Main/Main'
import MainContent from 'pages/Main/MainContent'
import NotFound from 'pages/NotFound/NotFound'
import Profile from 'pages/Profile/Profile'
import TestFeilds from 'pages/Profile/StudentProfile/ApplyTest'
import RouterOutlet from 'components/RouterOutlet'
import { createBrowserRouter } from 'react-router-dom'
import TeacherTests from 'pages/Profile/TeacherProfile/CourseEdit'
import EditTest from 'pages/Profile/TeacherProfile/EditTest'
import TestStatistics from 'pages/Profile/TeacherProfile/TestStatistics'
import TestPreview from 'pages/Profile/TestPreview'
import CreateCourse from 'pages/Profile/TeacherProfile/CreateCourseTest'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      { path: '', element: <MainContent /> },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'user',
        element: <GuardRoute component={<RouterOutlet />} />,
        children: [
          { path: '', element: <Profile /> },
          { path: 'tests/:id', element: <TestFeilds /> },
          { path: 'courses/:id/tests', element: <TeacherTests /> },
          { path: 'courses/:id/tests/:id/edit', element: <EditTest /> },
          {
            path: 'courses/:id/tests/:id/statistics',
            element: <TestStatistics />,
          },
          { path: 'courses/:id/tests/:id/preview', element: <TestPreview /> },
          {
            path: 'courses/createCourse',
            element: <CreateCourse type="course" />,
          },
          {
            path: 'courses/:id/tests/CreateTest',
            element: <CreateCourse type="test" />,
          },
        ],
      },
    ],
  },
])
export default router
