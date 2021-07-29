import { useParams } from 'react-router-dom';

const ContactDetails = ({ContactList}) => {
    const { slug } = useParams();
    const contact = ContactList.find(contact => {
        return contact.slug === slug ? contact : null;
    })
    console.log(contact);

    return (
        <p>{contact.name} lives at {contact.address}.</p>
    )
}
export default ContactDetails;