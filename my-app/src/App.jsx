import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";



const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Swetha Kannan</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/skills">Skills</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/certifications">Certifications</Link>
            <Link className="nav-link" to="/achievements">Achievements</Link>
            
            <Link className="nav-link" to="/resume">Resume</Link>

            <Link className="nav-link" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/major" element={<MajorProjects />} />
        <Route path="/projects/minor" element={<MinorProjects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

// Home
const Home = () => (
  <div className="container mt-5 d-flex align-items-center justify-content-between">
    <div>
      <h1>Swetha Kannan</h1>
      <p className="lead"> Aspiring Junior Software Developer | Cloud Enthusiast</p>
      <h5>Career Objective</h5>
      <p>To contribute innovative ideas, creative skills and grow professionally in the collabarative environment .</p>
    </div>
    <img src="/profileimg.jpg" className="home-profile" alt="Profile" />
  </div>
);

// Skills
const Skills = () => (
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6">
        <h4>Technical Skills</h4>
        <div className="card p-3">
          <li>C Programming</li>
          <li>Java</li>
          <li>Wokwi Software (Basic)</li>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Soft Skills</h4>
        <div className="card p-3">
          <li>Adaptability</li>
          <li>Resilience</li>
          <li>Optimism</li>
        </div>
      </div>
    </div>
  </div>
);

// Projects Navigation Page
const Projects = () => (
  <div className="container mt-5 text-center">
    <h3>Projects</h3>
    <div className="btn-group mt-3">
      <Link to="/projects/major" className="btn btn-primary">Major Projects</Link>
      <Link to="/projects/minor" className="btn btn-secondary">Minor Projects</Link>
    </div>
  </div>
);

// Major Projects
const MajorProjects = () => (
  <div className="container mt-5">
    <h3>Major Projects</h3>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src="/subway.jpg" className="card-img-top" alt="Major Project 1" />
          <div className="card-body">
            <h5 className="card-title">AN INTEGRATED SYSTEM FOR MANAGING WATER LEVEL IN SUBWAY FOR ACCIDENT PREVENTION - 2024</h5>
            <p>Developed a smart subway management system with sensors,energy harvesting, and automated doors for enhanced efficiency and safety.</p>
          <a href="https://github.com/Swetha28102004/AN-INTEGRATED-SYSTEM-FOR-MANAGING-WATER-LEVEL-IN-SUBWAY-FOR-ACCIDENT-PREVENTION" className="btn btn-outline-info" target="_blank" rel="noreferrer">GitHub Link</a>
          </div>
         </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/restroom.png" className="card-img-top" alt="Major Project 2" />
          <div className="card-body">
            <h5 className="card-title">IoT-ENABLED SMART RESTROOM HYGIENE MANAGEMENT SYSTEM WITH ODOR CONTROL - 2024</h5>
            <p>Developed an loT-based system for automated restroom hygiene, odor control maintenance with real-time alerts.</p>
            <a href="https://github.com/Swetha28102004/automated-hygiene-management-system" className="btn btn-outline-info" target="_blank" rel="noreferrer">GitHub Link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Minor Projects
const MinorProjects = () => (
  <div className="container mt-5">
    <h3>Minor Projects</h3>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
           <div className="card-body">
            <h5 className="card-title">Form Validation</h5>
            <p>Performed form validation on both frontend and backend to ensure proper user input and secure data handling.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Average of all subjects</h5>
            <p>Created a React-based UI that accepts marks for five subjects, computes the average in real-time, and displays the grade dynamically with input validation.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Certifications
const Certifications = () => (
  <div className="container mt-5">
    <h3>Certifications</h3>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="card cert-card">
          <img src="/coursera.png" className="card-img-top" alt="Cert 1" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="card cert-card">
          <img src="/nptel.png" className="card-img-top" alt="Cert 2" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="card cert-card">
          <img src="/cicso.png" className="card-img-top" alt="Cert 3" />
        </div>
      </div>
    </div>
  </div>
);

// Achievements
const Achievements = () => (
  <div className="container mt-5">
    <h3>Achievements</h3>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="card cert-card">
          <img src="/kalam.png" className="card-img-top" alt="Achievement 1" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="card cert-card">
          <img src="/kongu.png" className="card-img-top" alt="Achievement 2" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="card cert-card">
          <img src="/conference.jpg" className="card-img-top" alt="Achievement 3" />
        </div>
      </div>
    </div>
  </div>
);

function Resume() {
  return (
    <Container className="mt-4 text-center">
      <h3>My Resume</h3>
      <iframe
        src="/swetha_resume.pdf"
        width="100%"
        height="500px"
        title="Resume"
      />
      <a href="/swetha_resume.pdf" download className="btn btn-success mt-3">
        <FaFilePdf /> Download Resume
      </a>
    </Container>
  );
} 


// Contact

const Contact = () => (
  <div className="container mt-5 contact-container">
    <h2 className="text-center mb-4">Connect with Me</h2>
    <div className="row align-items-center">
      
      <div className="col-md-6">
        <ul className="list-group list-group-flush fs-5">
          <li className="list-group-item">
            <i className="fas fa-envelope me-2 text-primary"></i>
            <strong>Email:</strong> swethakannan2810@gmail.com
          </li>
          <li className="list-group-item">
            <i className="fas fa-phone me-2 text-success"></i>
            <strong>Phone:</strong> +91 936 115 9669
          </li>
          <li className="list-group-item">
            <i className="fab fa-linkedin me-2 text-info"></i>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/swetha-kannan-22b14425a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">swetha-k</a>
          </li>
          <li className="list-group-item">
            <i className="fab fa-github me-2 text-dark"></i>
            <strong>GitHub:</strong> <a href="https://github.com/Swetha28102004" target="_blank">Swetha28102004</a>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
);
