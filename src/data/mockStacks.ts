import { Stack, Project, Service, DockerContainer } from '@/types/stack';

export const mockContainers: DockerContainer[] = [
  {
    id: 'container-1',
    name: 'backend-api-gateway-1',
    image: 'node:18-alpine',
    status: 'running',
    ports: ['3000:3000', '9229:9229'],
    createdAt: '2025-11-14T06:00:00Z',
    uptime: '2h 34m'
  },
  {
    id: 'container-2',
    name: 'backend-auth-service-1',
    image: 'node:18-alpine',
    status: 'running',
    ports: ['3001:3001'],
    createdAt: '2025-11-14T06:00:00Z',
    uptime: '2h 34m'
  },
  {
    id: 'container-3',
    name: 'postgres-db-1',
    image: 'postgres:14',
    status: 'running',
    ports: ['5432:5432'],
    createdAt: '2025-11-14T06:00:00Z',
    uptime: '2h 34m'
  },
  {
    id: 'container-4',
    name: 'frontend-web-1',
    image: 'nginx:alpine',
    status: 'running',
    ports: ['8080:80'],
    createdAt: '2025-11-14T03:00:00Z',
    uptime: '5h 12m'
  },
  {
    id: 'container-5',
    name: 'frontend-nginx-1',
    image: 'nginx:latest',
    status: 'stopped',
    ports: ['80:80'],
    createdAt: '2025-11-13T10:00:00Z'
  }
];

export const mockServices: Service[] = [
  {
    id: 'service-1',
    name: 'api-gateway',
    type: 'docker',
    path: 'services/api-gateway',
    status: 'running',
    dockerConfig: {
      composeFile: 'docker-compose.yml',
      dockerfile: 'services/api-gateway/Dockerfile',
      imageName: 'node:18-alpine',
      containerName: 'backend-api-gateway-1',
      ports: ['3000:3000', '9229:9229']
    },
    container: mockContainers[0]
  },
  {
    id: 'service-2',
    name: 'auth-service',
    type: 'docker',
    path: 'services/auth',
    status: 'running',
    dockerConfig: {
      composeFile: 'docker-compose.yml',
      dockerfile: 'services/auth/Dockerfile',
      imageName: 'node:18-alpine',
      containerName: 'backend-auth-service-1',
      ports: ['3001:3001']
    },
    container: mockContainers[1]
  },
  {
    id: 'service-3',
    name: 'database',
    type: 'docker',
    path: 'services/database',
    status: 'running',
    dockerConfig: {
      composeFile: 'docker-compose.yml',
      imageName: 'postgres:14',
      containerName: 'postgres-db-1',
      ports: ['5432:5432']
    },
    container: mockContainers[2]
  },
  {
    id: 'service-4',
    name: 'web-app',
    type: 'docker',
    path: 'services/web',
    status: 'running',
    dockerConfig: {
      composeFile: 'docker-compose.yml',
      dockerfile: 'services/web/Dockerfile',
      imageName: 'nginx:alpine',
      containerName: 'frontend-web-1',
      ports: ['8080:80']
    },
    container: mockContainers[3]
  },
  {
    id: 'service-5',
    name: 'nginx',
    type: 'docker',
    path: 'services/nginx',
    status: 'stopped',
    dockerConfig: {
      composeFile: 'docker-compose.yml',
      dockerfile: 'services/nginx/Dockerfile',
      imageName: 'nginx:latest',
      containerName: 'frontend-nginx-1',
      ports: ['80:80']
    },
    container: mockContainers[4]
  }
];

export const mockProjects: Project[] = [
  {
    id: 'project-1',
    name: 'Backend API',
    description: 'Core backend services and API gateway',
    repositoryPath: '/home/user/projects/backend',
    repositoryUrl: 'https://github.com/user/backend-api.git',
    status: 'existing',
    services: [mockServices[0], mockServices[1], mockServices[2]],
    branch: 'main',
    lastCommit: '2h ago'
  },
  {
    id: 'project-2',
    name: 'Frontend Web',
    description: 'React web application',
    repositoryPath: '/home/user/projects/frontend',
    repositoryUrl: 'https://github.com/user/frontend-web.git',
    status: 'existing',
    services: [mockServices[3], mockServices[4]],
    branch: 'develop',
    lastCommit: '5h ago'
  },
  {
    id: 'project-3',
    name: 'Mobile App',
    description: 'React Native mobile application',
    status: 'not-initialized',
    services: []
  }
];

export const mockStack: Stack = {
  id: 'stack-1',
  name: 'My Production Stack',
  description: 'Production environment with backend, frontend, and mobile apps',
  projects: mockProjects,
  createdAt: '2025-11-10T10:00:00Z',
  updatedAt: '2025-11-14T08:00:00Z'
};

export const mockStacks: Stack[] = [
  mockStack,
  {
    id: 'stack-2',
    name: 'Development Stack',
    description: 'Local development environment',
    projects: [
      {
        id: 'project-4',
        name: 'Test Services',
        repositoryPath: '/home/user/projects/test',
        status: 'existing',
        services: [],
        branch: 'dev'
      }
    ],
    createdAt: '2025-11-12T10:00:00Z',
    updatedAt: '2025-11-14T08:00:00Z'
  }
];
