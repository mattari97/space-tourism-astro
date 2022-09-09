import { generateUrl } from '$utils/navigation';

export const APP_ROUTES: App.Route[] = [
  { name: 'home', href: '/' },
  { name: 'destination', href: generateUrl('destination', 'moon') },
  { name: 'crew', href: generateUrl('crew', 'douglas') },
  { name: 'technology', href: generateUrl('technology', 'launch_vehicle') },
];
