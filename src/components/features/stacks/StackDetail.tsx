import { useState } from 'react';
import { ArrowLeft, Settings, Plus, Layers, Play, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProjectCard } from './ProjectCard';
import { AddStackDialog } from './AddStackDialog';
import { mockStack } from '@/data/mockStacks';
import { cn } from '@/lib/utils';

interface StackDetailProps {
  onBack?: () => void;
}

export function StackDetail({ onBack }: StackDetailProps) {
  const [stack] = useState(mockStack);

  // Calculate statistics
  const totalProjects = stack.projects.length;
  const totalServices = stack.projects.reduce(
    (acc, project) => acc + project.services.length,
    0
  );
  const runningContainers = stack.projects.reduce(
    (acc, project) =>
      acc + project.services.filter((s) => s.status === 'running').length,
    0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="glass" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
            Back to Stacks
          </Button>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {stack.name}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {stack.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="glass" size="lg">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Stack Overview */}
      <Card variant="gradient" className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
            <Layers className="h-7 w-7 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Stack Overview</h2>
            <p className="text-sm text-white/70 mt-0.5">
              Monitoring and management dashboard
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Projects Stat */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <Layers className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-foreground">
                  {totalProjects}
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
            <div className="h-2 bg-background/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          {/* Services Stat */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                <span className="text-2xl">🐳</span>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-foreground">
                  {totalServices}
                </div>
                <div className="text-sm text-muted-foreground">Services</div>
              </div>
            </div>
            <div className="h-2 bg-background/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          {/* Running Containers Stat */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-500/20 flex items-center justify-center">
                <Play className="h-6 w-6 text-blue-500" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-foreground">
                  {runningContainers}
                </div>
                <div className="text-sm text-muted-foreground">
                  Running Containers
                </div>
              </div>
            </div>
            <div className="h-2 bg-background/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-500"
                style={{
                  width: `${(runningContainers / totalServices) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 flex gap-3">
          <Button variant="glass" size="lg">
            <Play className="h-4 w-4" />
            Start All Services
          </Button>
          <Button variant="glass" size="lg">
            <Square className="h-4 w-4" />
            Stop All Services
          </Button>
        </div>
      </Card>

      {/* Projects Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-foreground">Projects</h2>
          <AddStackDialog>
            <Button variant="default" size="lg">
              <Plus className="h-4 w-4" />
              Add Project
            </Button>
          </AddStackDialog>
        </div>

        <div className="space-y-4">
          {stack.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Empty State for no projects */}
      {stack.projects.length === 0 && (
        <Card variant="glass" className="p-12 text-center">
          <div className="w-20 h-20 rounded-3xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Layers className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No projects yet
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start by adding your first project to this stack. You can import an
            existing project or create a new one.
          </p>
          <AddStackDialog>
            <Button variant="default" size="lg">
              <Plus className="h-4 w-4" />
              Add Your First Project
            </Button>
          </AddStackDialog>
        </Card>
      )}
    </div>
  );
}
