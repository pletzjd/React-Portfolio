import React from "react";
let previousActiveId = 'about';

function Nav(props) {


	const setActiveTab = (e) => {
		const { target } = e;
		const tabId = target.id;

		let previousActiveEl = document.getElementById(previousActiveId);
		previousActiveEl.style = 'text-decoration: none';
		previousActiveId = tabId;
	
		props.setActive(tabId);
		target.style = 'text-decoration: underline'
	  };

	return (
		<ul className="flex-row flex ">
			<li>
				<button id="about" className='nav-button' onClick={setActiveTab}> About Me</button>
			</li>
			<li>
				<button id="portfolio" className='nav-button' onClick={setActiveTab}> Portfolio</button>
			</li>
			<li>
				<button id="contact" className='nav-button' onClick={setActiveTab}> Contact</button>
			</li>
			<li>
				<button id="resume" className='nav-button' onClick={setActiveTab}> Resume</button>
			</li>
		</ul>
	);
}

export default Nav;