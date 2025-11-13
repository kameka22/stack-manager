import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Home,
  Layers,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: t('navigation.home'), path: '/' },
    { icon: Layers, label: t('navigation.stacks'), path: '/stacks' },
    { icon: Settings, label: t('navigation.settings'), path: '/settings' },
  ];

  return (
    <aside
      className={cn(
        'relative flex flex-col border-r bg-sidebar-background transition-all duration-300',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between px-4 border-b">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">SM</span>
            </div>
            <span className="font-semibold text-sidebar-foreground">
              {t('common.appName')}
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn('h-8 w-8', collapsed && 'mx-auto')}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-2">
        {menuItems.map((item) => (
          <button
            key={item.path}
            className={cn(
              'flex w-full items-center gap-3 rounded-lg px-3 py-2',
              'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              'transition-colors'
            )}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <div
          className={cn(
            'flex items-center gap-3 rounded-lg px-2 py-2',
            collapsed && 'justify-center'
          )}
        >
          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs font-medium">U</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">User</p>
              <p className="text-xs text-muted-foreground truncate">user@example.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
