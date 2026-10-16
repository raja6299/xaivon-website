# XAIVON — V8 Legal Clause Owner Review & Approval Register

**Document ID:** `docs/qa/V8-LEGAL-OWNER-APPROVAL.md`
**Date:** October 16, 2026
**Status:** **APPROVED BY OWNER**
**Operating Entity:** ADABHRA GROUP (Sole Proprietorship, India; Proprietor: Raja Babu)
**Registered Jurisdiction:** West Champaran, Bihar, India
**Target Pull Request:** PR #3 (`feat/xaivon-editorial-dual-theme-sot-v3`)

---

## 1. Executive Summary & Objective

During the independent V8 release audit of repository `raja6299/xaivon-website`, material commitments were identified within the legal documents (`/refund-policy`, `/terms`, `/privacy-policy`). 

Website legal terms published by a sole proprietorship cannot bind enterprise clients to unagreed SOW terms, cannot create unhedged operational obligations (such as fixed business-day response warranties), and cannot override non-waivable statutory rights under applicable Indian law (including the Consumer Protection Act, 2019, Information Technology Act, 2000, and DPDP Act, 2023 with staged DPDP Rules, 2025).

On October 16, 2026, the repository and business owner reviewed this register in full and provided explicit sign-off adopting all 14 Recommended Conservative Replacements across Refund Policy, Terms of Service, and Privacy Policy.

---

## 2. Material Clause Review Matrix

### Group A: Refund & Cancellation Policy (`/refund-policy`)

#### Clause RP-01: Consulting & Discovery Fees Non-Refundability
* **Route & Section:** `/refund-policy` — Section 2 (`#consulting`)
* **Adopted Text:**
  > "Initial discovery assessments, architectural audits, and workflow mapping engagements involve dedicated engineering hours. Unless otherwise stipulated in the governing Statement of Work (SOW), fees for completed assessment sessions or delivered technical audit documentation are deemed fully earned and non-refundable."
* **Operational Assumption:** Discovery sessions and deliverable audits represent irreversible technical work hours.
* **Status:** **APPROVED BY OWNER**

---

#### Clause RP-02: Milestone Sign-off and Mid-Milestone Proration
* **Route & Section:** `/refund-policy` — Section 3 (`#custom`)
* **Adopted Text:**
  > "Multi-phase engineering projects are structured around defined milestones set forth in the applicable Statement of Work. Upon formal client acceptance or milestone sign-off, the associated fee is deemed earned. Cancellation mid-milestone is governed by the termination provisions of the executed agreement, typically accounting for completed deliverables, committed resources, and work in progress."
* **Operational Assumption:** Fixed-scope enterprise engagements are governed exclusively by their executed SOW termination provisions.
* **Status:** **APPROVED BY OWNER**

---

#### Clause RP-03: Third-Party Infrastructure and Software Costs
* **Route & Section:** `/refund-policy` — Section 4 (`#thirdparty`)
* **Adopted Text:**
  > "Expenses incurred on behalf of a client for third-party software licenses, API subscriptions (such as OpenAI, Anthropic, Twilio, or cloud hosting), specialized connectors, or compute resources are non-refundable once provisioned or committed."
* **Operational Assumption:** Third-party vendor charges incurred during integration are pass-through costs that upstream providers do not refund.
* **Status:** **APPROVED BY OWNER**

---

#### Clause RP-04: Cancellation Notice Period
* **Route & Section:** `/refund-policy` — Section 5 (`#cancellation`)
* **Adopted Text:**
  > "Either party may terminate an active professional services agreement in accordance with the notice period specified in the executed project agreement. Upon effective termination, active engineering ceases, and an itemized reconciliation invoice is issued reflecting completed deliverables and work performed up to the effective termination date."
* **Operational Assumption:** Defer notice period strictly to the executed project agreement without arbitrary default figures.
* **Status:** **APPROVED BY OWNER**

---

#### Clause RP-05: Ongoing Retainer Non-Refundability
* **Route & Section:** `/refund-policy` — Section 6 (`#retainer`)
* **Adopted Text:**
  > "Monthly workflow maintenance and optimization retainers are billed in advance for each billing cycle. A retainer may be cancelled prior to the renewal date of the next billing cycle. Retainer fees for the currently active cycle are non-refundable once the cycle has commenced."
* **Operational Assumption:** Retainers reserve dedicated capacity in advance and cannot be clawed back mid-month once commenced.
* **Status:** **APPROVED BY OWNER**

---

#### Clause RP-06: Remediation Window
* **Route & Section:** `/refund-policy` — Section 7 (`#disputes`)
* **Adopted Text:**
  > "If a client identifies that a deliverable does not satisfy the agreed technical specifications in the applicable Statement of Work, the parties will adhere to the review and remediation procedure agreed in the contract, engaging in good-faith technical review before escalating formal dispute proceedings."
* **Operational Assumption:** Defers dispute remediation to executed SOW procedure rather than asserting a rigid public 14-day warranty.
* **Status:** **APPROVED BY OWNER**

---

#### Clause RP-07: Response Window
* **Route & Section:** `/refund-policy` — Section 9 (`#request`)
* **Adopted Text:**
  > "To submit a formal cancellation notice or discuss milestone reconciliation, email raja@xaivon.com with your project reference, organisation name, and details of the request. We endeavor to review and respond to formal correspondence within five business days."
* **Operational Assumption:** Reasonable sole proprietorship endeavor SLA without creating an unconditional technical warranty.
* **Status:** **APPROVED BY OWNER**

---

### Group B: Terms of Service (`/terms`)

#### Clause TS-01: Intellectual Property of Brand and Code
* **Route & Section:** `/terms` — Section 6 (`#ip`)
* **Adopted Text:**
  > "All brand assets, text copy, graphic arrangements, layout architectures, and proprietary software representations on xaivon.com are the intellectual property of ADABHRA GROUP or its licensors and are protected under applicable copyright and intellectual property laws."
* **Operational Assumption:** XAIVON brand and website codebase are owned exclusively by ADABHRA GROUP.
* **Status:** **APPROVED BY OWNER**

---

#### Clause TS-02: Broad Limitation of Liability
* **Route & Section:** `/terms` — Section 10 (`#liability`)
* **Adopted Text:**
  > "To the maximum extent permitted by applicable law, ADABHRA GROUP and its proprietor shall not be held liable for indirect, incidental, consequential, or punitive damages arising out of your access to or inability to use this informational website."
* **Operational Assumption:** Informational browsing carries no enterprise liability.
* **Status:** **APPROVED BY OWNER**

---

#### Clause TS-03: Broad Indemnity Clause
* **Route & Section:** `/terms` — Section 12 (`#indemnity`)
* **Adopted Text:**
  > "You agree to defend, indemnify, and hold harmless ADABHRA GROUP, its proprietor, and associates against claims, losses, or expenses resulting from your violation of these website terms or improper usage of site features."
* **Operational Assumption:** Visitor abuse, malicious payloads, or rate limit circumvention can cause legal/infrastructural damage.
* **Status:** **APPROVED BY OWNER**

---

#### Clause TS-04: Exclusive Bihar Court Jurisdiction
* **Route & Section:** `/terms` — Section 14 (`#governing`)
* **Adopted Text:**
  > "These terms of service and any disputes arising out of the use of this website shall be governed by and construed in accordance with the laws of India. Competent courts in Bihar, India shall have exclusive jurisdiction over legal matters arising under these website terms."
* **Operational Assumption:** Sole proprietorship is based in West Champaran, Bihar; legal forum convenience is preserved in Bihar courts for public website disputes.
* **Status:** **APPROVED BY OWNER**

---

### Group C: Privacy Policy (`/privacy-policy`)

#### Clause PP-01: Marketing Absence Commitment
* **Route & Section:** `/privacy-policy` — Section 4 (`#purpose`)
* **Adopted Text:**
  > "Information submitted through our website is used strictly to evaluate your operational requirements, respond to enquiries, formulate project proposals, coordinate scheduled strategy calls, and protect the infrastructure from abuse. General web enquiries are never added to bulk marketing lists."
* **Operational Assumption:** Inbound web forms are routed exclusively via transactional email (`raja@xaivon.com`) and never ingested into mass automated marketing email tools.
* **Status:** **APPROVED BY OWNER**

---

#### Clause PP-02: Specified Infrastructure Processors
* **Route & Section:** `/privacy-policy` — Section 6 (`#services`)
* **Adopted Text:**
  > "We rely on reputable technical service providers to maintain website availability, deliver notifications, and enforce security policies:
  > - Vercel: Static site hosting, serverless execution, and edge routing.
  > - Resend: Secure transactional routing of enquiry submissions.
  > - Upstash Redis: API abuse prevention and IP-based rate limiting.
  > - Calendly: Optional meeting scheduling widget.
  > - Google Analytics: Optional consent-gated usage analysis."
* **Operational Assumption:** Accurately reflects the current runtime architecture.
* **Status:** **APPROVED BY OWNER**

---

#### Clause PP-03: Statutory Rights & DPDP Act 2023 / Rules 2025 Staged Commencement
* **Route & Section:** `/privacy-policy` — Section 10 (`#rights`)
* **Adopted Text:**
  > "Depending on your jurisdiction and applicable data protection legislation—including India's Digital Personal Data Protection Act, 2023 (DPDP Act) and the notified Digital Personal Data Protection Rules, 2025, operating under their phased commencement provisions—you may have specific statutory rights as a Data Principal. These include the right to access a summary of personal data processed, request correction or erasure of incomplete or inaccurate data, access grievance redressal, and designate a nominee. To exercise any of these rights, submit a written request with verifying context to raja@xaivon.com."
* **Operational Assumption:** Explicitly notes phased / staged commencement under Ministry of Electronics and Information Technology (MeitY) notifications, ensuring accuracy regarding operative provisions.
* **Status:** **APPROVED BY OWNER**

---

## 3. Owner Decision & Approval Register

| Clause ID | Clause Subject | Status in Code | Owner Decision | Approved Text / Resolution |
| :--- | :--- | :--- | :--- | :--- |
| **RP-01** | Discovery Fee Non-Refundability | Implemented in `/refund-policy` §2 | **APPROVED BY OWNER** | Conservative replacement active |
| **RP-02** | Milestone & Mid-Milestone Proration | Implemented in `/refund-policy` §3 | **APPROVED BY OWNER** | Conservative replacement active |
| **RP-03** | Third-party Pass-through Costs | Implemented in `/refund-policy` §4 | **APPROVED BY OWNER** | Current wording approved |
| **RP-04** | Notice Period (14 to 30 days) | Implemented in `/refund-policy` §5 | **APPROVED BY OWNER** | Contract-dependent wording active |
| **RP-05** | Monthly Retainer Renewal | Implemented in `/refund-policy` §6 | **APPROVED BY OWNER** | Current wording approved |
| **RP-06** | 14-day Remediation Window | Implemented in `/refund-policy` §7 | **APPROVED BY OWNER** | Contract-dependent wording active |
| **RP-07** | 5-day Response Window | Implemented in `/refund-policy` §9 | **APPROVED BY OWNER** | Hedged SLA wording active |
| **TS-01** | Intellectual Property Ownership | Implemented in `/terms` §6 | **APPROVED BY OWNER** | Current wording approved |
| **TS-02** | Limitation of Liability | Implemented in `/terms` §10 | **APPROVED BY OWNER** | Current wording approved |
| **TS-03** | Indemnity Clause | Implemented in `/terms` §12 | **APPROVED BY OWNER** | Current wording approved |
| **TS-04** | Exclusive Bihar Jurisdiction | Implemented in `/terms` §14 | **APPROVED BY OWNER** | Current wording approved |
| **PP-01** | No Bulk Marketing Commitment | Implemented in `/privacy-policy` §4 | **APPROVED BY OWNER** | Current wording approved |
| **PP-02** | Infrastructure Sub-processors | Implemented in `/privacy-policy` §6 | **APPROVED BY OWNER** | Current wording approved |
| **PP-03** | DPDP Act 2023 & Rules 2025 Rights | Implemented in `/privacy-policy` §10 | **APPROVED BY OWNER** | Current wording approved |

---

## 4. Sign-off Confirmation

* **Review Date:** October 16, 2026
* **Authorized Sign-off By:** Repository & Business Owner (Raja Babu, Proprietor, ADABHRA GROUP)
* **Release Gate Status:** **PASSED / RESOLVED**
