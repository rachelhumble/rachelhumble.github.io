import React from "react";
import "../styles/Main.css";
// import image from "../images/me.jpg";
// import Footer from "../components/footer";

function Main() {

    return (
        <>
        <div className="card text-white main-card">
            {/* <img className="card-img" src={image} alt="Profile" /> */}
            <div className="card-img-overlay">
                <h5 className="card-title">About Me</h5>
                <p className="card-text">Hi I'm Rachel Humble, currently a student of the UNC-Chapel Hill Coding Bootcamp. In addition to this course, I work on the support team for an email marketing software company, Bronto + Oracle. In my current role as a Support Engineer, I use troubleshooting skills to solve issues related to how Bronto's platform integrates with various client commerce sites. I'm a motivated team player skilled in troubleshooting, bug isolation, team training + empathy in customer support. Upon bootcamp completion, I'm hoping to put my new full-stack web development skills to use in a dev role with an invaluable perspective of both the frontend user AND backend technology. </p>
                {/* <p className="card-text">Before my time at Bronto + Oracle I was a "Genius" in 4 various Apple retail stores as I moved around North Carolina and New York City over the span of 7 years. I certainly benefitted from Apple's software and hardware repair training plus gained leadership skills as I facilitated training for newer Geniuses. Prior to Apple I worked at Starbucks while completing my BS in Biology at North Carolina State University.</p> */}
                <p className="card-text final">I'm originally from Asheville, NC but currently live in Durham, NC with my cat Bernie. In my personal time I enjoy seeing live music, drinking craft beer and training for marathons with my family. So far I'm the only person in my family to have run only one marathon, and am currently training for my second- the 2020 Chicago Marathon which will take place this October. Our family team is named "Shut Up Legs" because this is our favorite mantra during long runs and races (it really helps!).</p>
                <br></br>
                <hr></hr>
                <br></br>
                <h5 className="card-title">Skills</h5>
                    <li className="card-list">Computer Science applied to JavaScript</li>
                    <li className="card-list">Databases (MySQL, MongoDB)</li>
                    <li className="card-list">Server Side Development (Node.js, Express, MERN Stack)</li>
                    <li className="card-list">Browser Based Technologies (HTML, CSS, JavaScript, jQuery, React, Bootstrap)</li>
                    <li className="card-list">Deployment (Heroku, Git)</li>
                    <li className="card-list">Quality Assurance (Writing Tests)</li>
                    <br></br>
                    <br></br>
                    <br></br>
            </div>
        </div>
        
        {/* <Footer /> */}
        </>
    )
}

export default Main