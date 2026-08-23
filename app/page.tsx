import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-shell">
      <header className="topbar">
        <div className="brand">TaxFile UK</div>

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

      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">UK TAX FILING SOFTWARE</span>

          <h1>
            File your UK tax return online with a simpler, guided process.
          </h1>

          <p>
            Complete your return step by step, check your figures, review your
            tax position and prepare for HMRC submission from one secure place.
          </p>

          <div className="hero-actions">
            <Link className="primary-button" href="/register">
              Start your tax return
            </Link>

            <Link className="secondary-button" href="/pricing">
              View pricing
            </Link>
          </div>

          <div className="trust-row">
            <span>✓ Secure account</span>
            <span>✓ Save and continue</span>
            <span>✓ Guided checks</span>
            <span>✓ HMRC-ready architecture</span>
          </div>
        </div>

        <div className="hero-panel">
          <div className="status-card">
            <span className="status-label">2025/26 Self Assessment</span>
            <strong>Return progress</strong>

            <div className="progress-track">
              <div className="progress-fill" />
            </div>

            <div className="status-line">
              <span>Completed</span>
              <strong>72%</strong>
            </div>

            <div className="status-grid">
              <div>
                <small>Status</small>
                <strong>Draft</strong>
              </div>

              <div>
                <small>Validation</small>
                <strong>In progress</strong>
              </div>

              <div>
                <small>Tax year</small>
                <strong>2025/26</strong>
              </div>

              <div>
                <small>Submission</small>
                <strong>Not sent</strong>
              </div>
            </div>

            <Link className="primary-button full" href="/register">
              Continue return
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span className="eyebrow">CHOOSE YOUR FILING TYPE</span>
          <h2>Everything you need in one tax filing platform.</h2>
          <p>
            Built for individuals, partnerships, landlords, sole traders and
            accounting professionals.
          </p>
        </div>

        <div className="product-grid">
          <article className="product-card">
            <div className="product-icon">SA</div>
            <h3>Self Assessment</h3>
            <p>
              Guided SA100 filing for individuals, sole traders, landlords and
              people with additional income.
            </p>
            <Link href="/self-assessment">Learn more →</Link>
          </article>

          <article className="product-card">
            <div className="product-icon">P</div>
            <h3>Partnership Return</h3>
            <p>
              Prepare partnership information, partner allocations and SA800
              filing data in one workflow.
            </p>
            <Link href="/partnership">Learn more →</Link>
          </article>

          <article className="product-card">
            <div className="product-icon">VAT</div>
            <h3>MTD VAT</h3>
            <p>
              Keep digital records, review obligations and prepare VAT returns
              through an MTD-ready workflow.
            </p>
            <Link href="/mtd-vat">Learn more →</Link>
          </article>

          <article className="product-card">
            <div className="product-icon">IT</div>
            <h3>MTD Income Tax</h3>
            <p>
              A structured workspace for quarterly updates, annual summaries
              and future MTD Income Tax filing.
            </p>
            <Link href="/mtd-income-tax">Learn more →</Link>
          </article>
        </div>
      </section>

      <section className="how-section">
        <div className="section-heading">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2>From tax details to a checked return.</h2>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <span>01</span>
            <h3>Create your account</h3>
            <p>Choose the filing type and tax year you need.</p>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>Answer guided questions</h3>
            <p>
              We show the sections that match your income and circumstances.
            </p>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>Review and validate</h3>
            <p>
              Check figures, missing information and filing warnings before
              submission.
            </p>
          </div>

          <div className="step-card">
            <span>04</span>
            <h3>Prepare for HMRC filing</h3>
            <p>
              Submission stays protected until the correct HMRC integration and
              approval route is ready.
            </p>
          </div>
        </div>
      </section>

      <section className="agent-section">
        <div>
          <span className="eyebrow">FOR ACCOUNTANTS & AGENTS</span>
          <h2>Manage many clients from one secure workspace.</h2>
          <p>
            Create client records, organise tax years, track returns, review
            filing status and keep an audit history for every client.
          </p>

          <Link className="secondary-button light" href="/agents">
            Explore agent features
          </Link>
        </div>

        <div className="agent-panel">
          <div className="agent-row">
            <span>Client</span>
            <span>Tax year</span>
            <span>Status</span>
          </div>

          <div className="agent-row">
            <strong>Client A</strong>
            <span>2025/26</span>
            <em>Draft</em>
          </div>

          <div className="agent-row">
            <strong>Client B</strong>
            <span>2025/26</span>
            <em>Review</em>
          </div>

          <div className="agent-row">
            <strong>Client C</strong>
            <span>2024/25</span>
            <em>Filed</em>
          </div>
        </div>
      </section>

      <section className="security-section">
        <div className="section-heading">
          <span className="eyebrow">BUILT FOR TRUST</span>
          <h2>Tax data needs serious protection.</h2>
        </div>

        <div className="security-grid">
          <div>
            <strong>Private workspaces</strong>
            <p>User and client records stay separated by account and workspace.</p>
          </div>

          <div>
            <strong>Protected credentials</strong>
            <p>HMRC, database and payment secrets never belong in public code.</p>
          </div>

          <div>
            <strong>Audit-ready records</strong>
            <p>Important filing and account actions can be tracked over time.</p>
          </div>

          <div>
            <strong>Controlled HMRC activation</strong>
            <p>
              Live submission stays disabled until the required integration,
              testing and approval are complete.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <span className="eyebrow">GET STARTED</span>
        <h2>Start your UK tax filing workspace.</h2>
        <p>
          Create an account now and prepare your return in a clear,
          step-by-step workflow.
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
          <Link href="/pricing">Pricing</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/security">Security</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}