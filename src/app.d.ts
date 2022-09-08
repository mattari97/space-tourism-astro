declare namespace App {
  type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

  interface Route {
    name: string;
    href: string;
    base: string;
  }
}
