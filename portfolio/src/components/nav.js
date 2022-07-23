import React from "react";

function Nav(props) {
	return (
		<ul class="flex-row flex ">
			<li>
				<button onClick={() => props.setActive('about')}> About Me</button>
			</li>
			<li>
				<button onClick={() => props.setActive('portfolio')}> Portfolio</button>
			</li>
			<li>
				<button onClick={() => props.setActive('contact')}> Contact</button>
			</li>
			<li>
				<button onClick={() => props.setActive('resume')}> Resume</button>
			</li>
		</ul>
	);
}

export default Nav;