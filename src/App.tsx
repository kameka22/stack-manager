import { useTranslation } from 'react-i18next';
import { AppLayout } from './components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Plus, Layers, TrendingUp, Activity } from 'lucide-react';

function App() {
  const { t } = useTranslation();

  const stats = [
    {
      title: 'Total Stacks',
      value: '12',
      icon: Layers,
      trend: '+2 this month',
    },
    {
      title: 'Active Deployments',
      value: '8',
      icon: Activity,
      trend: '4 pending',
    },
    {
      title: 'Success Rate',
      value: '98.5%',
      icon: TrendingUp,
      trend: '+2.5% from last month',
    },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t('common.welcome')}</h1>
            <p className="text-muted-foreground">{t('common.description')}</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Stack
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest stack operations and deployments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Production Stack Updated</p>
                  <p className="text-sm text-muted-foreground">2 minutes ago</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">New Deployment Started</p>
                  <p className="text-sm text-muted-foreground">15 minutes ago</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Plus className="h-6 w-6" />
                <span>New Stack</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Layers className="h-6 w-6" />
                <span>View All Stacks</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Activity className="h-6 w-6" />
                <span>Check Status</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

export default App;
