
import React from 'react';
import { FileText, Palette, Calendar, Users, TrendingUp, Eye, MessageSquare, Zap, Settings, Layout } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome to Sagarika Digital Admin</h1>
          <p className="text-muted-foreground">Manage your website content, themes, and social media from this dashboard.</p>
        </div>
        <Button asChild>
          <Link to="/admin/pages/new">Create New Page</Link>
        </Button>
      </div>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Components</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+4 from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Social Engagement</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.2%</div>
            <p className="text-xs text-muted-foreground">+5.1% from last week</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Management Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Page Management</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button asChild variant="outline" className="h-20 flex flex-col">
              <Link to="/admin/pages">
                <FileText className="h-6 w-6 mb-2" />
                <span>All Pages</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex flex-col">
              <Link to="/admin/pages/new">
                <FileText className="h-6 w-6 mb-2" />
                <span>New Page</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex flex-col">
              <Link to="/admin/theme-customizer">
                <Palette className="h-6 w-6 mb-2" />
                <span>Theme Colors</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex flex-col">
              <Link to="/admin/theme-customizer">
                <Layout className="h-6 w-6 mb-2" />
                <span>Layout Settings</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button asChild variant="outline" className="h-20 flex flex-col">
              <Link to="/admin/theme-manager">
                <Settings className="h-6 w-6 mb-2" />
                <span>Theme Manager</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex flex-col">
              <Link to="/admin/social-calendar">
                <Calendar className="h-6 w-6 mb-2" />
                <span>Schedule Post</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex flex-col">
              <Link to="/admin/ai-tools/content-generator">
                <MessageSquare className="h-6 w-6 mb-2" />
                <span>AI Content</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex flex-col">
              <Link to="/admin/navigation">
                <Settings className="h-6 w-6 mb-2" />
                <span>Navigation</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-sagarika rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New page created: Services Overview</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-sagarika-green rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Theme updated: Color scheme changed</p>
                <p className="text-xs text-muted-foreground">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Social media post scheduled</p>
                <p className="text-xs text-muted-foreground">6 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">AI content generated for blog</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button asChild variant="outline" className="h-20 flex flex-col">
              <Link to="/admin/pages/new">
                <FileText className="h-6 w-6 mb-2" />
                <span>New Page</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex flex-col">
              <Link to="/admin/theme-manager">
                <Palette className="h-6 w-6 mb-2" />
                <span>Edit Theme</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex flex-col">
              <Link to="/admin/social-calendar">
                <Calendar className="h-6 w-6 mb-2" />
                <span>Schedule Post</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-20 flex flex-col">
              <Link to="/admin/ai-tools/content-generator">
                <MessageSquare className="h-6 w-6 mb-2" />
                <span>AI Content</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="text-sm font-medium">Website Status</p>
                <p className="text-xs text-muted-foreground">All systems operational</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="text-sm font-medium">AI Services</p>
                <p className="text-xs text-muted-foreground">Running smoothly</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="text-sm font-medium">Database</p>
                <p className="text-xs text-muted-foreground">Optimized and healthy</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
