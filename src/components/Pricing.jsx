import { useState } from "react";
import { FiCheck, FiX, FiArrowRight } from "react-icons/fi";
import "./Pricing.css";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      id: 1,
      name: "Free",
      description: "Perfect for individuals and small teams.",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { text: "Up to 3 projects", included: true },
        { text: "Basic task management", included: true },
        { text: "Up to 3 team members", included: true },
        { text: "Basic progress tracking", included: true },
        { text: "Priority support", included: false },
      ],
      popular: false,
      buttonText: "Get Started Free",
    },
    {
      id: 2,
      name: "Pro",
      description: "Advanced tools for growing teams.",
      monthlyPrice: 499,
      yearlyPrice: 399,
      features: [
        { text: "Unlimited projects", included: true },
        { text: "Advanced task management", included: true },
        { text: "Unlimited team members", included: true },
        { text: "Advanced progress tracking", included: true },
        { text: "Priority support", included: true },
      ],
      popular: true,
      buttonText: "Get Started with Pro",
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        {/* Section Heading */}
        <div className="pricing-heading">
          <span className="section-label">SIMPLE PRICING</span>

          <h2>
            Plans That Grow With
            <span> Your Team</span>
          </h2>

          <p>
            Start for free and upgrade whenever your team needs more powerful
            tools.
          </p>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <button
              className={billing === "monthly" ? "active" : ""}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>

            <button
              className={billing === "yearly" ? "active" : ""}
              onClick={() => setBilling("yearly")}
            >
              Yearly
              <span className="save-badge">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan) => {
            const price =
              billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <div
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
                key={plan.id}
              >
                {plan.popular && (
                  <span className="popular-badge">Most Popular</span>
                )}

                <h3>{plan.name}</h3>

                <p className="plan-description">{plan.description}</p>

                <div className="plan-price">
                  <h2>
                    ₹{price}
                    <span>/month</span>
                  </h2>

                  {billing === "yearly" && plan.id === 2 && (
                    <small>Billed annually</small>
                  )}
                </div>

                <a
                  href="#contact"
                  className={`plan-button ${plan.popular ? "pro-button" : ""}`}
                >
                  {plan.buttonText}
                  <FiArrowRight />
                </a>

                <div className="plan-divider"></div>

                <h4>What's included:</h4>

                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      {feature.included ? (
                        <FiCheck className="included-icon" />
                      ) : (
                        <FiX className="excluded-icon" />
                      )}

                      <span className={!feature.included ? "excluded" : ""}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="pricing-note">
          No hidden fees. Choose a plan that works for your team.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
