import React from "react";

function Portfolio() {
	return (
        <div>
            <h3>Portfolio</h3>

        <section className="my-work">
            <a href="https://richardzhang01.github.io/date-night-generator/" className="card card-small dateNight">
                <header className="card-header">
                    <h5 >Date Night Generator</h5>
                </header>
                <div className="card-header">
                    <a href="https://github.com/RichardZhang01/date-night-generator">Repo</a>
                </div>
            </a>

            <a className="card wedding card-small" href="https://kelseyandjustin.love/">
                <header className="card-header">
                    <h5>Wedding Site</h5>
                </header>
                <div className="card-header">
                    <a href="https://github.com/pletzjd/Kelsey-And-Justin">Repo</a>
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

            <a className="card weather card-small" href="https://pletzjd.github.io/Weather-Dashboard/">
                <header className="card-header">
                    <h5>Weather Dashboard</h5>
                </header>
                <div className="card-header">
                    <a href="https://github.com/pletzjd/Weather-Dashboard">Repo</a>
                </div>
            </a>

			
            <a className="card cod card-small" href="https://wod-dice-roller.onrender.com/">
                <header className="card-header">
                    <h5>Chronicles of Darkness Dice Roller</h5>
                </header>
                <div className="card-header">
                    <a href="https://github.com/pletzjd/CoD-dice-roller">Repo</a>
                </div>
            </a>
        </section>
		</div>
	);
}

export default Portfolio;