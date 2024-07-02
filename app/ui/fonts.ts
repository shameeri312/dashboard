import { Poppins, DM_Sans, Lusitana  } from 'next/font/google';

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const dm_sans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '700']
});