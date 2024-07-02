import '@/app/ui/global.css';
import { poppins } from './ui/fonts';
import { Metadata } from 'next';
import { title } from 'process';

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard application",
  keywords: "dashboard, nextjs, react, tailwindcss",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}> {children}</body>
    </html>
  );
}
