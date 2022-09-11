export const routes = {
  home: '/',
  destination: ['moon', 'mars', 'europa', 'titan'],
  crew: ['douglas', 'mark', 'victor', 'anousheh'],
  technology: ['launch_vehicle', 'spaceport', 'space_capsule'],
} as const;

export type Route = keyof typeof routes;
export type RouteWithParam = Exclude<Route, 'home'>;
export type RouteParam<TRoute extends Route> = typeof routes[TRoute][number];

export const BASE_ROUTES = Object.keys(routes) as Route[];

export const DESTINATION_ROUTES = routes.destination;
export const CREW_ROUTES = routes.crew;
export const TECHNOLOGY_ROUTES = routes.technology;
