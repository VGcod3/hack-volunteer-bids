import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile | INT20H Bids',
  description: 'INT20H Bids project by F0rGotten;',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
