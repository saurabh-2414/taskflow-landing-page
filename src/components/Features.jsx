
import {
  FiCheckSquare,
  FiUsers,
  FiBarChart2,
  FiCalendar,
  FiFolder,
  FiMessageCircle
} from "react-icons/fi";

import "./Features.css";

const Features = () => {

  const features = [
    {
      id: 1,
      icon: <FiCheckSquare />,
      title: "Smart Task Management",
      description:
        "Create, organize, assign and prioritize tasks to keep your team focused and productive.",
      color: "purple"
    },
    {
      id: 2,
      icon: <FiUsers />,
      title: "Team Collaboration",
      description:
        "Bring your team together, share updates and work collaboratively from one workspace.",
      color: "blue"
    },
    {
      id: 3,
      icon: <FiBarChart2 />,
      title: "Progress Tracking",
      description:
        "Monitor project performance and track progress with clear visual insights.",
      color: "green"
    },
    {
      id: 4,
      icon: <FiCalendar />,
      title: "Deadline Management",
      description:
        "Stay organized with project schedules, deadlines and upcoming task reminders.",
      color: "orange"
    },
    {
      id: 5,
      icon: <FiFolder />,
      title: "Project Organization",
      description:
        "Manage multiple projects, keep resources organized and access everything easily.",
      color: "pink"
    },
    {
      id: 6,
      icon: <FiMessageCircle />,
      title: "Team Communication",
      description:
        "Keep conversations and project updates connected with your team's daily workflow.",
      color: "cyan"
    }
  ];

  return (
    <section className="features-section" id="features">

      <div className="features-container">

        {/* Section Heading */}
        <div className="features-heading">

          <span className="section-label">
            POWERFUL FEATURES
          </span>

          <h2>
            Everything You Need to
            <span> Work Smarter</span>
          </h2>

          <p>
            From planning to execution, TaskFlow gives your team
            all the tools needed to manage projects and achieve
            better results.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="features-grid">

          {features.map((feature) => (

            <div className="feature-card" key={feature.id}>

              <div className={`feature-icon ${feature.color}`}>
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;
