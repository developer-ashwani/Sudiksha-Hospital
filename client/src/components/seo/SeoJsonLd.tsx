export default function SeoJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Sudiksha Hospital",
    "description": "Leading healthcare provider in Patna specializing in comprehensive eye care and neuropsychiatry services",
    "url": "https://sudikshahospital.com",
    "logo": "https://sudikshahospital.com/images/logo.png",
    "image": "https://sudikshahospital.com/images/hospital-exterior.jpg",
    "telephone": "+919117217024",
    "email": "hospitalsudiksha@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, Above IDBI Bank, Near Pramod Laddu Bhandar, Arya Kumar Road",
      "addressLocality": "Rajendranagar",
      "addressRegion": "Bihar",
      "postalCode": "800016",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.6093",
      "longitude": "85.1376"
    },
    "openingHours": [
      "Mo-Sa 09:00-20:00",
      "Su 10:00-18:00"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Cataract Surgery"
      },
      {
        "@type": "MedicalProcedure",
        "name": "LASIK Surgery"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Retinal Treatment"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Psychiatric Consultation"
      }
    ],
    "physician": [
      {
        "@type": "Physician",
        "name": "Dr. Priyanka Sharma",
        "medicalSpecialty": "Ophthalmology",
        "telephone": "+919117217024",
        "worksFor": {
          "@type": "Hospital",
          "name": "Sudiksha Hospital"
        }
      },
      {
        "@type": "Physician",
        "name": "Dr. Vinay Kumar",
        "medicalSpecialty": "Neuropsychiatry",
        "telephone": "+919117217024",
        "worksFor": {
          "@type": "Hospital",
          "name": "Sudiksha Hospital"
        }
      }
    ],
    "hasCredential": "Certified Healthcare Provider",
    "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
    "currenciesAccepted": "INR"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
