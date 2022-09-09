import pagesData from '$data/pages.json';

// const routes = ["destination", "crew", "technology"] as const;
const routes = {
  destination: ['moon', 'mars', 'europa', 'titan'] as const,
  crew: ['douglas', 'mark', 'victor', 'anousheh'] as const,
  technology: ['launch_vehicle', 'spaceport', 'space_capsule'] as const,
} as const;

type Route = keyof typeof routes;
export type Param<TRoute extends Route> = typeof routes[TRoute][number];

export const getCurrentRoute = (pathname: string): 'home' | Route | undefined => {
  if (pathname === '/') return 'home';
  for (let key of Object.keys(routes)) {
    if (pathname.includes(key)) return key as Route;
  }
  return undefined;
};

export const generateUrl = <T extends Route>(route: T, param: Param<T>) => {
  return `/${route}/${param}`;
};

export const getDataForRoute = <T extends Route>(route: T, param: Param<T>) => {
  const dataset = pagesData[route];
  const index = dataset.findIndex((item) => item.name.toLowerCase() === param);
  return dataset[index];
};
