import Link from "next/link";

const faqGroups = [
  {
    title: "Getting started",
    items: [
      {
        question: "What is TaxFile UK?",
        answer:
          "TaxFile UK is a guided UK tax filing platform for individuals, businesses, partnerships, accountants and agents. It is designed to help you prepare, review and manage tax returns in one secure workspace.",
      },
      {
        question: "Do I need tax knowledge to use it?",
        answer:
          "No. The return flow is designed around clear questions and guided sections. You still remain responsible for making sure the information you provide is correct.",
      },
      {
        question: "Can I save my return and finish it later?",
        answer:
          "Yes. Your workspace is designed so you can save your progress, return later and continue from where you stopped.",
      },
      {
        question: "Which tax returns will TaxFile UK support?",
        answer:
          "The platform structure includes Self Assessment, partnership returns, MTD VAT and MTD Income Tax workflows, with separate journeys for individuals and accounting professionals.",
      },
    ],
  },
  {
    title: "Self Assessment",
    items: [
      {
        question: "Who can use the Self Assessment service?",
        answer:
          "The Self Assessment journey is designed for individuals who may have employment income, self-employment income, property income, investment income, pensions, capital gains or other information that belongs on a UK Self Assessment return.",
      },
      {
        question: "Does the platform include SA100 sections?",
        answer:
          "Yes. The product structure includes the main SA100 journey and supporting sections for areas such as employment, self-employment, property, foreign income, capital gains, pensions, interest, dividends and tax reliefs.",
      },
      {
        question: "Can I review my return before filing?",
        answer:
          "Yes. The workflow includes validation, calculation, review and declaration stages before a return reaches the filing stage.",
      },
      {
        question: "Can I amend a return?",
        answer:
          "The product includes an amendment workflow. The exact filing rules and availability will follow the requirements for the relevant tax year and HMRC filing service.",
      },
    ],
  },
  {
    title: "Partnership returns",
    items: [
      {
        question: "Does TaxFile UK support partnership returns?",
        answer:
          "Yes. The platform includes a structured SA800 journey for partnership details, partners, trading information, property, other income, allocations, calculations and validation.",
      },
      {
        question: "Can I enter multiple partners?",
        answer:
          "Yes. The partnership workspace is designed to support partner records and the allocation of partnership information.",
      },
      {
        question: "Can an accountant prepare partnership returns for clients?",
        answer:
          "Yes. Agent workspaces are designed for accountants and tax professionals who manage returns across multiple clients.",
      },
    ],
  },
  {
    title: "MTD VAT",
    items: [
      {
        question: "What does the MTD VAT area include?",
        answer:
          "The MTD VAT workspace includes VAT obligations, return preparation, liabilities, payments and spreadsheet bridging areas.",
      },
      {
        question: "Can I use a spreadsheet?",
        answer:
          "The platform includes a spreadsheet import and mapping workflow designed for digital record and bridging use cases.",
      },
      {
        question: "Will TaxFile UK connect to HMRC for VAT?",
        answer:
          "The architecture includes the HMRC MTD VAT API connection layer. Production access will only be enabled after the required HMRC credentials, testing and approval are complete.",
      },
    ],
  },
  {
    title: "MTD Income Tax",
    items: [
      {
        question: "What is included in the MTD Income Tax area?",
        answer:
          "The product structure includes businesses, obligations, quarterly updates, annual summaries, calculations and final declaration workflows.",
      },
      {
        question: "Can sole traders use it?",
        answer:
          "The MTD Income Tax workspace is being designed for relevant sole trader and property income use cases, subject to the applicable HMRC rules and requirements.",
      },
      {
        question: "Is MTD Income Tax filing active now?",
        answer:
          "The workflow is being prepared for MTD Income Tax. Production submission will only be activated after the required HMRC integration, credentials and testing are complete.",
      },
    ],
  },
  {
    title: "Accountants & agents",
    items: [
      {
        question: "Can accountants manage many clients?",
        answer:
          "Yes. The agent workspace is designed around multi-client management, tax years, returns, documents, filing status and activity history.",
      },
      {
        question: "Can different team members have access?",
        answer:
          "The architecture includes organisation users and role-based access so team permissions can be controlled as the agent product is activated.",
      },
      {
        question: "Can I see the filing status for each client?",
        answer:
          "Yes. Client and return dashboards are designed to show draft, review, filing and other return states.",
      },
      {
        question: "Will client information be kept separate?",
        answer:
          "Yes. Client and organisation data is designed around scoped records and protected workspaces so one client should not gain access to another client's information.",
      },
    ],
  },
  {
    title: "HMRC filing",
    items: [
      {
        question: "Is TaxFile UK already connected to HMRC?",
        answer:
          "The HMRC integration architecture is included, but production filing will only be activated after the relevant HMRC credentials, technical testing and approval process are complete.",
      },
      {
        question: "Why is HMRC filing controlled?",
        answer:
          "Tax submission is a high-trust action. The platform keeps production submission protected until the correct HMRC service, credentials, validation and testing are in place.",
      },
      {
        question: "Will I see the HMRC response after filing?",
        answer:
          "The submission architecture includes status, receipt and submission-history areas so filing results can be recorded and shown to the user once live filing is activated.",
      },
      {
        question: "Are SA100 and MTD filing handled the same way?",
        answer:
          "No. The platform keeps classic Self Assessment filing separate from MTD API integrations because they use different technical filing routes.",
      },
    ],
  },
  {
    title: "Security & privacy",
    items: [
      {
        question: "How will my tax data be protected?",
        answer:
          "The product is being built with private workspaces, access controls, protected credentials, audit records, input validation and data separation as core requirements.",
      },
      {
        question: "Are HMRC passwords or API secrets stored in GitHub?",
        answer:
          "No. Production credentials and secrets must never be stored in the public source repository. They belong in protected environment settings.",
      },
      {
        question: "Can another customer see my return?",
        answer:
          "The system is designed so users and organisations only access records inside their authorised workspace.",
      },
      {
        question: "Will important actions be recorded?",
        answer:
          "The product includes audit and submission-history areas for important account, filing and administrative actions.",
      },
    ],
  },
  {
    title: "Pricing & payments",
    items: [
      {
        question: "How much does TaxFile UK cost?",
        answer:
          "Pricing depends on the filing service and account type. You can see the current plans on the Pricing page.",
      },
      {
        question: "Are there agent plans?",
        answer:
          "Yes. Agent plans are designed for practices that need multi-client management and higher filing capacity.",
      },
      {
        question: "Will payment happen before filing?",
        answer:
          "The final payment and filing rules will be clearly shown before commercial payment activation so users know exactly what is required before submission.",
      },
      {
        question: "Are there hidden setup fees?",
        answer:
          "The goal is clear pricing. Any applicable charge should be shown before you commit to the service.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="faq-page">
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

      <section className="faq-hero">
        <span className="eyebrow">HELP CENTRE</span>

        <h1>Questions about TaxFile UK?</h1>

        <p>
          Find clear answers about returns, HMRC filing, MTD, accountants,
          security, pricing and how the platform works.
        </p>

        <div className="faq-hero-actions">
          <Link className="primary-button" href="/register">
            Create account
          </Link>

          <Link className="secondary-button faq-light-button" href="/contact">
            Contact support
          </Link>
        </div>
      </section>

      <section className="faq-layout">
        <aside className="faq-sidebar">
          <span className="faq-sidebar-label">FAQ categories</span>

          {faqGroups.map((group, index) => (
            <a key={group.title} href={`#faq-${index}`}>
              {group.title}
            </a>
          ))}

          <div className="faq-help-card">
            <strong>Still need help?</strong>
            <p>Contact us if your question is not covered here.</p>
            <Link href="/contact">Contact support →</Link>
          </div>
        </aside>

        <div className="faq-content">
          {faqGroups.map((group, groupIndex) => (
            <section
              className="faq-group"
              id={`faq-${groupIndex}`}
              key={group.title}
            >
              <div className="faq-group-heading">
                <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                <h2>{group.title}</h2>
              </div>

              <div className="faq-list">
                {group.items.map((item) => (
                  <details className="faq-item" key={item.question}>
                    <summary>
                      <span>{item.question}</span>
                      <strong>+</strong>
                    </summary>

                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="faq-safety-section">
        <div>
          <span className="eyebrow">HMRC FILING STATUS</span>
          <h2>Production filing only goes live when it is ready.</h2>
        </div>

        <p>
          TaxFile UK keeps HMRC production submission controlled until the
          required integration, credentials, validation, testing and approval
          are complete.
        </p>
      </section>

      <section className="cta-section">
        <span className="eyebrow">READY TO START?</span>
        <h2>Create your TaxFile UK workspace.</h2>
        <p>
          Start preparing your tax information in a clear, guided workspace.
        </p>

        <Link className="primary-button" href="/register">
          Create account
        </Link>
      </section>

      <footer className="footer">
        <div>
          <strong>TaxFile UK</strong>
          <p>UK tax filing software.</p>
        </div>

        <div className="footer-links">
          <Link href="/">Home</Link>
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