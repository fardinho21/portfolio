import React, {useState} from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import MainContent from './components/MainContent';
const App = () => {

  
  const [showContactFormState, setShowContactFormState] = useState(false);

  const onShowContactForm = () => {
    setShowContactFormState(!showContactFormState);
    console.log(showContactFormState);
  }

  onShowContactForm.bind(this)

  return (
    <div className='App'>
      {showContactFormState && <ContactForm/>}
      <Header></Header>
      <MainContent onShowContactForm={onShowContactForm}></MainContent>
    </div>
  );
}

export default App;
