import { Service } from '@/types/stack';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, RotateCw, Square, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const statusConfig = {
    running: {
      icon: '●',
      color: 'text-blue-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      label: 'Running'
    },
    stopped: {
      icon: '○',
      color: 'text-gray-400',
      bgGradient: 'from-gray-500/10 to-gray-600/10',
      label: 'Stopped'
    },
    'not-found': {
      icon: '⚠',
      color: 'text-orange-400',
      bgGradient: 'from-orange-500/10 to-yellow-500/10',
      label: 'Not Found'
    },
    unconfigured: {
      icon: '⚪',
      color: 'text-gray-300',
      bgGradient: 'from-gray-400/10 to-gray-500/10',
      label: 'Unconfigured'
    }
  };

  const status = statusConfig[service.status];

  return (
    <Card
      variant="glass"
      className={cn(
        'p-4 hover:scale-[1.01] transition-all duration-300',
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center',
              status.bgGradient
            )}
          >
            <span className="text-xl">🐳</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-foreground">{service.name}</h4>
              <span className={cn('text-sm font-medium', status.color)}>
                {status.icon} {status.label}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              {service.path}
            </p>
          </div>
        </div>
      </div>

      {service.container && (
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-medium text-foreground/80">Container:</span>
            <span className="font-mono text-xs">{service.container.name}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-medium text-foreground/80">Image:</span>
            <span className="font-mono text-xs">{service.container.image}</span>
          </div>
          {service.dockerConfig?.ports && service.dockerConfig.ports.length > 0 && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-medium text-foreground/80">Ports:</span>
              <span className="font-mono text-xs">
                {service.dockerConfig.ports.join(', ')}
              </span>
            </div>
          )}
          {service.container.uptime && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-medium text-foreground/80">Uptime:</span>
              <span className="font-mono text-xs">{service.container.uptime}</span>
            </div>
          )}
        </div>
      )}

      <div className="flex gap-2">
        <Button
          variant="glass"
          size="sm"
          className="flex-1"
          disabled={service.status !== 'running'}
        >
          <FileText className="h-3.5 w-3.5" />
          Logs
        </Button>
        <Button
          variant="glass"
          size="sm"
          className="flex-1"
          disabled={service.status === 'not-found'}
        >
          <RotateCw className="h-3.5 w-3.5" />
          Restart
        </Button>
        <Button
          variant="glass"
          size="sm"
          className="flex-1"
          disabled={service.status !== 'running'}
        >
          <Square className="h-3.5 w-3.5" />
          Stop
        </Button>
        <Button
          variant="glass"
          size="sm"
          className="flex-1"
          disabled={service.status !== 'running'}
        >
          <Terminal className="h-3.5 w-3.5" />
          Shell
        </Button>
      </div>
    </Card>
  );
}
