import { caseStudies, getCaseStudyBySlug } from '../../data/caseStudies';

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const study = getCaseStudyBySlug(params.slug);
  const canonical = `https://pilatuweb.netlify.app/case-studies/${params.slug}/`;

  if (!study) {
    return {
      title: 'Case Study | PilatuWeb',
      description: 'Explore our web development case studies showcasing real results and business growth.',
      alternates: {
        canonical,
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${study.title} Case Study | PilatuWeb`;
  const description = study.summary;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function CaseStudySlugLayout({ children }) {
  return children;
}
