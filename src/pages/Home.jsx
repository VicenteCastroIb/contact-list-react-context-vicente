import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();
    
    // 1. CAMBIA ESTO: Pon algo único como tu nombre para evitar conflictos
    const slug = "vicente_vidal_agenda_2024"; 

    // 2. ÚNICA FUNCIÓN para cargar o crear la agenda
    const loadContacts = async () => {
        try {
            const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`);
            
            if (resp.ok) {
                // Si la agenda existe, guardamos los contactos
                const data = await resp.json();
                dispatch({ type: "GET_CONTACTS", payload: data.contacts });
            } 
            else if (resp.status === 404) {
                // Si NO existe (404), la creamos una sola vez
                console.log("La agenda no existe, creándola...");
                const respPost = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
                    method: "POST"
                });
                
                if (respPost.ok) {
                    loadContacts(); // Reintentamos cargar tras crear
                }
            }
        } catch (error) {
            console.error("Error en la petición:", error);
        }
    };

    // 3. FUNCIÓN para borrar
    const deleteContact = async (id) => {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, { 
            method: "DELETE" 
        });
        if (resp.ok) loadContacts();
    };

    // 4. UN SOLO useEffect al montar el componente
    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <div className="container mt-3">
            <ul className="list-group">
                {store.contacts && store.contacts.length > 0 ? (
                    store.contacts.map(c => (
                        <ContactCard key={c.id} contact={c} onDelete={deleteContact} />
                    ))
                ) : (
                    <li className="list-group-item text-center">No hay contactos. ¡Agrega uno nuevo!</li>
                )}
            </ul>
        </div>
    );
};