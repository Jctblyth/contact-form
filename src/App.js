import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./components/Input/Input"
import Button from "./components/button/Button"

function App() {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

const messageSubmit = (e) => {
  e.preventDefault()
  console.log("MESSAGE SUBMITTED")
  alert(`Thanks for your message ${name}!`)

}

const handleNameChange = (e) => {
  const newName = e.target.value;
  setName(newName)

  if (newName.length <2) {
    setNameError("Please enter your name")
  } else if (/\d/.test(newName)){
    setNameError("Please enter a valid name")
  }
}

const handleEmailChange = (e) => {
  const newEmail = e.target.value;
  setEmail(newEmail)
  if (newEmail.length <2) {
    setEmailError("Please enter your email")
  } 
}

const handleMessageChange = (e) => {
  const newMessage= e.target.value;
  setMessage(newMessage)
  if (newMessage.length <2) {
    setMessageError("Please enter your message")
  }
}
 
  return (
    <div className="App">
      <h1>Contact Us</h1>

      <form onSubmit={messageSubmit}>
        <Input type="text" title="Name: " id="name" value={name} onChange={handleNameChange}
        error={nameError}/>
        <Input type="email" title="Email: " id= "email" value={email} onChange={handleEmailChange}
        error={emailError}/>
        <Input type="text" title="Message: " id="message" value={message} onChange={handleMessageChange} 
        error={messageError}/>

        <Button type="submit" name="Send message"></Button>
      </form>

    </div>
  );
}

export default App;
