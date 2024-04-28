import { Inter, Lusitana } from 'next/font/google';

// Using multiple fonts 
// You can also create a CSS variable here
// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#using-multiple-fonts

// Subsetting is the practice of creating a “subset” of a font —
// a file that contains a custom (and usually limited) collection of glyphs.
// https://fonts.google.com/knowledge/glossary/subsetting
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ weight: ['400', '700'], subsets: ['latin'] });