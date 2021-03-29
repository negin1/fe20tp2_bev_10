import React from 'react'

const DateTime = () => {


  const date = new Date ()
  return (
    <div>
      { `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}` }
    </div>
  )
}

export default DateTime
