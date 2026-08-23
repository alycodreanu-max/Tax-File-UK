import Link from "next/link";

const individualPlans = [
  {
    name: "Self Assessment",
    price: "£39",
    note: "per return",
    description:
      "For individuals, sole traders, landlords and people with additional income.",
    features: [
      "Guided SA100 return",
      "Save and continue",
      "Validation checks",
      "Tax summary",
      "Review before filing",
      "Downloadable return record",
    ],
    href: "/register",
    featured: true,
  },
  {
    name: "Partnership Return",
    price: "£59",
    note: "per return",
    description:
      "For partnerships that need a structured SA800 preparation and review workflow.",
    features: [
      "Partnership details",
      "Partner allocations",
      "Trading income sections",
      "Property and other income",
      "Validation checks",
      "Return review",
    ],
    href: "/register",
  },
  {
    name: "MTD VAT",
    price: "£8",
    note: "per month",
    description:
      "For businesses that need an MTD-ready VAT workspace and bridging flow.",
    features: [
      "VAT obligations",
      "VAT return workspace",
      "Spreadsheet bridging",
      "Liabilities and payments area",
      "Digital record workflow",
      "HMRC connection architecture",
    ],
    href: "/register",
  },
  {
    name: "MTD Income Tax",
    price: "Coming soon",
    note: "",
    description:
      "For sole traders and landlords preparing for the MTD Income Tax journey.",
    features: [
      "Business records",
      "Quarterly update workspace",
      "Annual summary workflow",
      "Calculation area",
      "Final declaration structure",
      "MTD-ready filing workflow",
    ],
    href: "/mtd-income-tax",
  },
];

const agentPlans = [
  {
    name: "Agent Starter",
    price: "£19",
    note: "per month",
    description: "For small practices managing a growing client list.",
    features: [
      "Up to 10 active clients",
      "Client workspace",
      "Return status tracking",
      "Document area",
      "Audit history",
      "Email support",
    ],
  },
  {
    name: "Agent Professional",
    price: "£49",
    note: "per month",
    description: "For accountants and agents managing regular filing work.",
    features: [
      "Up to 50 active clients",
      "Multi-client dashboard",
      "Tax year tracking",
      "Submission status",
      "Client authorisation area",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Agent Practice",
    price: "Custom",
    note: "",
    description: "For larger practices that need higher client capacity.",
    features: [
      "Higher client limits",
      "Team access",
      "Role-based permissions",
      "Practice reporting",
      "Advanced audit history",
      "Commercial onboarding",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="pricing-page">
      <header className="topbar">
        <Link className="brand" href="/">
          TaxFile UK
        </Link>

        <nav className="nav-links">
          <Link href="/self-assessment">Self Assessment</Link>
          <Link href="/partnership">Partnership</Link>
          <Link href="/mtd-vat">MTD VAT</Link>
          <Link href="/mtd-income-tax">MTD Income Tax</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
        </nav>

        <div className="nav-actions">
          <Link className="login-link" href="/login">
            Login
          </Link>
          <Link className="primary-button small" href="/register">
            Register
          </Link>
        </div>
      </header>

      <section className="pricing-hero">
        <span className="eyebrow">CLEAR PRICING</span>

        <h1>Choose the tax filing plan that fits your needs.</h1>

        <p>
          Start with one return or manage many clients. No live HMRC submission
          is enabled until the correct integration and approval route is ready.
        </p>

        <div className="pricing-trust">
          <span>✓ No hidden setup fee</span>
          <span>✓ Save your work</span>
          <span>✓ Secure workspace</span>
          <span>✓ Upgrade when needed</span>
        </div>
      </section>

      <section className="pricing-section">
        <div className="pricing-heading">
          <div>
            <span className="eyebrow">INDIVIDUAL & BUSINESS</span>
            <h2>Pay for the filing service you need.</h2>
          </div>

          <p>
  Choose the service that matches your filing needs, with clear pricing and
  the features included before you start.
</p>
        </div>

        <div className="pricing-grid">
          {individualPlans.map((plan) => (
            <article
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="popular-badge">Most popular</span>
              )}

              <h3>{plan.name}</h3>

              <p className="pricing-description">{plan.description}</p>

              <div className="price-row">
                <strong>{plan.price}</strong>
                {plan.note && <span>{plan.note}</span>}
              </div>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <Link
                className={
                  plan.featured
                    ? "primary-button full"
                    : "secondary-button pricing-button"
                }
                href={plan.href}
              >
                {plan.price === "Coming soon" ? "Learn more" : "Get started"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="agent-pricing-section">
        <div className="pricing-heading light-heading">
          <div>
            <span className="eyebrow">ACCOUNTANTS & AGENTS</span>
            <h2>One workspace for many clients.</h2>
          </div>

          <p>
            Track clients, tax years, returns, documents and filing progress in
            one practice workspace.
          </p>
        </div>

        <div className="agent-pricing-grid">
          {agentPlans.map((plan) => (
            <article
              className={`agent-price-card ${plan.featured ? "featured" : ""}`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="popular-badge">Best for practices</span>
              )}

              <h3>{plan.name}</h3>
              <p>{plan.description}</p>

              <div className="price-row">
                <strong>{plan.price}</strong>
                {plan.note && <span>{plan.note}</span>}
              </div>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <Link
                className={
                  plan.featured
                    ? "primary-button full"
                    : "secondary-button light pricing-button"
                }
                href="/register"
              >
                Start account
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-compare">
        <div className="section-heading">
          <span className="eyebrow">WHAT IS INCLUDED</span>
          <h2>Core features across the platform.</h2>
        </div>

        <div className="compare-table">
          <div className="compare-row compare-head">
            <span>Feature</span>
            <span>Individual</span>
            <span>Agent</span>
          </div>

          <div className="compare-row">
            <span>Secure account</span>
            <strong>✓</strong>
            <strong>✓</strong>
          </div>

          <div className="compare-row">
            <span>Save and continue</span>
            <strong>✓</strong>
            <strong>✓</strong>
          </div>

          <div className="compare-row">
            <span>Validation workflow</span>
            <strong>✓</strong>
            <strong>✓</strong>
          </div>

          <div className="compare-row">
            <span>Client management</span>
            <span>—</span>
            <strong>✓</strong>
          </div>

          <div className="compare-row">
            <span>Multi-return tracking</span>
            <span>—</span>
            <strong>✓</strong>
          </div>

          <div className="compare-row">
            <span>Audit history</span>
            <strong>✓</strong>
            <strong>✓</strong>
          </div>

          <div className="compare-row">
            <span>HMRC integration</span>
            <span>Controlled activation</span>
            <span>Controlled activation</span>
          </div>
        </div>
      </section>

      <section className="pricing-faq">
        <div className="section-heading">
          <span className="eyebrow">PRICING QUESTIONS</span>
          <h2>Simple answers before you start.</h2>
        </div>

        <div className="pricing-faq-grid">
          <div>
            <h3>Can I start without paying?</h3>
            <p>
  You can prepare your return in your workspace and review the details before
  you move to the final filing stage.
</p>
          </div>

          <div>
            <h3>Can I amend a return?</h3>
            <p>
              Amendment workflows are part of the product structure and will
              follow the relevant HMRC rules for each filing service.
            </p>
          </div>

          <div>
            <h3>Can accountants manage many clients?</h3>
            <p>
              Yes. Agent plans are designed around multi-client workspaces,
              client records, tax years and filing status.
            </p>
          </div>

          <div>
            <h3>Is HMRC filing live already?</h3>
            <p>
  HMRC submission will be available only after the required production
  credentials, testing and approval are complete.
</p>
          </div>
        </div>

        <Link className="secondary-button" href="/faq">
          View all FAQs
        </Link>
      </section>

      <section className="cta-section">
        <span className="eyebrow">READY TO START?</span>
        <h2>Create your TaxFile UK workspace.</h2>
        <p>
          Start with one return today and move to a multi-client account when
          your filing needs grow.
        </p>

        <Link className="primary-button" href="/register">
          Create account
        </Link>
      </section>

      <footer className="footer">
        <div>
          <strong>TaxFile UK</strong>
          <p>UK tax filing software foundation.</p>
        </div>

        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}