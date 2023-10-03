import React, { useEffect, useState } from "react";
import showToast from 'crunchy-toast';
import ContactCard from '../../Components/contactCard/ContactCard'
import "./home.css"

function Home()
{

    
    const [name,setName]=useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');


    const [contacts,setcontacts] =useState([
        {
            name:'Kunal',
            mobile:'8177907027',
            email:'Kunalingale72@gmail.com'
        },

       

    ]);

    const addContact =()=>
    {
        if(!name)
        {
            showToast("Name is required",'alert',3000);
            return;
        }

        if(!email)
        {
            showToast("Email is required",'alert',3000);
            return;
        }

        if(!mobile)
        {
            showToast("Mobile is required",'alert',3000);
            return;
        }
       const obj = {
        name:name,
        email:email,
        mobile:mobile
       }

       const newContacts = [...contacts, obj];

      setcontacts(newContacts);
      saveToLoacalStorage(newContacts);

         showToast('Contact Added Successfully', 'success',3000);

      setName('');
      setEmail('');
      setMobile('')
    };

    const deleteContact = (mobileNumber)=>
    {
        let indextoDelete = -1;
        contacts.forEach((contactDetail,index)=>
        {
            if(contactDetail.mobile==mobileNumber)
            {
                indextoDelete=index;
            }
        })

        contacts.splice(indextoDelete,1);
        saveToLoacalStorage(contacts);

        setcontacts([...contacts])

        showToast("Contact Delete Successfully...", 'success',3000);
    }

    const saveToLoacalStorage = (contactData)=>
    {
          localStorage.setItem ("contacts",JSON.stringify(contactData));
    }

    const loadFromLocalStorage = ()=>
    {
        const contactData = JSON.parse(localStorage.getItem('contact'));

        if(contactData)
        {
            setcontacts(contactData);
        }
    }

    const enableEditMode = (index)=>
    {
        const contactData = contacts[index];
        setName(contactData.name);
        setEmail(contactData.email);
        setMobile(contactData.mobile);
    }

    useEffect(()=>
    {
        loadFromLocalStorage();
    },[])

    return(
        <div>
            <h1 className="app-title">
                📞Contact-App
            </h1>

        
            <div   className="app-body">

                <div className="contact-container">
                    <h2 className="sub-heading">Show Contact</h2>
                    {
                        contacts.map((contact,index)=>
                        {

                            const {name,mobile,email}=contact;
                           return <ContactCard
                            key={index}
                           name={contact.name}
                           mobile={contact.mobile}
                           email={contact.email}
                           deleteContact={deleteContact}
                           enableEditMode={enableEditMode}
                           index={index}/>
                           
                        }
                        )
                    }
                </div>

                <div className="add-contacts-container">
                    <h2 className="sub-heading">Add Contact</h2>
                       
                       <form>
                      
                        <input
                         type="text"
                          placeholder="name" 
                          className="user-input"
                          onChange={(e)=>{
                            setName(e.target.value);
                          }}
                          value={name}
                        />

                        <input 
                        type="email"
                         placeholder="Email" 
                         className="user-input"
                         required
                         onChange={(e)=>{
                            setEmail(e.target.value);
                          }}
                          value={email}

                          />

                        <input
                         type="text"
                         placeholder="Mobile"
                          className="user-input"
                          onChange={(e)=>{
                            setMobile(e.target.value);
                          }}
                          value={mobile}
                          />


                            <button
                             type="button" 
                              className="btn-add-contact"
                              onClick={addContact}
                              >
                               Add Contact
                            </button>
                       </form>


                </div>

            </div>
        </div>
    )
}

export default Home