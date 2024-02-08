import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "login ;",
  description: "INT20H Bids project by F0rGotten;",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
