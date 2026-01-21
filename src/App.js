import React, { useState, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/portfolio")
      .then((res) => setPortfolio(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
            My Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="bg-light text-dark text-center p-5">
        <h1>Welcome to My Portfolio</h1>
        <p className="lead">I am a Data Analyst</p>
      </section>

      {/* About Section */}
      <section id="about" className="container p-5">
        <h2>About Me</h2>
        <p>
          Hello! I am a passionate <strong>Data Analyst</strong> with a strong
          background in transforming raw data into meaningful insights. I
          specialize in data cleaning, visualization, and statistical analysis
          using tools like <strong>Python, SQL, Excel, and Power BI</strong>. I
          enjoy discovering trends, building dashboards, and providing
          data-driven solutions that support smarter business decisions.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light p-5">
        <div className="container">
          <h2>Projects</h2>
          <div className="row">
            {/* Project 1 */}
            <div className="col-md-4">
              <a
                href="https://github.com/Jayasrishanmugam/Data-Analysis-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Sales Dashboard</h5>
                    <p className="card-text">
                      An interactive dashboard built in Power BI for analyzing
                      sales performance.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Project 2 */}
            <div className="col-md-4">
              <a
                href="https://github.com/Jayasrishanmugam/Data-Analysis-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Customer Churn Prediction</h5>
                    <p className="card-text">
                      A machine learning model to predict customer churn using
                      Python & scikit-learn.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Project 3 */}
            <div className="col-md-4">
              <a
                href="https://github.com/Jayasrishanmugam/Data-Analysis-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Data Cleaning Pipeline</h5>
                    <p className="card-text">
                      Automated data cleaning and preprocessing pipeline using
                      Python and Pandas.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container p-5">
        <h2>Skills</h2>
        <ul className="list-group">
          <li className="list-group-item">
            Python (Pandas, NumPy, Matplotlib, Seaborn)
          </li>
          <li className="list-group-item">
            SQL (MySQL, PostgreSQL, SQL Server)
          </li>
          <li className="list-group-item">
            Data Visualization (Power BI, Tableau, Excel)
          </li>
          <li className="list-group-item">Statistics & Data Analysis</li>
          <li className="list-group-item">Data Cleaning & Preprocessing</li>
          <li className="list-group-item">
            Machine Learning (Scikit-learn, Regression, Classification)
          </li>
          <li className="list-group-item">
            Excel (Pivot Tables, VLOOKUP, Advanced Functions)
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-dark text-light p-5">
        <div className="container">
          <h2>Contact</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-center text-light p-3">
        <p>&copy; 2025 My Portfolio | Built with React & Bootstrap</p>
      </footer>
    </div>
  );
}

export default App;
