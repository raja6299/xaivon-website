# XAIVON — V8 Legal Clause Owner Review & Approval Register

**Document ID:** `docs/qa/V8-LEGAL-OWNER-APPROVAL.md`  
**Date:** October 15, 2026  
**Status:** **OWNER APPROVAL REQUIRED (RELEASE BLOCKER)**  
**Operating Entity:** ADABHRA GROUP (Sole Proprietorship, India; Proprietor: Raja Babu)  
**Registered Jurisdiction:** West Champaran, Bihar, India  
**Target Pull Request:** PR #3 (`feat/xaivon-editorial-dual-theme-sot-v3`)

---

## 1. Executive Summary & Objective

During the independent V8 release audit of repository `raja6299/xaivon-website`, material commitments were identified within the legal documents (`/refund-policy`, `/terms`, `/privacy-policy`). 

Website legal terms published by a sole proprietorship cannot bind enterprise clients to unagreed SOW terms, cannot create unhedged operational obligations (such as fixed business-day response warranties), and cannot override non-waivable statutory rights under applicable Indian law (including the Consumer Protection Act, 2019, Information Technology Act, 2000, and DPDP Act, 2023 with staged DPDP Rules, 2025).

This document catalogs every material clause, articulates the exact text, identifies operational assumptions and potential risks, provides conservative contract-dependent alternative proposals, and leaves the final binding decision to the repository and business owner.

> [!IMPORTANT]
> **GATE REQUIREMENT:** No merge into `main` or production release shall occur until the owner explicitly approves, modifies, or adopts the proposed alternatives below.

---

## 2. Material Clause Review Matrix

### Group A: Refund & Cancellation Policy (`/refund-policy`)

#### Clause RP-01: Consulting & Discovery Fees Non-Refundability
* **Route & Section:** `/refund-policy` — Section 2 (`#consulting`)
* **Exact Current Text:**
  > "Initial discovery assessments, architectural audits, and workflow mapping engagements involve dedicated engineering hours. Fees allocated to completed discovery phases are non-refundable once the assessment session has been conducted or the technical audit deliverable has been delivered."
* **Operational Assumption:** Discovery sessions and deliverable audits represent irreversible technical work hours.
* **Risk / Legal Obligation:** Declaring fees unconditionally non-refundable on a public website without reference to the executed proposal or contract could conflict with consumer protection statutes if services are materially deficient or unperformed.
* **Proposed Status:** **AMEND (OWNER APPROVAL REQUIRED)**
* **Proposed Conservative Alternative:**
  > "Initial discovery assessments, architectural audits, and workflow mapping engagements involve dedicated engineering hours. Unless otherwise stipulated in the governing Statement of Work (SOW), fees for completed assessment sessions or delivered technical audit documentation are deemed fully earned and non-refundable."

---

#### Clause RP-02: Milestone Sign-off and Mid-Milestone Proration
* **Route & Section:** `/refund-policy` — Section 3 (`#custom`)
* **Exact Current Text:**
  > "Multi-phase engineering projects are structured around defined milestones (e.g., Architecture Design, Integration Build, User Acceptance Testing, and Deployment). Upon formal client sign-off of a milestone, the associated milestone fee is deemed earned and is non-refundable. If a project is cancelled mid-milestone, fees are prorated based on verifiable engineering hours completed up to the date of cancellation notice."
* **Operational Assumption:** Projects will always maintain verifiable, audit-proof hourly timesheets for fixed-fee milestones.
* **Risk / Legal Obligation:** Fixed-scope enterprise engagements are rarely billed hourly by default; committing publicly to hourly proration mid-milestone might legally expose XAIVON to forced timesheet disclosures and disputes on fixed-price projects.
* **Proposed Status:** **AMEND (OWNER APPROVAL REQUIRED)**
* **Proposed Conservative Alternative:**
  > "Multi-phase engineering projects are structured around defined milestones set forth in the applicable Statement of Work. Upon formal client acceptance or milestone sign-off, the associated fee is deemed earned. Cancellation mid-milestone is governed by the termination provisions of the executed agreement, typically accounting for completed deliverables, committed resources, and work in progress."

---

#### Clause RP-03: Third-Party Infrastructure and Software Costs
* **Route & Section:** `/refund-policy` — Section 4 (`#thirdparty`)
* **Exact Current Text:**
  > "Expenses incurred on behalf of a client for third-party software licenses, API subscriptions (such as OpenAI, Anthropic, Twilio, or cloud hosting), specialized connectors, or compute resources are non-refundable once provisioned or committed."
* **Operational Assumption:** Third-party vendor charges incurred during integration are pass-through costs that upstream providers do not refund.
* **Risk / Legal Obligation:** Low risk, standard commercial defense, provided client authorization was obtained prior to provisioning.
* **Proposed Status:** **ACCEPT (OWNER APPROVAL REQUIRED)**
* **Proposed Conservative Alternative:**
  > (Current wording is standard and commercially sound, provided procurement is authorized under the applicable SOW).

---

#### Clause RP-04: Cancellation Notice Period ("Typically 14 to 30 days")
* **Route & Section:** `/refund-policy` — Section 5 (`#cancellation`)
* **Exact Current Text:**
  > "Either party may terminate an active professional services agreement by providing written notice as stipulated in the executed project contract (typically 14 to 30 days). Upon termination, work ceases, and an itemized reconciliation invoice is issued reflecting completed deliverables and unbilled work in progress."
* **Operational Assumption:** Client contracts contain bilateral written termination windows between 14 and 30 days.
* **Risk / Legal Obligation:** "Typically" creates ambiguity; individual SOWs or MSAs should exclusively dictate termination notice.
* **Proposed Status:** **AMEND (OWNER APPROVAL REQUIRED)**
* **Proposed Conservative Alternative:**
  > "Either party may terminate an active professional services agreement in accordance with the notice period specified in the executed project agreement. Upon effective termination, active engineering ceases, and an itemized reconciliation invoice is issued reflecting completed deliverables and work performed up to the effective termination date."

---

#### Clause RP-05: Ongoing Retainer Non-Refundability
* **Route & Section:** `/refund-policy` — Section 6 (`#retainer`)
* **Exact Current Text:**
  > "Monthly workflow maintenance and optimization retainers are billed in advance for each billing cycle. A retainer may be cancelled prior to the renewal date of the next billing cycle. Retainer fees for the currently active cycle are non-refundable once the cycle has commenced."
* **Operational Assumption:** Retainers reserve dedicated capacity in advance and cannot be clawed back mid-month.
* **Risk / Legal Obligation:** Commercially standard for SaaS / ongoing technical support; needs qualification that service was made available.
* **Proposed Status:** **ACCEPT (OWNER APPROVAL REQUIRED)**

---

#### Clause RP-06: Remediation Window ("Typically 14 business days")
* **Route & Section:** `/refund-policy` — Section 7 (`#disputes`)
* **Exact Current Text:**
  > "If a client believes a deliverable does not satisfy the technical specifications detailed in the agreed Statement of Work, we provide an agreed remediation window (typically 14 business days) to review and correct the deliverable in good faith before any formal claim is lodged."
* **Operational Assumption:** 14 business days is sufficient to rectify any complex automation or model integration failure.
* **Risk / Legal Obligation:** Website wording could inadvertently create an affirmative legal warranty or a binding 14-day SLA on custom engineering where external APIs or third-party outages cause issues.
* **Proposed Status:** **AMEND (OWNER APPROVAL REQUIRED)**
* **Proposed Conservative Alternative:**
  > "If a client identifies that a deliverable does not satisfy the agreed technical specifications in the applicable Statement of Work, the parties will adhere to the review and remediation procedure agreed in the contract, engaging in good-faith technical review before escalating formal dispute proceedings."

---

#### Clause RP-07: Guaranteed Response Window ("Within five business days")
* **Route & Section:** `/refund-policy` — Section 9 (`#request`)
* **Exact Current Text:**
  > "To submit a formal cancellation notice or discuss milestone reconciliation, email raja@xaivon.com with your project reference, organisation name, and reason for the request. We review and respond to formal requests within five business days."
* **Operational Assumption:** Sole proprietor is always available to acknowledge and respond within 5 business days without exception.
* **Risk / Legal Obligation:** Unhedged SLA commitment creates potential technical breach of published policy during holidays or sickness.
* **Proposed Status:** **AMEND (OWNER APPROVAL REQUIRED)**
* **Proposed Conservative Alternative:**
  > "To submit a formal cancellation notice or discuss milestone reconciliation, email raja@xaivon.com with your project reference, organisation name, and details of the request. We endeavor to review and respond to formal correspondence within five business days."

---

### Group B: Terms of Service (`/terms`)

#### Clause TS-01: Intellectual Property of Brand and Code
* **Route & Section:** `/terms` — Section 6 (`#ip`)
* **Exact Current Text:**
  > "All brand assets, text copy, graphic arrangements, layout architectures, and proprietary software representations on xaivon.com are the intellectual property of ADABHRA GROUP or its licensors and are protected under applicable copyright and intellectual property laws."
* **Operational Assumption:** XAIVON brand and website codebase are owned exclusively by ADABHRA GROUP.
* **Risk / Legal Obligation:** Necessary clause protecting website copyright. Does not prejudice client IP transfer clauses agreed in paid client SOWs.
* **Proposed Status:** **ACCEPT (OWNER APPROVAL REQUIRED)**

---

#### Clause TS-02: Broad Limitation of Liability
* **Route & Section:** `/terms` — Section 10 (`#liability`)
* **Exact Current Text:**
  > "To the maximum extent permitted by applicable law, ADABHRA GROUP and its proprietor shall not be held liable for indirect, incidental, consequential, or punitive damages arising out of your access to or inability to use this informational website."
* **Operational Assumption:** Informational browsing carries no enterprise liability.
* **Risk / Legal Obligation:** Standard and essential protective clause for public websites.
* **Proposed Status:** **ACCEPT (OWNER APPROVAL REQUIRED)**

---

#### Clause TS-03: Broad Indemnity Clause
* **Route & Section:** `/terms` — Section 12 (`#indemnity`)
* **Exact Current Text:**
  > "You agree to defend, indemnify, and hold harmless ADABHRA GROUP, its proprietor, and associates against claims, losses, or expenses resulting from your violation of these website terms or improper usage of site features."
* **Operational Assumption:** Visitor abuse, malicious payloads, or rate limit circumvention can cause legal/infrastructural damage.
* **Risk / Legal Obligation:** Standard website defense; covers third-party damage claims caused by site abuse.
* **Proposed Status:** **ACCEPT / COUNSEL REVIEW (OWNER APPROVAL REQUIRED)**

---

#### Clause TS-04: Exclusive Bihar Court Jurisdiction
* **Route & Section:** `/terms` — Section 14 (`#governing`)
* **Exact Current Text:**
  > "These terms of service and any disputes arising out of the use of this website shall be governed by and construed in accordance with the laws of India. Competent courts in Bihar, India shall have exclusive jurisdiction over legal matters arising under these website terms."
* **Operational Assumption:** Sole proprietorship is based in West Champaran, Bihar; legal forum convenience is preserved in Bihar courts.
* **Risk / Legal Obligation:** Applicable to website usage; client enterprise SOWs may separately negotiate neutral arbitration or jurisdictional seats.
* **Proposed Status:** **ACCEPT (OWNER APPROVAL REQUIRED)**

---

### Group C: Privacy Policy (`/privacy-policy`)

#### Clause PP-01: Marketing Absence Commitment
* **Route & Section:** `/privacy-policy` — Section 4 (`#purpose`)
* **Exact Current Text:**
  > "Information submitted through our website is used strictly to evaluate your operational requirements, respond to enquiries, formulate project proposals, coordinate scheduled strategy calls, and protect the infrastructure from abuse. General web enquiries are never added to bulk marketing lists."
* **Operational Assumption:** Inbound web forms are routed exclusively via transactional email (`raja@xaivon.com`) and never ingested into mass automated marketing email tools.
* **Risk / Legal Obligation:** If marketing newsletters are introduced in the future, this clause must be revised prior to launch. True today.
* **Proposed Status:** **ACCEPT (OWNER APPROVAL REQUIRED)**

---

#### Clause PP-02: Specified Infrastructure Processors
* **Route & Section:** `/privacy-policy` — Section 6 (`#services`)
* **Exact Current Text:**
  > "We rely on reputable technical service providers to maintain website availability, deliver notifications, and enforce security policies:
  > - Vercel: Static site hosting, serverless execution, and edge routing.
  > - Resend: Secure transactional routing of enquiry submissions.
  > - Upstash Redis: API abuse prevention and IP-based rate limiting.
  > - Calendly: Optional meeting scheduling widget.
  > - Google Analytics: Optional consent-gated usage analysis."
* **Operational Assumption:** Accurately reflects the current runtime architecture.
* **Risk / Legal Obligation:** Full compliance with transparency obligations under DPDP Act 2023.
* **Proposed Status:** **ACCEPT (OWNER APPROVAL REQUIRED)**

---

#### Clause PP-03: Statutory Rights & DPDP Act 2023 / Rules 2025 Staged Commencement
* **Route & Section:** `/privacy-policy` — Section 10 (`#rights`)
* **Exact Current Text:**
  > "Depending on your jurisdiction and applicable data protection legislation—including India's Digital Personal Data Protection Act, 2023 (DPDP Act) and the notified Digital Personal Data Protection Rules, 2025, operating under their phased commencement provisions—you may have specific statutory rights as a Data Principal. These include the right to access a summary of personal data processed, request correction or erasure of incomplete or inaccurate data, access grievance redressal, and designate a nominee. To exercise any of these rights, submit a written request with verifying context to raja@xaivon.com."
* **Operational Assumption:** Explicitly notes phased / staged commencement under Ministry of Electronics and Information Technology (MeitY) notifications, ensuring accuracy regarding operative provisions.
* **Risk / Legal Obligation:** Accurate and forward-looking disclosure that avoids premature claims while upholding Data Principal rights.
* **Proposed Status:** **ACCEPT (OWNER APPROVAL REQUIRED)**

---

## 3. Owner Decision & Approval Form

| Clause ID | Clause Subject | Current Status in Code | Owner Choice (ACCEPT / AMEND / REMOVE / COUNSEL REVIEW) | Approved Text / Direction |
| :--- | :--- | :--- | :--- | :--- |
| **RP-01** | Discovery Fee Non-Refundability | Current text in `/refund-policy` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **RP-02** | Milestone & Mid-Milestone Proration | Current text in `/refund-policy` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **RP-03** | Third-party Pass-through Costs | Current text in `/refund-policy` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **RP-04** | Notice Period (14 to 30 days) | Current text in `/refund-policy` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **RP-05** | Monthly Retainer Renewal | Current text in `/refund-policy` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **RP-06** | 14-day Remediation Window | Current text in `/refund-policy` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **RP-07** | 5-day Response Window | Current text in `/refund-policy` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **TS-01** | Intellectual Property Ownership | Current text in `/terms` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **TS-02** | Limitation of Liability | Current text in `/terms` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **TS-03** | Indemnity Clause | Current text in `/terms` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **TS-04** | Exclusive Bihar Jurisdiction | Current text in `/terms` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **PP-01** | No Bulk Marketing Commitment | Current text in `/privacy-policy` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **PP-02** | Infrastructure Sub-processors | Current text in `/privacy-policy` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |
| **PP-03** | DPDP Act 2023 & Rules 2025 Rights | Current text in `/privacy-policy` | `OWNER APPROVAL REQUIRED` | Pending Owner Decision |

---

## 4. Operational Sign-off Boundary

Until the owner provides written approval on this register:
- **No changes are made to signed commercial agreements.**
- **No merge to `main` shall be triggered.**
- **The PR remains strictly on `feat/xaivon-editorial-dual-theme-sot-v3`.**
