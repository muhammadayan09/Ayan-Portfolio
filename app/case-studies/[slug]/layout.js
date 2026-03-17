const caseStudyMeta = {
  'shs-real-estate': {
    title: 'Real Estate Website Case Study | WordPress Dubai',
    description: 'See how we built a luxury real estate website using WordPress and improved speed, SEO rankings, and lead generation.',
  },
  'zyra-delight': {
    title: 'Shopify Ecommerce Case Study | Sales Growth',
    description: 'Discover how we increased ecommerce revenue and conversions using Shopify development and UX optimization strategies.',
  },
  'zuf-dental-care': {
    title: 'Dental SEO Case Study India | Traffic & Leads Growth',
    description: 'Learn how we improved SEO rankings and leads for a dental clinic with technical SEO and website optimization strategies.',
  },
  'silent-stories': {
    title: 'Photography Website Case Study | WordPress Design',
    description: 'Case study of a photography website built on WordPress for weddings and events with modern UI and lead generation focus.',
  },
};

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const meta = caseStudyMeta[slug];
  if (meta) {
    return {
      title: meta.title,
      description: meta.description,
    };
  }
  return {
    title: 'Case Study | PilatuWeb',
    description: 'Explore our web development case studies showcasing real results and business growth.',
  };
}

export default function CaseStudySlugLayout({ children }) {
  return children;
}
