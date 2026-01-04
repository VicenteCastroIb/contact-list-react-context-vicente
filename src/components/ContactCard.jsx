import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact, onDelete }) => {
	return (
		<li className="list-group-item d-flex justify-content-between">
			<div className="d-flex align-items-center">
				<img
					src={`https://picsum.photos/seed/${contact.id}/100/100`}
					className="rounded-circle me-3"
					alt="avatar"
					style={{ width: "100px", height: "100px", objectFit: "cover" }}
				/>
				<div>
					<h5 className="mb-1">{contact.name}</h5>
					<p className="mb-1 text-secondary"><i className="fas fa-map-marker-alt me-2"></i>{contact.address}</p>
					<p className="mb-1 text-secondary"><i className="fas fa-phone me-2"></i>{contact.phone}</p>
					<p className="mb-1 text-secondary"><i className="fas fa-envelope me-2"></i>{contact.email}</p>
				</div>
			</div>
			<div>
				<Link to={`/edit/${contact.id}`} className="btn btn-link"><i className="fas fa-pencil-alt text-dark"></i></Link>
				<button onClick={() => onDelete(contact.id)} className="btn btn-link"><i className="fas fa-trash-alt text-danger"></i></button>
			</div>
		</li>
	);
};