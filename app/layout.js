import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://snehaagarwal.com'), // Update with your actual domain
  title: {
    default: "Sneha Agarwal - Chartered Accountant | MBA & MS Finance",
    template: "%s | Sneha Agarwal"
  },
  description: "Results-driven Chartered Accountant with expertise in financial management, fraud detection, and strategic planning. MBA & MS Finance candidate at University of Illinois Chicago specializing in financial analytics and AI-driven solutions.",
  keywords: [
    "Chartered Accountant",
    "Financial Management",
    "Fraud Detection",
    "MBA Finance",
    "Financial Analytics",
    "Cost Optimization",
    "Financial Forecasting",
    "CFE Certified Fraud Examiner",
    "Chicago Financial Professional",
    "AI Fraud Detection",
    "Strategic Finance",
    "Audit and Compliance",
    "GAAP",
    "IFRS",
    "Financial Modeling"
  ],
  authors: [{ name: "Sneha Agarwal" }],
  creator: "Sneha Agarwal",
  publisher: "Sneha Agarwal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snehaagarwal.com",
    title: "Sneha Agarwal - Chartered Accountant | MBA & MS Finance Candidate",
    description: "Results-driven Chartered Accountant with expertise in financial management, fraud detection, and strategic planning. Pursuing dual master's degrees in Business Administration and Finance at University of Illinois Chicago.",
    siteName: "Sneha Agarwal Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Sneha Agarwal - Financial Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneha Agarwal - Chartered Accountant | MBA & MS Finance",
    description: "Financial management expert specializing in fraud detection, cost optimization, and strategic finance. MBA & MS Finance candidate at UIC.",
    images: ["/og-image.jpg"], // You'll need to create this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://snehaagarwal.com",
  },
  category: "Finance & Accounting",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sneha Agarwal",
  jobTitle: "Chartered Accountant | MBA & MS Finance Candidate",
  description: "Results-driven Chartered Accountant with expertise in financial management, fraud detection, and strategic planning",
  url: "https://snehaagarwal.com",
  email: "snehapirthani@gmail.com",
  telephone: "+1-312-399-8494",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US"
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "University of Illinois Chicago",
      sameAs: "https://www.uic.edu"
    },
    {
      "@type": "EducationalOrganization",
      name: "Institute of Chartered Accountants of India",
      sameAs: "https://www.icai.org"
    },
    {
      "@type": "EducationalOrganization",
      name: "Ahmedabad University",
      sameAs: "https://ahduni.edu.in"
    }
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Certified Fraud Examiner (CFE)",
      credentialCategory: "Professional Certification",
      issuedBy: {
        "@type": "Organization",
        name: "Association of Certified Fraud Examiners"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Chartered Accountant",
      credentialCategory: "Professional Certification",
      issuedBy: {
        "@type": "Organization",
        name: "Institute of Chartered Accountants of India"
      }
    }
  ],
  knowsAbout: [
    "Financial Management",
    "Fraud Detection",
    "Financial Forecasting",
    "Cost Optimization",
    "Audit and Compliance",
    "US GAAP",
    "IFRS",
    "Financial Analytics",
    "AI/ML in Finance",
    "Strategic Finance"
  ],
  sameAs: [
    "https://linkedin.com/in/snehaagarwal",
    "mailto:snehapirthani@gmail.com"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#34656D" />
        
        {/* Verification Tags (add when you have them) */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}