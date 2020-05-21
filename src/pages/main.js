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
                <p className="card-text">Hi I'm Rachel Humble, currently a student of the UNC Coding Bootcamp. In addition to this course, I work on the support team for an email marketing software company, Bronto + Oracle. In my current role as a Support Engineer, I use troubleshooting skills to solve issues related to how Bronto's platform integrates with various client commerce sites. Completing this coding bootcamp course will both help me in my current job and open new opportunities for me to move within my own company. I'm so excited to see where the next six months take me!</p>
                <p className="card-text">Before my time at Bronto + Oracle I was a "Genius" in 4 various Apple retail stores as I moved around North Carolina and New York City over the span of 7 years. I certainly benefitted from Apple's software and hardware repair training plus gained leadership skills as I facilitated training for newer Geniuses. Prior to Apple I worked at Starbucks while completing my BS in Biology at North Carolina State University.</p>
                <p className="card-text final">I'm originally from Asheville, NC but currently live in Durham, NC with my cat Bernie. In my personal time I enjoy seeing live music, drinking craft beer and training for marathons with my family. So far I'm the only person in my family to have run only one marathon, and am currently training for my second- the 2020 Chicago Marathon which will take place this October. Our family team is named "Shut Up Legs" because this is our favorite mantra during long runs and races (it really helps!).</p>
                <div>.</div>
                <div>.</div>
                <div>.</div>
            </div>
        </div>
        
        {/* <Footer /> */}
        </>
    )
}

export default Main