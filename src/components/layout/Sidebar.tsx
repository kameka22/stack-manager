import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Home,
  Layers,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('/');

  const menuItems = [
    {
      icon: Home,
      label: t('navigation.home'),
      path: '/',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Layers,
      label: t('navigation.stacks'),
      path: '/stacks',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Settings,
      label: t('navigation.settings'),
      path: '/settings',
      gradient: 'from-orange-500 to-pink-500'
    },
  ];

  return (
    <aside
      className={cn(
        'relative flex flex-col bg-background transition-all duration-300',
        collapsed ? 'w-20' : 'w-72',
        className
      )}
    >
      {/* Header */}
      <div className="flex h-20 items-center justify-between px-5">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-sidebar-foreground gradient-text">
                {t('common.appName')}
              </span>
              <p className="text-xs text-muted-foreground">v1.0.0</p>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            'h-9 w-9 rounded-xl hover:bg-sidebar-accent',
            collapsed && 'mx-auto'
          )}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4 relative">
        {menuItems.map((item, index) => {
          const isActive = activeItem === item.path;
          return (
            <button
              key={item.path}
              onClick={() => setActiveItem(item.path)}
              className={cn(
                'flex w-full items-center gap-4 rounded-2xl px-4 py-4',
                'transition-all duration-500 ease-out group relative overflow-hidden',
                isActive
                  ? 'glass-card shadow-lg scale-105'
                  : 'hover:bg-sidebar-accent/50 hover:scale-[1.02]'
              )}
              style={{
                transform: isActive ? 'translateX(8px)' : 'translateX(0)',
              }}
            >
              {/* Gradient background for active state */}
              {isActive && (
                <div
                  className={cn(
                    'absolute inset-0 opacity-10 bg-gradient-to-r transition-opacity duration-500',
                    item.gradient
                  )}
                />
              )}

              {/* Icon with gradient background */}
              <div className={cn(
                'relative h-12 w-12 rounded-xl flex items-center justify-center shrink-0',
                'transition-all duration-500 ease-out',
                isActive
                  ? `bg-gradient-to-br ${item.gradient} shadow-lg scale-110`
                  : 'bg-sidebar-accent/50 group-hover:scale-110'
              )}>
                <item.icon className={cn(
                  'h-6 w-6 transition-all duration-500',
                  isActive ? 'text-white' : 'text-sidebar-foreground'
                )} />
              </div>

              {/* Label */}
              {!collapsed && (
                <div className="flex flex-col items-start flex-1">
                  <span className={cn(
                    'text-sm font-semibold transition-all duration-500',
                    isActive ? 'text-sidebar-foreground' : 'text-muted-foreground'
                  )}>
                    {item.label}
                  </span>
                </div>
              )}

              {/* Active indicator */}
              {isActive && !collapsed && (
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4">
        <div
          className={cn(
            'flex items-center gap-3 rounded-2xl px-3 py-3 glass cursor-pointer',
            'hover:glass-card transition-all duration-300',
            collapsed && 'justify-center'
          )}
        >
          <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-sm font-bold text-white">U</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate text-sidebar-foreground">User</p>
              <p className="text-xs text-muted-foreground truncate">user@example.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
