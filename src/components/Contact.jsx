import { useState } from "react";
import {
  FiMail,
  FiMessageCircle,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Content */}
        <div className="contact-content">
          <span className="section-label">GET IN TOUCH</span>

          <h2>
            Let's Build Something
            <span> Great Together.</span>
          </h2>

          <p className="contact-description">
            Have questions about TaskFlow? Want to see how it can improve your
            team's productivity? We'd love to hear from you.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <FiMail />
              </div>

              <div>
                <h4>Email Us</h4>
                <p>hello@taskflow.com</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <FiMessageCircle />
              </div>

              <div>
                <h4>Need Help?</h4>
                <p>Our team is here to help you.</p>
              </div>
            </div>
          </div>

          <div className="contact-note">
            <FiCheckCircle />
            <span>We typically respond within 24 hours.</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card">
          <h3>Request a Free Demo</h3>

          <p className="form-description">
            Fill in your details and we'll get back to you.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>

              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                minLength={10}
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Request a Demo
              <FiArrowRight />
            </button>

            {submitted && (
              <div className="success-message" role="status">
                <FiCheckCircle />
                Thank you! Your demo request has been submitted.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
