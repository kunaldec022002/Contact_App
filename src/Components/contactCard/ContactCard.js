import React from "react";
import './ContactCard.css';
function ContactCard({name,mobile,email,deleteContact})
{
    return(
        <div className='contact-card'>

        <p className="contact-name m-2">🤵{name}</p>
        <p className="contact-name m-2">📞{mobile}</p>
        <p className="contact-name m-2">💌{email}</p>

        <span className="icon-delete-contact"
        onClick={()=>{
            deleteContact(mobile)
        }
       }>🗑️</span>

       <span className="icon-edit-contact"> 🧹</span>

    </div>

    )
}

export default ContactCard