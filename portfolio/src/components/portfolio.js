import React from "react";

function Portfolio() {
	return (
        <div>
		<header>
            <h3>Portfolio</h3>
        </header>

        <section className="my-work">
            <a className="card dateNight" href="https://richardzhang01.github.io/date-night-generator/">
                <header class="card-header">
                    <h5>Date Night Generator</h5>
                </header>
            </a>

            <a className="card placeholder-1 card-small" href="https://github.com/pletzjd">
                <header className="card-header">
                    <h5>Placeholder-1</h5>
                </header>
            </a>

            <a className="card placeholder-2 card-small" href="https://github.com/pletzjd">
                <header className="card-header">
                    <h5>Placeholder-2</h5>
                </header>
            </a>

            <a className="card placeholder-3 card-small" href="https://github.com/pletzjd">
                <header className="card-header">
                    <h5>Placeholder-3</h5>
                </header>
            </a>

            <a className="card placeholder-4 card-small" href="https://github.com/pletzjd">
                <header className="card-header">
                    <h5>Placeholder-4</h5>
                </header>
            </a>

			
            <a className="card placeholder-4 card-small" href="https://github.com/pletzjd">
                <header className="card-header">
                    <h5>Placeholder-5</h5>
                </header>
            </a>
        </section>
		</div>
	);
}

export default Portfolio;