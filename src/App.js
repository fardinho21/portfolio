import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
const App = () => {


  const [showContactFormState, setShowContactFormState] = useState(false);
  const [showSideBarState, setShowSideBarState] = useState(false);

  const onShowContactForm = () => {
    setShowContactFormState(!showContactFormState);
    console.log(showContactFormState);
  }
  const onShowSideBarButtonClick = () => {
    setShowSideBarState(!showSideBarState)
    console.log(showSideBarState)
  }

  onShowContactForm.bind(this)

  return (
    <div className='App'>
      {showContactFormState && <ContactForm onShowContactForm={onShowContactForm} />}
      <Header onSetShowSideBarButtonClick={onShowSideBarButtonClick}></Header>
      <MainContent onShowContactForm={onShowContactForm}></MainContent>

      <div className='WrapperSideBar'>

      </div>

    </div>

  );
}

export default App;
