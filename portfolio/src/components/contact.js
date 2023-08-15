import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { validateEmail } from '../utils/helpers';

function Contact() {

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const form = useRef();
  
	const handlefocusChange = (e) => {
	  const { target } = e;
	  const inputType = target.name;
	  const inputValue = target.value;
  
	  if (inputType === 'email' && inputValue === '') {
		setErrorMessage('Email field is required');
	  } else if(inputType === 'email' && !validateEmail(email)){
		setErrorMessage('Invalid email ');
	  } else if (inputType === 'name' && inputValue === '') {
		setErrorMessage('Name field is required');
	  } else if (inputType === 'message' && inputValue === '') {
		setErrorMessage('Message field is required');
	  }else{
		setErrorMessage('')
	  }
	};

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;
	
		if (inputType === 'email') {
		  setEmail(inputValue);
		} else if (inputType === 'name') {
		  setName(inputValue);
		} else if (inputType === 'message') {
		  setMessage(inputValue);
		}
	  };
  
	const handleFormSubmit = (e) => {

	  e.preventDefault();
  
	  if (!validateEmail(email) || !name || !message) {
		setErrorMessage('Form incomplete');

		return;
	  }

	  emailjs.sendForm(process.env.REACT_APP_emailjsServiceID, process.env.REACT_APP_emailjsTemplateID, form.current, process.env.REACT_APP_emailjsKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

	  alert(`Message Sent!`);
  
	  setName('');
	  setMessage('');
	  setEmail('');
	};

	return (
		<div>
			<h3>Contact Me</h3>
			<form ref={form} className="form">
        <input
          value={name}
          name="name"
		  onChange={handleInputChange}
          onBlur={handlefocusChange}
          type="text"
          placeholder="Name"
        />
		<input
          value={email}
          name="email"
		  onChange={handleInputChange}
          onBlur={handlefocusChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
		  className="message"
		  onChange={handleInputChange}
          onBlur={handlefocusChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
		</div>
	);
}

export default Contact;