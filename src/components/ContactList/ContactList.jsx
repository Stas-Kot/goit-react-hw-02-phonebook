import ContactListItem from 'components/ContactListItem/ContactListItem';

export default function ContactList({ contacts, heandleDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => heandleDelete(id)}
        />
      ))}
    </ul>
  );
}
