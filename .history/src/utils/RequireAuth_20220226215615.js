import React from 'react'
import { useAdminAuth } from '../contexts/AuthContext'

const RequireAuth = ({children}) => {
    const {user}=useAdminAuth()
  return (
    <>{children}</>
  )
}

export default RequireAuth