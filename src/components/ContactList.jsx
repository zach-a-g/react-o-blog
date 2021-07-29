import { Route, Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ContactDetailsAsync from './ContactDetailsAsync';
import Title from './Title';

import StyledList from './StyledList';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const history = useHistory();
    useEffect(() => {
        (async () => {
            const contacts = await _fetchData();
            setContacts(contacts);
        })();
    }, [setContacts]);

    const _fetchData = async () => {
        const url = "http://127.0.0.1:3000/";
        const response = await fetch(url).then(response => response.json());
        return response;
    };

    return (
        <>
            {!!contacts.length ? (
                <>
                    <Route exact path="/">
                    <Title>Contacts</Title>
                    <div id="searchBar">
                        <div>
                            Search
                        </div>
                        <div>
                            Mic
                        </div>
                    </div>

                    <hr />

                    <div id="sideLetters">
                        <p id="let">a</p> 
                        <p id="let">b</p>
                        <p id="let">c</p> 
                        <p id="let">d</p>
                        <p id="let">e</p> 
                        <p id="let">f</p>
                        <p id="let">g</p> 
                        <p id="let">h</p>
                        <p id="let">i</p> 
                        <p id="let">j</p>
                        <p id="let">k</p> 
                        <p id="let">l</p>
                        <p id="let">m</p> 
                        <p id="let">n</p>
                        <p id="let">o</p> 
                        <p id="let">p</p>
                        <p id="let">q</p> 
                        <p id="let">r</p>
                        <p id="let">s</p> 
                        <p id="let">t</p>
                        <p id="let">u</p> 
                        <p id="let">v</p>
                        <p id="let">w</p> 
                        <p id="let">x</p>
                        <p id="let">y</p> 
                        <p id="let">z</p>
                        <p id="let">#</p>
                    </div>

                    <div id="myCard">
                    <div id="picSide">
                        <p>dis a pic..</p>
                    </div>
                    <div id="cardName">
                        <p id="cardInnerName">Zach Gleeson</p>
                        <p id="cardInner">My Card</p>
                    </div>
                    </div>

                    <div id="letter">
                        <p>A</p>
                    </div>

                    <StyledList>
                        {contacts.map((contact, index) => (
                            <>
                                <li key={index}>
                                    <Link to={`/contact/${contact.slug}`}>
                                        {contact.name}
                                    </Link>
                                </li>
                                <hr />
                            </>
                        ))}
                    </StyledList>

                    <div id="letter">
                        <p>B</p>
                    </div>

                    </Route>
                    <Route path="/contact/:slug">
                        <ContactDetailsAsync/>
                        <button type="button" name="button" onClick={() => history.goBack()}>Back to Contacts</button>
                    </Route>
                </>
            ) : (
                <p>Loading Contacts from API...</p>
            )}
        </>
    )
};

export default ContactList;