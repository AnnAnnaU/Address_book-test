import React, { useState } from 'react'
import './AddContact.css';

export const AddContact = ({ addContact, initialFormState }) => {
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!user.name || !user.surname || !user.phone || !user.email || !user.address) {
      return;
    }
    addContact(user);
    setUser(initialFormState);
  }

  return (
    <form
      className="air"
      onSubmit={handleSubmit}>
      <div class="form-inner">
        <div class="form-row">
          <label>Name</label>
          <input
            required
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div class="form-row">
          <label>Surname</label>
          <input
            required
            type="text"
            name="surname"
            value={user.surname}
            onChange={handleInputChange}
          />
        </div>
        <div class="form-row">
          <label>Phone</label>
          <input
            required
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
          />
        </div>
        <div class="form-row">
          <label>Email</label>
          <input
            required
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div class="form-row">
          <label>Address</label>
          <input
            required
            type="text"
            name="address"
            value={user.address}
            onChange={handleInputChange}
          />
        </div>
        <button>Add new contact</button>
      </div>
    </form>
  )
}
