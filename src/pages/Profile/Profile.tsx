import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useGetDataQuery } from 'store/api/studentApi'
import StudentProfile from './StudentProfile/StudentProfile'
import TeacherProfile from './TeacherProfile/Profile'

const Profile = () => {
  const { data, error } = useGetDataQuery()

  return (
    <>
      {/* {data?.type === 'student' ? (
        <StudentProfile />
      ) : data?.type === 'teacher' ? (
        <TeacherProfile />
      ) : (
        <Alert variant="outlined" severity="error">
          Произошла ошибка
        </Alert>
      )} */}
      {/* <StudentProfile /> */}
      <TeacherProfile />
    </>
  )
}
export default Profile
