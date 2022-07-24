import React, { useState } from "react";
import { validateEmail } from '../utils/helpers';

function Contact() {

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
  
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
	  alert(`Message Sent!`);
  
	  // If everything goes according to plan, we want to clear out the input after a successful registration.
	  setName('');
	  setMessage('');
	  setEmail('');
	};

	return (
		<div>
			<h3>Contact Me</h3>
			<form className="form">
        <input
          value={name}
          name="name"
		  onChange={handleInputChange}
          onBlur={handlefocusChange}
          type="text"
          placeholder="name"
        />
		<input
          value={email}
          name="email"
		  onChange={handleInputChange}
          onBlur={handlefocusChange}
          type="email"
          placeholder="email"
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