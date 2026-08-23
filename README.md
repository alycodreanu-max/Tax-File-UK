# TaxFile UK SaaS

GitHub-ready foundation for a UK tax filing SaaS.

## Included product areas
- marketing site and pricing
- authentication and user settings
- accountant/agent multi-client workspace
- SA100 workflow
- SA800 workflow
- MTD VAT workflow
- MTD Income Tax workflow
- spreadsheet import/bridging
- HMRC connection screens and API boundaries
- billing
- admin console
- audit/security/test areas
- PostgreSQL/Prisma multi-tenant starter schema

## Safety
All API route placeholders return `501` and all HMRC production filing is disabled.
Do not turn on production filing until the relevant HMRC specifications, credentials,
recognition/testing and security controls are implemented and verified.

## Local start
```bash
npm install
npm run dev
```

## Important
This repository is an original scaffold. It is designed to match the functional
category and journeys of UK tax-filing software without copying proprietary
branding, source code, copy or visual assets.
