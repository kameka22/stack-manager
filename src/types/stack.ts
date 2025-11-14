export interface Stack {
  id: string;
  name: string;
  description: string;
  projects: Project[];
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  repositoryPath?: string; // Path to git repository on filesystem
  repositoryUrl?: string; // Remote git URL
  status: 'existing' | 'new' | 'not-initialized';
  services: Service[];
  branch?: string;
  lastCommit?: string;
}

export interface Service {
  id: string;
  name: string;
  type: 'docker' | 'native' | 'unknown';
  path: string; // Relative path from project root (e.g., "services/api")
  dockerConfig?: DockerConfig;
  container?: DockerContainer; // Linked running container
  status: 'running' | 'stopped' | 'not-found' | 'unconfigured';
}

export interface DockerConfig {
  composeFile?: string; // Path to docker-compose.yml
  dockerfile?: string; // Path to Dockerfile
  imageName?: string;
  containerName?: string;
  ports?: string[];
  volumes?: string[];
}

export interface DockerContainer {
  id: string;
  name: string;
  image: string;
  status: 'running' | 'stopped' | 'paused';
  ports: string[];
  createdAt: string;
  uptime?: string;
}

export interface StackFormData {
  name: string;
  description: string;
  mode: 'existing' | 'new';
  projectPath?: string; // For existing projects
}
