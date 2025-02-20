import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { AuthDialogProvider } from '@/auth/providers/auth-dialog-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Employers summary',
  description: 'AI summaries of employees reviews',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthDialogProvider>
          <div className="relative h-lvh flex-1">{children}</div>
        </AuthDialogProvider>

        <Toaster />
      </body>
    </html>
  );
}
