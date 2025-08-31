import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Detail = () => {
  
  const {user} = useContext(UserContext)
  
  return (
    <div>
        {user}
    </div>
  )
}

export default Detail