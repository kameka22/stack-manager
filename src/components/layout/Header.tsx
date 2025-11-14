import { useTranslation } from 'react-i18next';
import { Moon, Sun, Languages, Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full rounded-tr-3xl overflow-hidden',
        className
      )}
    >
      {/* Drag region - Height of macOS title bar */}
      <div
        data-tauri-drag-region
        className="h-14 w-full cursor-move select-none bg-background/50"
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
      />

      {/* Header content */}
      <div
        className="flex h-12 items-center justify-between px-8 bg-background"
        style={{
          paddingLeft: 'max(2rem, env(safe-area-inset-left, 100px))',
          WebkitAppRegion: 'no-drag'
        } as React.CSSProperties}
      >
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search stacks, deployments..."
              className="w-full h-11 pl-12 pr-4 rounded-xl glass-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative h-11 w-11 rounded-xl hover:glass-card"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
          </Button>

          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="h-11 w-11 rounded-xl hover:glass-card"
          >
            <Languages className="h-5 w-5" />
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-11 w-11 rounded-xl hover:glass-card"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
