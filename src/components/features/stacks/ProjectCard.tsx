import { useState } from 'react';
import { Project } from '@/types/stack';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServiceCard } from './ServiceCard';
import {
  ChevronDown,
  ChevronRight,
  FolderGit2,
  GitBranch,
  Clock,
  Play,
  Square,
  RotateCw,
  Link as LinkIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const getProjectStatus = () => {
    if (project.status === 'not-initialized') {
      return {
        icon: '⚪',
        color: 'text-gray-400',
        bgGradient: 'from-gray-500/20 to-gray-600/20',
        label: 'Not Initialized'
      };
    }

    const runningServices = project.services.filter(s => s.status === 'running').length;
    const totalServices = project.services.length;

    if (totalServices === 0) {
      return {
        icon: '⚠️',
        color: 'text-orange-400',
        bgGradient: 'from-orange-500/20 to-yellow-500/20',
        label: 'No Services'
      };
    }

    if (runningServices === totalServices) {
      return {
        icon: '✅',
        color: 'text-blue-500',
        bgGradient: 'from-blue-500/20 to-cyan-500/20',
        label: 'Running'
      };
    }

    if (runningServices === 0) {
      return {
        icon: '○',
        color: 'text-gray-400',
        bgGradient: 'from-gray-500/20 to-gray-600/20',
        label: 'Stopped'
      };
    }

    return {
      icon: '⚠️',
      color: 'text-orange-400',
      bgGradient: 'from-orange-500/20 to-yellow-500/20',
      label: 'Partially Up'
    };
  };

  const status = getProjectStatus();

  return (
    <Card
      variant="glass"
      className={cn('overflow-hidden hover-glow', className)}
    >
      <div
        className={cn(
          'relative p-6 bg-gradient-to-br cursor-pointer',
          status.bgGradient
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-lg flex-shrink-0">
              <FolderGit2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <span className={cn('text-sm font-medium flex items-center gap-1', status.color)}>
                  <span>{status.icon}</span>
                  {status.label}
                </span>
              </div>
              {project.description && (
                <p className="text-sm text-muted-foreground mb-2">
                  {project.description}
                </p>
              )}
              {project.repositoryPath && (
                <p className="text-xs font-mono text-muted-foreground truncate">
                  {project.repositoryPath}
                </p>
              )}
              {project.branch && (
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <GitBranch className="h-3 w-3" />
                    <span>{project.branch}</span>
                  </div>
                  {project.lastCommit && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>last commit {project.lastCommit}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 ml-4">
            {project.status !== 'not-initialized' && project.services.length > 0 && (
              <>
                <Button
                  variant="glass"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Play className="h-3.5 w-3.5" />
                  Start All
                </Button>
                <Button
                  variant="glass"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Square className="h-3.5 w-3.5" />
                  Stop All
                </Button>
                <Button
                  variant="glass"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <RotateCw className="h-3.5 w-3.5" />
                  Restart
                </Button>
              </>
            )}
            {project.status === 'not-initialized' && (
              <Button
                variant="default"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <LinkIcon className="h-3.5 w-3.5" />
                Initialize Project
              </Button>
            )}
            {isExpanded ? (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </div>

      {isExpanded && project.services.length > 0 && (
        <div className="p-6 pt-4 space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <h4 className="text-sm font-semibold text-foreground">
              Services ({project.services.length})
            </h4>
          </div>
          <div className="space-y-3">
            {project.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      )}

      {isExpanded && project.status === 'not-initialized' && (
        <div className="p-6 pt-4 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            This project is not linked to the filesystem yet. Initialize or link it to start managing services.
          </p>
          <div className="flex gap-3 justify-center">
            <Button variant="default">
              <LinkIcon className="h-4 w-4" />
              Link Existing
            </Button>
            <Button variant="glass">
              <FolderGit2 className="h-4 w-4" />
              Create New
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
