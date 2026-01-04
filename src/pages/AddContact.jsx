import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
  const { store } = useGlobalReducer();
  const { id } = useParams();
  const navigate = useNavigate();
  const slug = "vicente_vidal_agenda_2024"; // Copia y pega exactamente este en los dos

  const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "" });

  useEffect(() => {
    if (id) {
      const found = store.contacts.find(c => c.id == id);
      if (found) setContact(found);
    }
  }, [id, store.contacts]);

  const saveContact = async (e) => {
    e.preventDefault();
    const url = id 
      ? `https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`
      : `https://playground.4geeks.com/contact/agendas/${slug}/contacts`;
    
    const resp = await fetch(url, {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    });

    if (resp.ok) navigate("/");
  };

  return (
    <form onSubmit={saveContact} className="container">
      <h1>{id ? "Edit Contact" : "Add Contact"}</h1>
      <input className="form-control mb-2" placeholder="Name" value={contact.name} onChange={e => setContact({...contact, name: e.target.value})} />
      <input className="form-control mb-2" placeholder="Email" value={contact.email} onChange={e => setContact({...contact, email: e.target.value})} />
      <input className="form-control mb-2" placeholder="Phone" value={contact.phone} onChange={e => setContact({...contact, phone: e.target.value})} />
      <input className="form-control mb-2" placeholder="Address" value={contact.address} onChange={e => setContact({...contact, address: e.target.value})} />
      <button className="btn btn-primary w-100">Save</button>
      <Link to="/">or get back to contacts</Link>
    </form>
  );
};