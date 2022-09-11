import { generateUrl, Param, Route } from '$utils/navigation';

export const APP_ROUTES: App.Route<Route | 'home'>[] = [
  { name: 'home', href: '/' },
  { name: 'destination', href: generateUrl('destination', 'moon') },
  { name: 'crew', href: generateUrl('crew', 'douglas') },
  { name: 'technology', href: generateUrl('technology', 'launch_vehicle') },
];

export const BASE_ROUTES = ['home', 'destination', 'crew', 'technology'];

export const DESTINATION_ROUTES: Param<'destination'>[] = ['moon', 'mars', 'europa', 'titan'];

export const CREW_ROUTES: Param<'crew'>[] = ['douglas', 'mark', 'victor', 'anousheh'];

export const TECHNOLOGY_ROUTES: Param<'technology'>[] = ['launch_vehicle', 'spaceport', 'space_capsule'];
