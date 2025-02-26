'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container p-0">
        {children} 
      </main>
      <Footer />
    </div>
  );
}
