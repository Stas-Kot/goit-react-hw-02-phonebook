import { SearchTitle } from './SearchContact.styles';

export default function SearchContact({ value, inputChange }) {
  return (
    <label>
      <SearchTitle>Find contacts by name</SearchTitle>
      <input type="text" value={value} onChange={inputChange} />
    </label>
  );
}
