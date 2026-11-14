import {
  FiArrowRight,
  FiPlay,
  FiCheckCircle,
  FiClock,
  FiMoreHorizontal,
  FiPlus,
} from "react-icons/fi";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Your workspace, simplified
          </div>

          <h1>
            Manage Projects.
            <span> Achieve More.</span>
          </h1>

          <p className="hero-description">
            Plan projects, organize tasks, and collaborate with your team
            effortlessly. Everything you need to achieve more, all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="#pricing" className="hero-primary-btn">
              Get Started Free
              <FiArrowRight />
            </a>

            <a href="#how-it-works" className="hero-secondary-btn">
              <FiPlay />
              How It Works
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust">
            <div className="trust-icon">
              <FiCheckCircle />
            </div>

            <p>
              Free to get started
              <span>No credit card required</span>
            </p>
          </div>
        </div>

        {/* Right Dashboard Preview */}
        <div className="hero-visual">
          <div className="dashboard-card">
            {/* Dashboard Header */}
            <div className="dashboard-header">
              <div>
                <h3>My Workspace</h3>
                <p>Here's your project overview</p>
              </div>

              <button className="dashboard-menu">
                <FiMoreHorizontal />
              </button>
            </div>

            {/* Stats */}
            <div className="dashboard-stats">
              <div className="stat-card">
                <span>Total Projects</span>
                <h2>24</h2>
                <small>+12% this month</small>
              </div>

              <div className="stat-card">
                <span>Completed Tasks</span>
                <h2>86</h2>
                <small>+18% this month</small>
              </div>
            </div>

            {/* Projects */}
            <div className="dashboard-projects">
              <div className="projects-heading">
                <h3>Recent Projects</h3>
                <button>
                  <FiPlus />
                  New
                </button>
              </div>

              <div className="project-item">
                <div className="project-info">
                  <div className="project-icon purple">W</div>
                  <div>
                    <h4>Website Redesign</h4>
                    <span>12 tasks</span>
                  </div>
                </div>

                <div className="project-progress">
                  <strong>75%</strong>
                  <div className="progress-track">
                    <div className="progress-fill purple-fill"></div>
                  </div>
                </div>
              </div>

              <div className="project-item">
                <div className="project-info">
                  <div className="project-icon blue">M</div>
                  <div>
                    <h4>Mobile Application</h4>
                    <span>18 tasks</span>
                  </div>
                </div>

                <div className="project-progress">
                  <strong>45%</strong>
                  <div className="progress-track">
                    <div className="progress-fill blue-fill"></div>
                  </div>
                </div>
              </div>

              <div className="project-item">
                <div className="project-info">
                  <div className="project-icon green">D</div>
                  <div>
                    <h4>Digital Marketing</h4>
                    <span>9 tasks</span>
                  </div>
                </div>

                <div className="project-progress">
                  <strong>90%</strong>
                  <div className="progress-track">
                    <div className="progress-fill green-fill"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Footer */}
            <div className="dashboard-footer">
              <div className="activity-icon">
                <FiClock />
              </div>

              <div>
                <strong>Great progress!</strong>
                <span>Your team is on track this week.</span>
              </div>

              <FiCheckCircle className="activity-check" />
            </div>
          </div>

          {/* Floating Notification */}
          <div className="floating-notification">
            <div className="notification-icon">
              <FiCheckCircle />
            </div>
            <div>
              <strong>Task Completed!</strong>
              <span>Website homepage is ready.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
