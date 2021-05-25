import React, { useState, useEffect } from 'react'

export const EditContact = ({ setEditing, currentContact, updateContact }) => {
  const [contact, setContact] = useState(currentContact)

  useEffect(
    () => {
      setContact(currentContact)
    },
    [currentContact]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!contact.name || !contact.surname || !contact.phone || !contact.email || !contact.address) {
      return;
    }

    updateContact(contact.id, contact)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={handleInputChange}
      />
      <label>Surname</label>
      <input
        type="text"
        name="surname"
        value={contact.surname}
        onChange={handleInputChange}
      />
      <label>Phone</label>
      <input
        type="text"
        name="phone"
        value={contact.phone}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={contact.email}
        onChange={handleInputChange}
      />
      <label>Address</label>
      <input
        type="text"
        name="address"
        value={contact.address}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => setEditing(false)}
      >
        Cancel
      </button>
    </form>
  )
}