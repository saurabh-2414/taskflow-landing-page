import { FiUserPlus, FiLayers, FiTrendingUp } from "react-icons/fi";

import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      icon: <FiUserPlus />,
      title: "Create Your Workspace",
      description:
        "Sign up and create your workspace in seconds. Invite your team members and bring everyone together.",
    },
    {
      id: 2,
      number: "02",
      icon: <FiLayers />,
      title: "Organize Your Projects",
      description:
        "Create projects, assign tasks, set priorities and deadlines to keep your team organized.",
    },
    {
      id: 3,
      number: "03",
      icon: <FiTrendingUp />,
      title: "Track Your Progress",
      description:
        "Monitor project progress, review completed tasks and keep your team moving towards success.",
    },
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">
        {/* Section Heading */}
        <div className="how-heading">
          <span className="section-label">SIMPLE WORKFLOW</span>

          <h2>
            Get Started in
            <span> Three Simple Steps</span>
          </h2>

          <p>
            Managing projects doesn't have to be complicated. Get your team
            started with TaskFlow in just a few steps.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.id}>
              <div className="step-top">
                <div className="step-icon">{step.icon}</div>

                <span className="step-number">{step.number}</span>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="how-cta">
          <p>Ready to make teamwork easier?</p>

          <a href="#pricing">Start Your Journey</a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
