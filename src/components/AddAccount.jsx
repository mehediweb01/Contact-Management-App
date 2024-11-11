/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const AddAccount = ({ addContact, editContact, updateContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editContact) {
      setName(editContact.name);
      setPhone(editContact.phone);
      setEmail(editContact.email);
    }
  }, [editContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) return;

    const newContact = {
      id: editContact ? editContact.id : Date.now(),
      name,
      phone,
      email,
    };

    if (editContact) {
      updateContact(newContact);
    } else {
      addContact(newContact);
    }

    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="bg-slate-200 p-6 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="name">
          Name: <br />
          <input
            type="text"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email: <br />
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="phone">
          Phone Number: <br />
          <input
            type="number"
            value={phone}
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="bg-sky-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 hover:bg-sky-400 hover:text-slate-700 hover:font-semibold hover:tracking-[0.32px]"
        >
          {editContact ? "Update Contact" : "Add Contact"}
        </button>
      </form>
    </div>
  );
};

export default AddAccount;
