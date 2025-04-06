const LogoStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://urbanculture.me/",
  "logo": "https://storage.googleapis.com/urbanculture5.appspot.com/webimages/logo3_dark.webp"
};

const AppStructuredData = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	"name": "Urban Culture - Salon at home",
	"operatingSystem": "ANDROID",
	"applicationCategory": "LifestyleApplication",
	"aggregateRating": {
	  "@type": "AggregateRating",
	  "ratingValue": "4.0",
	  "ratingCount": "454"
	},
	"offers": {
	  "@type": "Offer",
	  "price": "24.00",
	  "priceCurrency": "INR"
	}
  };

const StructuredDataHome = 
{
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "URBAN CULTURE",
	"alternateName": "https://urbanculture.me/",
	"url": "https://urbanculture.me/",
	"logo": "https://storage.googleapis.com/urbanculture5.appspot.com/webimages/logo3_dark.webp",
	"contactPoint": {
	  "@type": "ContactPoint",
	  "telephone": "+91 1169119197",
	  "contactType": "customer service",
	  "contactOption": "TollFree",
	  "areaServed": "IN",
	  "availableLanguage": ["en","Hindi"]
	},
	"sameAs": [
	  "https://www.facebook.com/UrbanCulture.beauty/",
	  "https://www.instagram.com/urbanculture_beauty/",
	  "https://in.linkedin.com/company/urban-culture-app"
	]
  }
const BreadCrumbStructuredDataServices = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
	"@type": "ListItem", 
	"position": 1, 
	"name": "Services",
	"item": "https://urbanculture.me/services",
	"description":
		"Premium Salon Services at Home - Hair Care, Facial & More | Urban Culture"
  }]
};

const BreadCrumbStructuredDataPartners = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [{
	  "@type": "ListItem", 
	  "position": 1, 
	  "name": "Partner",
	  "item": "https://urbanculture.me/partner",
	  "description":
		  "Partner with Urban Culture | Join & get upto 5 lakh insurance | Urban Culture"
	}]
  };

const BreadCrumbStructuredDataCareers = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	"itemListElement": [
	  {
		"@type": "ListItem",
		"position": 1,
		"name": "Careers",
		"item": "https://urbanculture.me/careers",
		"description":
		  "Premium Salon Services at Home - Hair Care, Facial & More | Urban Culture"
	  }
	]
  };

const BreadCrumbStructuredDataAbout = {
	"@context": "https://schema.org/", 
	"@type": "BreadcrumbList", 
	"itemListElement": [{
	  "@type": "ListItem", 
	  "position": 1, 
	  "name": "About",
	  "item": "https://urbanculture.me/about-us",
	  "description":
		  "About Urban Culture - India's Leading Online Home Salon | Urban Culture"
	}]
  }


const BreadCrumbStructuredDataBlogs = {
	"@context": "https://schema.org/", 
	"@type": "BreadcrumbList", 
	"itemListElement": [{
	  "@type": "ListItem", 
	  "position": 1, 
	  "name": "Blogs",
	  "item": "https://urbanculture.me/blogs",
	  "description":
		  "The Urban Strokes - Beauty, Hair, Makeup & Skin Care Blogs | Urban Culture"
	}]
  }

export {
  AppStructuredData,
  LogoStructuredData,
  StructuredDataHome,
  BreadCrumbStructuredDataServices,
  BreadCrumbStructuredDataPartners,
  BreadCrumbStructuredDataCareers,
  BreadCrumbStructuredDataBlogs,
  BreadCrumbStructuredDataAbout
};
