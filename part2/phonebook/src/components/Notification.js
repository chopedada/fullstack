import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  else if (message == "green") {
    return (
      <div className="added">
        <p>Entry was added to phonebook</p>
      </div>
    )
  }

  return (
    <div className="error">
      <p>Entry was already deleted from phonebook</p>
    </div>
  )

}

export default Notification