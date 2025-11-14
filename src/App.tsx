import { useTranslation } from 'react-i18next';
import { AppLayout } from './components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import {
  Plus,
  Layers,
  TrendingUp,
  Activity,
  Zap,
  Shield,
  Rocket,
  Database,
  GitBranch,
  Server,
} from 'lucide-react';

function App() {
  const { t } = useTranslation();

  const stats = [
    {
      title: 'Total Stacks',
      value: '12',
      icon: Layers,
      trend: '+2 this month',
      gradient: 'from-blue-500 to-cyan-400',
      bgGradient: 'gradient-purple-pink',
    },
    {
      title: 'Active Deployments',
      value: '8',
      icon: Activity,
      trend: '4 pending',
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'gradient-blue-purple',
    },
    {
      title: 'Success Rate',
      value: '98.5%',
      icon: TrendingUp,
      trend: '+2.5% from last month',
      gradient: 'from-sky-500 to-blue-500',
      bgGradient: 'gradient-orange-pink',
    },
  ];

  const quickActions = [
    {
      icon: Plus,
      label: 'Create Stack',
      description: 'Start a new stack configuration',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Database,
      label: 'Manage Data',
      description: 'Configure your databases',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: GitBranch,
      label: 'Version Control',
      description: 'Track stack versions',
      gradient: 'from-sky-500 to-blue-500',
    },
    {
      icon: Server,
      label: 'Servers',
      description: 'Manage your infrastructure',
      gradient: 'from-blue-600 to-indigo-500',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy your stacks in seconds with optimized performance',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Enterprise-grade security built into every deployment',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Rocket,
      title: 'Scale Instantly',
      description: 'Grow from prototype to production seamlessly',
      gradient: 'from-sky-500 to-blue-600',
    },
  ];

  return (
    <AppLayout>
      <div className="space-y-8 pb-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl glass-card p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-sky-500/20" />
          <div className="relative z-10">
            <div className="flex items-start justify-between">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold tracking-tight mb-4">
                  <span className="gradient-text">{t('common.welcome')}</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {t('common.description')}
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="gap-2">
                    <Plus className="h-5 w-5" />
                    Create New Stack
                  </Button>
                  <Button variant="glass" size="lg" className="gap-2">
                    <Layers className="h-5 w-5" />
                    View All Stacks
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative w-32 h-32 animate-float">
                  <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-50 animate-pulse-slow" />
                  <div className="relative w-32 h-32 rounded-full gradient-primary flex items-center justify-center shadow-2xl">
                    <Rocket className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - Large Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.title} className="overflow-hidden">
              <div className={`h-2 ${stat.bgGradient}`} />
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  {stat.trend}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions - CleanMyMac Style */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action) => (
              <Card
                key={action.label}
                className="group cursor-pointer overflow-hidden relative"
              >
                <CardContent className="p-6">
                  <div className={`mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br ${action.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{action.label}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Why Stack Manager?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className={`mb-6 h-20 w-20 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-xl`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity - Compact */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Recent Activity</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { icon: Layers, title: 'Production Stack Updated', time: '2 minutes ago', color: 'from-blue-500 to-cyan-400' },
                { icon: Activity, title: 'New Deployment Started', time: '15 minutes ago', color: 'from-cyan-500 to-blue-600' },
                { icon: Shield, title: 'Security Scan Completed', time: '1 hour ago', color: 'from-sky-500 to-blue-500' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

export default App;
