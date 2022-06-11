import React, {useState} from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import MainContent from './components/MainContent';
const App = () => {

  
  const [showContactFormState, showContactForm] = useState(false);

  const onShowContactForm = () => {
    showContactForm(!showContactFormState);
    console.log(showContactFormState)
  }

  return (
    <div className='App'>
      <Header></Header>
      <MainContent showContactForm={onShowContactForm}></MainContent>
    </div>
  );
}

export default App;
