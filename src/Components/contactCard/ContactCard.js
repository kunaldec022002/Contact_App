import React from "react";
import './ContactCard.css';
import dltIcon from './bin.png';
import editIcon from './icons8-edit-48.png';
function ContactCard({name,mobile,email,deleteContact,enableEditMode,index})
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
       }><img src={dltIcon} className="dlt-icon"/> </span>

        <span className="icon-edit-contact"
            onClick={()=>{
                enableEditMode(index)
            }
        }><img  src={editIcon} className="edit-icon"/></span>

    </div>

    )
}

export default ContactCard