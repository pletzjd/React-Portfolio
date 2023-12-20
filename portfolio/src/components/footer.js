import React from "react";
import Git from "../images/github.png";
import linkedIn from "../images/linkedIn.png";
import stack from "../images/stackoverflow.png"
function Footer(){


    return(
        <div>        
            <footer>
			<a href="https://github.com/pletzjd"><img src={Git} alt="github logo" className="icon"></img></a>
            <a href="https://www.linkedin.com/in/jordan-pletzer-47b5bb166/"><img src={linkedIn} alt="linkedIn logo" className="icon"></img></a>
            <a href="https://stackoverflow.com/users/18926052/pletzjd"><img src={stack} alt="stack overflow logo" className="icon"></img></a>
            </footer>
        </div>
    )

}

export default Footer;