import React, { useState } from "react";
import useInput from "../../hooks/useInput";

function UserForm() {
  const [firstname, bindFirstname, resetFirstname] = useInput('')
  const [lastname, bindLasttname, resetLastname] = useInput('')

  const handleSubmit = e => {
    e.preventDefault()        
    alert(`Hello ${firstname} ${lastname}`)
    resetFirstname()
    resetLastname()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label>First name</label>
          <input {...bindFirstname} type="text" />
        </div>

        <div>
          <label>Last name</label>
          <input {...bindLasttname} type="text" />
        </div>

        <button type='submit'>Sent</button>

      </form>
    </div>
  );
}

export default UserForm;
