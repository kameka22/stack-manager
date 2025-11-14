import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FolderOpen, Plus, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mockContainers } from '@/data/mockStacks';

interface AddStackDialogProps {
  children?: React.ReactNode;
}

export function AddStackDialog({ children }: AddStackDialogProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'new' | 'existing'>('existing');
  const [stackName, setStackName] = useState('');
  const [description, setDescription] = useState('');
  const [projectPath, setProjectPath] = useState('');
  const [scanned, setScanned] = useState(false);

  const handleScan = () => {
    setScanned(true);
  };

  const handleSubmit = () => {
    // Mock submit
    console.log('Creating stack:', { mode, stackName, description, projectPath });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="default" size="lg">
            <Plus className="h-4 w-4" />
            Add Stack
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Stack</DialogTitle>
          <DialogDescription>
            Create a new stack or import an existing one from your filesystem
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Mode Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Choose mode
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setMode('new')}
                className={cn(
                  'flex-1 p-4 rounded-2xl border-2 transition-all duration-300',
                  mode === 'new'
                    ? 'border-primary bg-primary/10 shadow-lg'
                    : 'border-border hover:border-primary/50 glass'
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'w-5 h-5 rounded-full border-2 transition-all',
                      mode === 'new'
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    )}
                  >
                    {mode === 'new' && (
                      <div className="w-full h-full rounded-full bg-white scale-50" />
                    )}
                  </div>
                  <span className="font-medium">Create new stack</span>
                </div>
              </button>
              <button
                onClick={() => setMode('existing')}
                className={cn(
                  'flex-1 p-4 rounded-2xl border-2 transition-all duration-300',
                  mode === 'existing'
                    ? 'border-primary bg-primary/10 shadow-lg'
                    : 'border-border hover:border-primary/50 glass'
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'w-5 h-5 rounded-full border-2 transition-all',
                      mode === 'existing'
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    )}
                  >
                    {mode === 'existing' && (
                      <div className="w-full h-full rounded-full bg-white scale-50" />
                    )}
                  </div>
                  <span className="font-medium">Import existing stack</span>
                </div>
              </button>
            </div>
          </div>

          {/* Stack Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Stack Name
            </label>
            <input
              type="text"
              value={stackName}
              onChange={(e) => setStackName(e.target.value)}
              placeholder="My Production Stack"
              className="w-full px-4 py-3 rounded-xl glass border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Production environment stack"
              rows={3}
              className="w-full px-4 py-3 rounded-xl glass border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background/50 text-foreground placeholder:text-muted-foreground resize-none"
            />
          </div>

          {/* Project Directory */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Project Directory
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={projectPath}
                onChange={(e) => setProjectPath(e.target.value)}
                placeholder="/home/user/projects/backend"
                className="flex-1 px-4 py-3 rounded-xl glass border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background/50 text-foreground placeholder:text-muted-foreground font-mono text-sm"
              />
              <Button variant="glass" size="lg">
                <FolderOpen className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Scan Button */}
          <div>
            <Button
              variant="default"
              size="lg"
              className="w-full"
              onClick={handleScan}
            >
              <Search className="h-4 w-4" />
              Scan for Docker Containers
            </Button>
          </div>

          {/* Found Containers */}
          {scanned && (
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">
                Found {mockContainers.length} running containers
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                {mockContainers.map((container) => (
                  <div
                    key={container.id}
                    className="flex items-center gap-3 p-3 rounded-xl glass border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={cn(
                          'w-5 h-5 rounded border-2 border-primary bg-primary flex items-center justify-center'
                        )}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm text-foreground">
                          {container.name}
                        </span>
                        {container.status === 'running' && (
                          <span className="text-xs text-blue-500">● Running</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground font-mono">
                        {container.image}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="glass" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="default" onClick={handleSubmit}>
            Add Stack
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
