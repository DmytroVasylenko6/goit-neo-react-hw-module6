import ContactForm from './components/ContactForm'
import SearchBox from './components/SearchBox'
import ContactList from './components/ContactList'

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App
