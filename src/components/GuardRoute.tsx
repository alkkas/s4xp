import React from 'react'
import { getItem } from 'utils/localStorage'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const GuardRoute = ({ component }: { component: JSX.Element }) => {
  const navigate = useNavigate()
  const hasJWT = () => {
    return getItem('jwt') ? true : false
  }
  useEffect(() => {
    if (!hasJWT()) {
      console.log('asdf')
      navigate('/login')
    }
  }, [])

  return <>{hasJWT() ? component : null}</>
}
export default GuardRoute
