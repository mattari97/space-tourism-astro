import pagesData from '$data/pages.json';
import { Route, RouteParam, RouteWithParam, routes } from '$constants/routes';

export const getCurrentRoute = (pathname: string): Route | undefined => {
  for (let key of Object.keys(routes)) {
    if (pathname === '/') return 'home';
    if (pathname.includes(key)) return key as Route;
  }
  return undefined;
};

export const generateUrl = <T extends Route>(route: T, param?: RouteParam<T>) => {
  if (route === 'home') return '/';
  if (!param) return `/${route}/${routes[route][0]}`;
  return `/${route}/${param}`;
};

export const getDataForRoute = <T extends RouteWithParam>(route: T, param: RouteParam<T>) => {
  const dataset = pagesData[route];
  const index = dataset.findIndex((item) => item.id === param);
  return dataset[index];
};
