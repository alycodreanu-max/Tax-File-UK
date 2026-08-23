# HMRC integration boundary

Keep classic Self Assessment filing separate from MTD REST integrations.

- `classic-self-assessment/`: SA100 / SA800 XML filing transport and schemas.
- `mtd/vat/`: VAT MTD REST integration.
- `mtd/itsa/`: Income Tax MTD REST integration.
- `oauth/`: HMRC OAuth flows.
- `fraud-prevention/`: required fraud-prevention headers.
- `sandbox/`: HMRC sandbox-only testing helpers.

Production filing must remain disabled until the relevant HMRC approval,
credentials, validation rules and end-to-end tests are complete.
