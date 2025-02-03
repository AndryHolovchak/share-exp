import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';
import productProvider from '@/data/providers/product-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Review summary',
  description: 'AI summaries of customer reviews',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const products = await productProvider.list();

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-around py-4 border-b mb-8">
          {products.map((product) => (
            <Link
              key={product.id}
              className="text-lg font-semibold"
              href={`/${product.id}`}
            >
              {product.name}
            </Link>
          ))}
        </nav>
        <main className="pt-6">{children}</main>
      </body>
    </html>
  );
}
