import LocationsPageClient from './LocationsPageClient';
import { getLocationPages } from './location-data';

export default async function LocationsPage() {
  const featuredLocations = await getLocationPages();

  return <LocationsPageClient featuredLocations={featuredLocations} />;
}
