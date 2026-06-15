export default function SchemaMarkup({ type, data }) {
  let schema = {};

  if (type === 'Organization') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "XAIVON",
      "url": "https://xaivon.com",
      "logo": "https://xaivon.com/og-image.png",
      "description": "Premium AI Infrastructure & Logistics Automation Company",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "raja@xaivon.com",
        "contactType": "sales",
        "availableLanguage": "English"
      }
    };
  } else if (type === 'Service') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": data.name,
      "provider": {
        "@type": "Organization",
        "name": "XAIVON"
      },
      "description": data.description
    };
  } else if (type === 'FAQ') {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };
  } else if (type === 'Breadcrumb') {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": data.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://xaivon.com${item.path}`
      }))
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
