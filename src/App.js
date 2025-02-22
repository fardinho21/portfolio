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
  }
  const onShowSideBarButtonClick = () => {
    setShowSideBarState(!showSideBarState)
  }

  onShowContactForm.bind(this)

  return (
    <div className='App'>
      {showContactFormState && <ContactForm onShowContactForm={onShowContactForm} />}
      <Header showSideBarState={showSideBarState} onSetShowSideBarButtonClick={onShowSideBarButtonClick}></Header>
      <MainContent onShowContactForm={onShowContactForm}></MainContent>

      <SideBar showSideBarState={showSideBarState} onShowSideBarButtonClick={onShowSideBarButtonClick} />

    </div>

  );
}

export default App;
