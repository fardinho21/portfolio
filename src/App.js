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
      <Header onSetShowSideBarButtonClick={onShowSideBarButtonClick}></Header>
      <MainContent onShowContactForm={onShowContactForm}></MainContent>

      <div className="WrapperSideBar" onClick={onShowSideBarButtonClick} style={{
        width: showSideBarState ? "500px" : "0px",
        height: "100%",
        position: "fixed",
        top: "0",
        right: "0",
        transition: "width 0.5s ease-in-out",
        background: "rgba(0,0,0,50%)",

      }}>
        <SideBar />
      </div>

    </div>

  );
}

export default App;
