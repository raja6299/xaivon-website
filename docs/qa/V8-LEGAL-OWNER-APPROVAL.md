# XAIVON — V8 Legal Clause Owner Review & Approval Register

**Document ID:** `docs/qa/V8-LEGAL-OWNER-APPROVAL.md`
**Date:** October 16, 2026
**Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED (RELEASE BLOCKER)**
**Operating Entity:** ADABHRA GROUP (Sole Proprietorship, India; Proprietor: Raja Babu)
**Registered Jurisdiction:** West Champaran, Bihar, India
**Target Pull Request:** PR #3 (`feat/xaivon-editorial-dual-theme-sot-v3`)

---

## 1. Executive Summary & Objective

During the independent audit of repository `raja6299/xaivon-website`, material commitments were identified within the legal documents (`/refund-policy`, `/terms`, `/privacy-policy`).

Website legal terms published by a sole proprietorship cannot bind enterprise clients to unagreed SOW terms, cannot create unhedged operational obligations (such as fixed business-day response warranties), and cannot override non-waivable statutory rights under applicable Indian law (including the Consumer Protection Act, 2019, Information Technology Act, 2000, and DPDP Act, 2023 with staged DPDP Rules, 2025).

This document catalogs every material clause, articulates the exact text, identifies operational assumptions and potential risks, provides conservative contract-dependent proposals, and presents the consolidated register for explicit, informed owner sign-off.

> [!IMPORTANT]
> **GATE REQUIREMENT:** No merge into `main` or production release shall occur until the owner explicitly signs off on this register.

---

## 2. Material Clause Review Matrix

### Group A: Refund & Cancellation Policy (`/refund-policy`)

#### Clause RP-01: Consulting & Discovery Fees Non-Refundability
* **Route & Section:** `/refund-policy` — Section 2 (`#consulting`)
* **Current Text in Branch:**
  > "Initial discovery assessments, architectural audits, and workflow mapping engagements involve dedicated engineering hours. Unless otherwise stipulated in the governing Statement of Work (SOW), fees for completed assessment sessions or delivered technical audit documentation are deemed fully earned and non-refundable."
* **Operational Assumption:** Discovery sessions and deliverable audits represent irreversible technical work hours.
* **Risk / Legal Assessment:** Qualifies that executed SOWs govern. Protects unperformed service disputes under consumer law.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

#### Clause RP-02: Milestone Sign-off and Mid-Milestone Proration
* **Route & Section:** `/refund-policy` — Section 3 (`#custom`)
* **Current Text in Branch:**
  > "Multi-phase engineering projects are structured around defined milestones set forth in the applicable Statement of Work. Upon formal client acceptance or milestone sign-off, the associated fee is deemed earned. Cancellation mid-milestone is governed by the termination provisions of the executed agreement, typically accounting for completed deliverables, committed resources, and work in progress."
* **Operational Assumption:** Fixed-scope enterprise engagements are governed exclusively by their executed SOW termination provisions.
* **Risk / Legal Assessment:** Eliminates blanket hourly timesheet exposure for fixed-fee deliverables while ensuring fair reconciliation.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

#### Clause RP-03: Third-Party Infrastructure and Software Costs
* **Route & Section:** `/refund-policy` — Section 4 (`#thirdparty`)
* **Current Text in Branch:**
  > "Expenses incurred on behalf of a client for third-party software licenses, API subscriptions (such as OpenAI, Anthropic, Twilio, or cloud hosting), specialized connectors, or compute resources are non-refundable once provisioned or committed."
* **Operational Assumption:** Third-party vendor charges incurred during integration are pass-through costs that upstream providers do not refund.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

#### Clause RP-04: Cancellation Notice Period
* **Route & Section:** `/refund-policy` — Section 5 (`#cancellation`)
* **Current Text in Branch:**
  > "Either party may terminate an active professional services agreement in accordance with the notice period specified in the executed project agreement. Upon effective termination, active engineering ceases, and an itemized reconciliation invoice is issued reflecting completed deliverables and work performed up to the effective termination date."
* **Operational Assumption:** Defers notice period strictly to the executed project agreement without publishing an arbitrary 14–30 day figure.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

#### Clause RP-05: Ongoing Retainer Non-Refundability
* **Route & Section:** `/refund-policy` — Section 6 (`#retainer`)
* **Current Text in Branch:**
  > "Monthly workflow maintenance and optimization retainers are billed in advance for each billing cycle. A retainer may be cancelled prior to the renewal date of the next billing cycle. Retainer fees for the currently active cycle are non-refundable once the cycle has commenced."
* **Operational Assumption:** Retainers reserve dedicated capacity in advance and cannot be clawed back mid-month once commenced.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

#### Clause RP-06: Remediation Window
* **Route & Section:** `/refund-policy` — Section 7 (`#disputes`)
* **Current Text in Branch:**
  > "If a client identifies that a deliverable does not satisfy the agreed technical specifications in the applicable Statement of Work, the parties will adhere to the review and remediation procedure agreed in the contract, engaging in good-faith technical review before escalating formal dispute proceedings."
* **Operational Assumption:** Defers dispute remediation to executed SOW procedure rather than asserting a rigid public 14-day warranty.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

#### Clause RP-07: Response Window
* **Route & Section:** `/refund-policy` — Section 9 (`#request`)
* **Current Text in Branch:**
  > "To submit a formal cancellation notice or discuss milestone reconciliation, email raja@xaivon.com with your project reference, organisation name, and details of the request. We endeavor to review and respond to formal correspondence within five business days."
* **Operational Assumption:** Reasonable sole proprietorship endeavor SLA without creating an unconditional technical warranty.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

### Group B: Terms of Service (`/terms`)

#### Clause TS-01: Intellectual Property of Brand and Code
* **Route & Section:** `/terms` — Section 6 (`#ip`)
* **Current Text in Branch:**
  > "All brand assets, text copy, graphic arrangements, layout architectures, and proprietary software representations on xaivon.com are the intellectual property of ADABHRA GROUP or its licensors and are protected under applicable copyright and intellectual property laws."
* **Operational Assumption:** XAIVON brand and website codebase are owned exclusively by ADABHRA GROUP.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

#### Clause TS-02: Broad Limitation of Liability
* **Route & Section:** `/terms` — Section 10 (`#liability`)
* **Current Text in Branch:**
  > "To the maximum extent permitted by applicable law, ADABHRA GROUP and its proprietor shall not be held liable for indirect, incidental, consequential, or punitive damages arising out of your access to or inability to use this informational website."
* **Operational Assumption:** Informational browsing carries no enterprise liability.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

#### Clause TS-03: Broad Indemnity Clause
* **Route & Section:** `/terms` — Section 12 (`#indemnity`)
* **Current Text in Branch:**
  > "You agree to defend, indemnify, and hold harmless ADABHRA GROUP, its proprietor, and associates against claims, losses, or expenses resulting from your violation of these website terms or improper usage of site features."
* **Operational Assumption:** Visitor abuse, malicious payloads, or rate limit circumvention can cause legal/infrastructural damage.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

#### Clause TS-04: Exclusive Bihar Court Jurisdiction
* **Route & Section:** `/terms` — Section 14 (`#governing`)
* **Current Text in Branch:**
  > "These terms of service and any disputes arising out of the use of this website shall be governed by and construed in accordance with the laws of India. Competent courts in Bihar, India shall have exclusive jurisdiction over legal matters arising under these website terms."
* **Operational Assumption:** Sole proprietorship is based in West Champaran, Bihar; legal forum convenience is preserved in Bihar courts for public website disputes.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

### Group C: Privacy Policy (`/privacy-policy`)

#### Clause PP-01: Marketing Absence Commitment
* **Route & Section:** `/privacy-policy` — Section 4 (`#purpose`)
* **Current Text in Branch:**
  > "Information submitted through our website is used strictly to evaluate your operational requirements, respond to enquiries, formulate project proposals, coordinate scheduled strategy calls, and protect the infrastructure from abuse. General web enquiries are never added to bulk marketing lists."
* **Operational Assumption:** Inbound web forms are routed exclusively via transactional email (`raja@xaivon.com`) and never ingested into mass automated marketing email tools.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

#### Clause PP-02: Specified Infrastructure Processors
* **Route & Section:** `/privacy-policy` — Section 6 (`#services`)
* **Current Text in Branch:**
  > "We rely on reputable technical service providers to maintain website availability, deliver notifications, and enforce security policies:
  > - Vercel: Static site hosting, serverless execution, and edge routing.
  > - Resend: Secure transactional routing of enquiry submissions.
  > - Upstash Redis: API abuse prevention and IP-based rate limiting.
  > - Calendly: Optional meeting scheduling widget.
  > - Google Analytics: Optional consent-gated usage analysis."
* **Operational Assumption:** Accurately reflects the current runtime architecture.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

#### Clause PP-03: Statutory Rights & DPDP Act 2023 / Rules 2025 Staged Commencement
* **Route & Section:** `/privacy-policy` — Section 10 (`#rights`)
* **Current Text in Branch:**
  > "Depending on your jurisdiction and applicable data protection legislation—including India's Digital Personal Data Protection Act, 2023 (DPDP Act) and the notified Digital Personal Data Protection Rules, 2025, operating under their phased commencement provisions—you may have specific statutory rights as a Data Principal. These include the right to access a summary of personal data processed, request correction or erasure of incomplete or inaccurate data, access grievance redressal, and designate a nominee. To exercise any of these rights, submit a written request with verifying context to raja@xaivon.com."
* **Operational Assumption:** Explicitly notes phased / staged commencement under Ministry of Electronics and Information Technology (MeitY) notifications, ensuring accuracy regarding operative provisions.
* **Status:** **OWNER REVIEW — APPROVAL NOT VERIFIED**

---

## 3. Owner Decision & Approval Register

| Clause ID | Clause Subject | Status in Code | Owner Status | Decision Context |
| :--- | :--- | :--- | :--- | :--- |
| **RP-01** | Discovery Fee Non-Refundability | Implemented in `/refund-policy` §2 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **RP-02** | Milestone & Mid-Milestone Proration | Implemented in `/refund-policy` §3 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **RP-03** | Third-party Pass-through Costs | Implemented in `/refund-policy` §4 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **RP-04** | Notice Period (contract-governed) | Implemented in `/refund-policy` §5 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **RP-05** | Monthly Retainer Renewal | Implemented in `/refund-policy` §6 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **RP-06** | SOW Remediation Procedure | Implemented in `/refund-policy` §7 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **RP-07** | 5-day Endeavor Response Window | Implemented in `/refund-policy` §9 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **TS-01** | Intellectual Property Ownership | Implemented in `/terms` §6 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **TS-02** | Limitation of Liability | Implemented in `/terms` §10 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **TS-03** | Indemnity Clause | Implemented in `/terms` §12 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **TS-04** | Exclusive Bihar Jurisdiction | Implemented in `/terms` §14 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **PP-01** | No Bulk Marketing Commitment | Implemented in `/privacy-policy` §4 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **PP-02** | Infrastructure Sub-processors | Implemented in `/privacy-policy` §6 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |
| **PP-03** | DPDP Act 2023 & Rules 2025 Rights | Implemented in `/privacy-policy` §10 | **OWNER REVIEW — APPROVAL NOT VERIFIED** | Awaiting explicit owner sign-off |

---

## 4. Operational Sign-off Boundary

Until the owner provides explicit informed approval:
- **No merge to `main` shall be triggered.**
- **The PR remains strictly on `feat/xaivon-editorial-dual-theme-sot-v3`.**
