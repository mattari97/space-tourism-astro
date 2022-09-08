export const getCurrentRoute = (pathname: string) => {
  if (pathname === '/') return pathname;
  const lastIndexOf = pathname.lastIndexOf('/');
  if (!lastIndexOf) return pathname;
  return pathname.slice(0, lastIndexOf);
};
