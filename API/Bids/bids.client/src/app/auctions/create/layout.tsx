import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create lot | INT20H Bids',
  description: 'INT20H Bids project by F0rGotten;',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
