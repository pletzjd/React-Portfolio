import React from "react";

function Portfolio() {
	return (
        <div>
		<header>
            <h3>Portfolio</h3>
        </header>

        <section className="my-work">
            <a href="https://richardzhang01.github.io/date-night-generator/" className="card dateNight">
                <header className="card-header">
                    <h5 >Date Night Generator</h5>
                </header>
                <div className="card-header">
                    <a href="https://github.com/RichardZhang01/date-night-generator">Repo</a>
                </div>
            </a>

            <a className="card chatbox card-small" href="https://coolchatbox.herokuapp.com">
                <header className="card-header">
                    <h5>Cool Chatbox</h5>
                </header>
                <div className="card-header">
                    <a href="https://github.com/zzzbia/Cool-Chatbox">Repo</a>
                </div>
            </a>

            <a className="card quiz card-small" href="https://pletzjd.github.io/Code-quiz/">
                <header className="card-header">
                    <h5>Coding Quiz</h5>
                </header>
                <div className="card-header">
                    <a href="https://github.com/pletzjd/Code-quiz">Repo</a>
                </div>
            </a>

            <a className="card schedule card-small" href="https://pletzjd.github.io/Work-Day-Scheduler/">
                <header className="card-header">
                    <h5>Work Day Scheduler</h5>
                </header>
                <div className="card-header">
                    <a href="https://github.com/pletzjd/Work-Day-Scheduler">Repo</a>
                </div>
            </a>

            <a className="card placeholder-4 card-small" href="https://pletzjd.github.io/Weather-Dashboard/">
                <header className="card-header">
                    <h5>Weather Dashboard</h5>
                </header>
                <div className="card-header">
                    <a href="https://github.com/pletzjd/Weather-Dashboard">Repo</a>
                </div>
            </a>

			
            <a className="card notepad card-small" href="https://note-taker-pletzjd.herokuapp.com/">
                <header className="card-header">
                    <h5>Note Taker</h5>
                </header>
                <div className="card-header">
                    <a href="https://github.com/pletzjd/Note_Taker">Repo</a>
                </div>
            </a>
        </section>
		</div>
	);
}

export default Portfolio;