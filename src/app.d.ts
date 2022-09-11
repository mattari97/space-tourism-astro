declare namespace App {
  type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

  interface Route<T> {
    name: T;
    href: string;
  }

  interface PageData {
    name: string;
    images: {
      png: string;
      webp: string;
    };
  }
  interface Destination extends PageData {
    description: string;
    distance: string;
    travel: string;
  }

  interface Crew extends PageData {
    role: string;
    bio: string;
  }

  interface Technology {
    name: string;
    images: {
      portrait: string;
      landscape: string;
    };
    description: string;
  }
}
