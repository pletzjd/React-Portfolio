import React from "react";
import Jordan from "../images/Jordan-Pletzer.jpg"

function About() {
	return (
		<div>
			<h3>About Me</h3>

			<img src={Jordan} alt="Jordan Pletzer photo" className="profile-image"></img>

			<p>
                I grew up in North Bay, Ontario where I graduated from St. Joseph Scollard Hall Secondary School. I was
                accepted into and attended McMaster University in Hamilton, Ontario into their engineering program. After
                the first general year, when picking my specialization I strongly debated between software and chemical
                engineering. While I found I enjoyed software more, my first year was my first exposure to coding and
                decided to go with chemical engineering which I felt I had a better background in at the time. After
                graduating I eventually got a job as a chemical technician for Terrapure Environmental (which later got
                bought out by GFL environmental). After working there for roughly two and half years I decided to pursue
                my other interest of coding and enrolled in the University of Toronto School of Continuing Education's
                Coding Bootcamp.

			</p>

			<p>
                On the more personal end, my main hobby is video games, particularly those of the rpg genre. While I miss
                the days of couch co-op as most new titles have preferred to shift to online multiplayer, even before the
                pandemic, I still enjoy hopping onto discord to play games with friends from around the world. Outside
                of gaming, I like to stay active by cycling when weather permits, as well as doing basic cardio
                exercises in my apartment when it does not, particularly during the colder months.

			</p>
		</div>

	);
}

export default About;