import pagesData from '../data/pages.json';

export const getCurrentRoute = (pathname: string) => {
  if (pathname === '/') return pathname;
  const lastIndexOf = pathname.lastIndexOf('/');
  if (!lastIndexOf) return pathname;
  return pathname.slice(0, lastIndexOf);
};

// const routes = ["destination", "crew", "technology"] as const;
const routes = {
  destination: ['moon', 'mars', 'europa', 'titan'] as const,
  crew: ['douglas', 'mark', 'victor', 'anousheh'] as const,
  technology: ['launch_vehicle', 'spaceport', 'space_capsule'] as const,
} as const;

type Route = keyof typeof routes;
export type Param<TRoute extends Route> = typeof routes[TRoute][number];

export const getDataForRoute = <T extends Route>(route: T, param: Param<T>) => {
  const dataset = pagesData[route];
  const index = dataset.findIndex((item) => item.name.toLowerCase() === param);
  return dataset[index];
};
