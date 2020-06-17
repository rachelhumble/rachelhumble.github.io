import React from "react";
import Footer from "../components/footer";
import "../styles/Portfolio.css";

function Portfolio() {

    return (
        <>
        <div className="container portfolio-container">
            <div className="row">
                <div className="col">
                    <div className="card app-card">
                        <div className="card-body">
                            <h5 className="card-title">Miles4Smiles</h5>
                            <p className="card-text">MERN application that allows runners to connect and compete in challenges to raise awareness for local businesses in their area</p>
                            <a href="https://miles4smiles.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card app-card">
                        <div className="card-body">
                            <h5 className="card-title">Code Query</h5>
                            <p className="card-text">Cody Query is an application that allows bootcamp students to ask questions and answer questions from their peers in a friendly environment</p>
                            <a href="https://code--query.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card app-card">
                        <div className="card-body">
                            <h5 className="card-title">Password Generator</h5>
                            <p className="card-text">A detailed and functional password generator built with HTML and JavaScript; designed with CSS</p>
                            <a href="https://rachelhumble.github.io/password_generator/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card app-card">
                        <div className="card-body">
                            <h5 className="card-title">Burger!</h5>
                            <p className="card-text"><br></br>A Node / Express / Handlebars burger logger application to demonstrate CRUD operations with MySQL</p>
                            <a href="https://rhumble-burger.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card app-card">
                        <div className="card-body">
                            <h5 className="card-title">Employee Directory</h5>
                            <p className="card-text">This React app pulls employee data via API and demonstrates the ability to view either all employee data or view sorted.</p>
                            <a href="https://rachelhumble.github.io/employee-directory/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card app-card">
                        <div className="card-body">
                            <h5 className="card-title">Team Profile Generator</h5>
                            <p className="card-text">Use this CLI application to generate a browser-friendly HTML file in order to view and organize team members</p>
                            <a href="https://github.com/rachelhumble/team-profile-generator" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Portfolio