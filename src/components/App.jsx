import { Component } from 'react';
import shortid from 'shortid';
// import ContactList from './ContactsList/ContactsList';
import Contacts from './Contacts/Contacts';
// import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = name => {
    const todo = {
      id: shortid.generate(),
      name,
    };
    this.setState(prevState => ({
      contcts: [todo, ...prevState.contacts],
    }));
  };
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <Contacts onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {/* <Filter/>
       <ContactList/> */}
      </>
    );
  }
}
export default App;
