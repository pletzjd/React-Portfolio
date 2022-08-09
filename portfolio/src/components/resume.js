import React from "react";
import resume from '../files/Resume - Jordan Pletzer.docx.pdf'

function Resume() {
	return (
		<div>
			<h3>Resume</h3>
			<p><span>Click<a href={resume} download>here</a></span>to download a copy of my resume</p>

			<h4>Proficiencies:</h4>
			<ul className="proficiency">
				<li>HTML</li>
				<li>CSS</li>
				<li>Bootstrap</li>
				<li>JavaScript</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>socket.io</li>
				<li>MySQL</li>
				<li>MongoDB</li>
				<li>Progressive Web Applications</li>
				<li>React</li>
				<li>MERN Stack</li>
				<li>Apollo</li>
			</ul>
		</div>
	);
}

export default Resume;