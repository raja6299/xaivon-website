export const SEO_CONTENT = {
  'ai-automation': {
    title: 'AI Automation & System Integration',
    description: 'Connect routine back-office workflows with tailored automation and AI assistance, scoped around your existing business tools.',
    badge: 'AI AUTOMATION',
    overview: 'Engineering custom integration layers that connect modern AI models with existing business databases, spreadsheets, and APIs to remove manual re-keying.',
    pillars: [
      { title: 'API & Webhook Glue', desc: 'Secure middleware connecting disconnected SaaS tools without altering existing core schemas.' },
      { title: 'Deterministic Validation', desc: 'Strict schema validation and error traps ensuring only verified data enters operational databases.' },
      { title: 'Human Oversight Gates', desc: 'Configurable approval thresholds where exceptional or high-value actions pause for operator sign-off.' }
    ],
    faqs: [
      { q: 'How does XAIVON integrate with legacy ERPs or internal databases?', a: 'We build scoped REST/webhook adapters or secure microservice proxies that interact with your database using least-privilege credentials.' },
      { q: 'What happens when an automated workflow encounters an unfamiliar data format?', a: 'Workflows fail-safe into an exception queue with full diagnostic logging, alerting your operators rather than corrupting target records.' }
    ]
  },
  'logistics-automation': {
    title: 'Logistics Workflow Automation',
    description: 'Support freight operations and dispatch workflows with tailored data extraction and system integrations, evaluated case-by-case.',
    badge: 'LOGISTICS AUTOMATION',
    overview: 'Purpose-built data pipelines designed for 3PLs and freight brokerages to accelerate quote ingestion, rate card comparison, and status tracking.',
    pillars: [
      { title: 'Unstructured Document Intake', desc: 'Extract structured shipper requirements from PDFs, rate sheets, and unstructured email text.' },
      { title: 'TMS Sync & Validation', desc: 'Direct bidirectional sync with major freight TMS platforms via API or scheduled batch updates.' },
      { title: 'Dispatch Exception Handling', desc: 'Automated monitoring of driver check-ins and delivery confirmations with real-time operator alerts.' }
    ],
    faqs: [
      { q: 'Can this replace our existing Transportation Management System (TMS)?', a: 'No. XAIVON software acts as an operational acceleration layer that feeds clean, validated data into your existing TMS.' },
      { q: 'How are carrier rate quotes verified?', a: 'Rates are checked against predefined rate matrices and contract minimums before any quote draft is generated for customer review.' }
    ]
  },
  'freight-automation': {
    title: 'Freight Process Automation',
    description: 'Explore structured quote processing and operational workflows designed to assist freight brokers with repetitive administrative tasks.',
    badge: 'FREIGHT AUTOMATION',
    overview: 'Operational software pipelines to reduce the manual friction between carrier load requests, quote calculations, and status confirmations.',
    pillars: [
      { title: 'Fast Quote Assembly', desc: 'Compile multi-lane freight estimates from standard pricing schedules in seconds.' },
      { title: 'Carrier Lookup & Status', desc: 'Validate carrier authority, insurance limits, and historical performance prior to load assignment.' },
      { title: 'Audit Trail & Transparency', desc: 'Full timestamped logging of every calculation, communication event, and booking record.' }
    ],
    faqs: [
      { q: 'Does XAIVON independently negotiate rates with carriers?', a: 'No. XAIVON systems present structured rate comparisons and pre-validated quotes; rate agreements remain under broker control.' },
      { q: 'What freight modes are supported?', a: 'Standard workflows accommodate Dry Van, Reefer, Flatbed, and LTL operations with customizable lane criteria.' }
    ]
  },
  'ai-chatbots': {
    title: 'Conversational Support & AI Agents',
    description: 'Deploy scoped conversational assistants and structured voice workflows to handle routine customer enquiries and intake.',
    badge: 'CONVERSATIONAL AI',
    overview: 'Intelligent digital interfaces trained on proprietary business documentation to handle Tier 1 intake, capture lead criteria, and escalate complex inquiries.',
    pillars: [
      { title: 'Knowledge-Grounded Retrieval', desc: 'Answers strictly grounded in your provided documentation, FAQs, and service schedules.' },
      { title: 'Structured Lead Intake', desc: 'Collects verified name, email, company, and project requirements before generating sales notifications.' },
      { title: 'Seamless Human Handoff', desc: 'Instantly transfers complex inquiries, technical questions, or high-intent prospects to human specialists.' }
    ],
    faqs: [
      { q: 'How do you prevent conversational hallucinations?', a: 'We implement strict Retrieval-Augmented Generation (RAG) constraints that instruct the model to defer to human staff when confidence is low.' },
      { q: 'Which communication channels can be integrated?', a: 'Website chat widgets, SMS messaging gateways, and inbound telephone routing via WebRTC/SIP connectors.' }
    ]
  },
  'workflow-automation': {
    title: 'Intelligent Workflow Automation',
    description: 'Connect fragmented software systems to extract, format, and synchronize operational data across your CRM, TMS, or internal databases.',
    badge: 'WORKFLOW AUTOMATION',
    overview: 'Architectural workflows that replace brittle manual copy-pasting between cloud tools with robust, deterministic asynchronous event pipelines.',
    pillars: [
      { title: 'Event-Driven Triggers', desc: 'Execute processes instantly upon webhook delivery, file upload, or database record mutation.' },
      { title: 'Data Transformation & Cleansing', desc: 'Normalize dates, currencies, telephone numbers, and addresses across disparate regional formats.' },
      { title: 'Resilient Queue Architecture', desc: 'Automatic retry schedules with exponential backoff to handle upstream service outages smoothly.' }
    ],
    faqs: [
      { q: 'How are workflow errors monitored?', a: 'All execution failures trigger centralized error alerts with payload snapshots for rapid developer inspection.' },
      { q: 'Can workflows handle high-volume batch processing?', a: 'Yes. Asynchronous queue architectures decouple ingestion from processing, supporting thousands of records per hour.' }
    ]
  },
  'crm-automation': {
    title: 'CRM Data & Lead Management',
    description: 'Reduce manual data entry by extracting structured fields from incoming customer messages and updating your CRM automatically.',
    badge: 'CRM AUTOMATION',
    overview: 'Automated ingestion pipelines that parse inbound leads, deduplicate records, enrich contact details, and update sales pipelines in real time.',
    pillars: [
      { title: 'Lead Parsing & Enrichment', desc: 'Extract clean contact data from contact forms, emails, and landing page submissions.' },
      { title: 'Deduplication Guardrails', desc: 'Check existing database records to update active accounts rather than generating duplicate contacts.' },
      { title: 'Sales Pipeline Routing', desc: 'Automatically assign leads to territory managers based on company size, geography, or service category.' }
    ],
    faqs: [
      { q: 'Which CRMs are supported?', a: 'Native API integrations for HubSpot, Salesforce, Zoho CRM, Pipedrive, and custom PostgreSQL/MySQL backends.' },
      { q: 'Is customer data kept private?', a: 'Yes. All data processing occurs over encrypted TLS connections, and data is never used to train public language models.' }
    ]
  }
};
