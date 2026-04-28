import { readdir, access } from 'fs/promises';
import path from 'path';

const locationOverrides = {
  delhi: {
    city: 'Delhi',
    title: 'Website Agency In Delhi',
    desc: 'A focused city page for businesses that want a better website, cleaner design direction, and a stronger online first impression.',
    tone: 'Live now',
    focus: ['Business websites', 'Redesigns', 'Landing pages'],
  },
  noida: {
    city: 'Noida',
    title: 'Website Agency In Noida',
    desc: 'A city page for Noida businesses looking for a more modern website, clearer brand presentation, and stronger digital trust.',
    tone: 'Live now',
    focus: ['Business websites', 'Service pages', 'Brand refresh'],
  },
  gurgaon: {
    city: 'Gurgaon',
    title: 'Website Agency In Gurgaon',
    desc: 'A focused page for Gurgaon businesses that need a premium website presence, better visual clarity, and stronger conversion flow.',
    tone: 'Live now',
    focus: ['Premium websites', 'Landing pages', 'Website redesigns'],
  },
};

function formatCityName(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

async function hasPageFile(dirPath) {
  try {
    await access(path.join(dirPath, 'page.js'));
    return true;
  } catch {
    return false;
  }
}

export async function getLocationPages() {
  const locationsDir = path.join(process.cwd(), 'app', 'locations');
  const entries = await readdir(locationsDir, { withFileTypes: true });

  const locations = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const slug = entry.name;
        const dirPath = path.join(locationsDir, slug);
        const pageExists = await hasPageFile(dirPath);

        if (!pageExists) {
          return null;
        }

        const override = locationOverrides[slug] || {};
        const city = override.city || formatCityName(slug);

        return {
          slug,
          city,
          title: override.title || `Website Agency In ${city}`,
          desc:
            override.desc ||
            `A city-focused website page for businesses in ${city} looking for a stronger digital presence and a cleaner online presentation.`,
          tone: override.tone || 'Live now',
          focus: override.focus || ['Business websites', 'Service pages', 'Website growth'],
          href: `/locations/${slug}`,
        };
      })
  );

  return locations.filter(Boolean).sort((a, b) => a.city.localeCompare(b.city));
}
