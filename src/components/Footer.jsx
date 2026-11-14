import {
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Footer Main Content */}
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-icon">T</span>
              TaskFlow
            </a>

            <p>
              Plan smarter, collaborate better and achieve more. TaskFlow brings
              your entire team together in one simple workspace.
            </p>

            {/* Social Links */}
            <div className="footer-socials">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-column">
            <h4>Product</h4>

            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Request Demo</a>
          </div>

          {/* Company Links */}
          <div className="footer-column">
            <h4>Company</h4>

            <a href="#home">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#home">Our Team</a>
            <a href="#home">Careers</a>
          </div>

          {/* Support Links */}
          <div className="footer-column">
            <h4>Support</h4>

            <a href="#contact">Help Center</a>
            <a href="#contact">Contact Support</a>
            <a href="#contact">FAQs</a>
            <a href="mailto:hello@taskflow.com">
              Email Us
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>

          <div className="footer-legal">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
