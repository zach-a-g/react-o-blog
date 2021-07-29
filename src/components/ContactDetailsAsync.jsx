import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import StyledDetails from './StyledDetails';

const ContactDetails = () => {
    const { slug } = useParams();
    console.log(slug);
    const [ contact, setContact ] = useState({});
    
    useEffect(() => {
        (async () => {
            const url = `http://127.0.0.1:3000/${slug}`;
            const contact = await fetch(url).then(response => response.json());
            setContact(contact);
            console.log("Contact is: ", contact);
        })();
    }, [setContact, slug]);

    return (
        <>
            <StyledDetails>
                <div id="contactPhoto">
                    <h1 id="contactImg">Pretend this is an image...</h1>
                </div>
                {!!contact ? (
                    <div id="contactContent">
                        <h2 id="titleName">{contact.name}</h2>
                        <div id="menuBox">
                            <p id="boxContent">Message</p>
                            <p id="boxContent">Call</p>
                            <p id="boxContent">FaceTime</p>
                            <p id="boxContent">Mail</p>
                            <p id="boxContent">Pay</p>
                        </div>
                        <div id="contentSection1">
                            <p id="boxTitle">Phone</p>
                            <p>+1 {contact.phone}</p>
                        </div>
                        <br />
                        <div id="contentSection1">
                            <p id="boxTitle">Address</p>
                            <p>{contact.address}</p>
                        </div>
                        <br />
                        <div id="contentSection1">
                            <p id="boxTitle">Email</p>
                            <p>{contact.email}</p>
                        </div>
                        <br />
                        <div id="contentSection1">
                            <p id="boxTitle">Notes</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, repudiandae quia. Dolorum maxime dolore commodi. Officiis praesentium incidunt, cupiditate dolore tempora laboriosam consectetur cum rem ullam voluptate? Eligendi, velit obcaecati.</p>
                        </div>
                    </div>
                ) : (
                    <p> Fetching Contact...</p>
                    
                )}
            </StyledDetails>    
        </>
        
    )
}

export default ContactDetails;
