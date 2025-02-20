import { ReactNode } from 'react';
import Navbar from '@/components/navbar';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/themes/theme-provider';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <Navbar />

        <main className="pt-40">{children}</main>
      </div>
    </ThemeProvider>
  );
}
