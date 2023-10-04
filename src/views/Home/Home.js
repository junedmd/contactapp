import React, { useState,useEffect } from "react";
import "./Home.css"
import { phoneBook } from "../data/Phonebook";
import Contact from "./../../component/Contacts/Contact"
export default function Home(){
    const [contacts ,setContacts] = useState(phoneBook);
    const [ search ,Setsearch] = useState("")
   


    return(
        <>
        <h1> juned</h1>
        <input  placeholder="search"
          className="search"
           value={search}
           onChange={(e)=>{
          Setsearch(e.target.value)
           }}
        />

        {
            useEffect(()=>{
             const searchName = phoneBook.filter((contactDetails)=>{
                const name = contactDetails.name.toLowerCase();
                const mobile = contactDetails.mobile.toString();

                const query = search.toLowerCase();

                return (name.includes(query) || mobile.includes(query))
             })
             setContacts(searchName);
            }, [search])

           
        }


       {
        contacts.map( (contactDetails)=>{
        const {name ,mobile}= contactDetails;
           return (
            <>
            <Contact name ={name}  mobile={mobile}/>
            </>
           )  

       })
       }
        </>
    )
}