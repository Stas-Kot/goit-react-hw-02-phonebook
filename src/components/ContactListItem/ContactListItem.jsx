import { ContactItem, DeleteBtn } from './ContactListItem.styles';

export default function ContactListItem({ name, number, deleteContact }) {
  return (
    <ContactItem>
      {name}: {number}
      <DeleteBtn type="button" onClick={deleteContact}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
}
