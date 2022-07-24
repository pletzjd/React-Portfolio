import React from "react";
import resume from '../files/Resume.docx'

function Resume() {
	return (
		<div>
			<h3>Resume</h3>
			<p><span>Click<a href={resume} download>here</a></span>to download a copy of my resume</p>

			<h4>Proficiencies:</h4>
			<ul className="proficiency">
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>Web APIs</li>
				<li>Third Party APIs</li>
				<li>Server Side APIs</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>MySQL</li>
				<li>MongoDB</li>
				<li>Progressive Web Applications</li>
				<li>React</li>
			</ul>
		</div>
	);
}

export default Resume;