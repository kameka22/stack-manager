import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-black p-2">
      <div className="flex flex-1 overflow-hidden bg-background rounded-2xl">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden bg-background">
          <Header />
          <main className="flex-1 overflow-auto p-8 bg-background">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
