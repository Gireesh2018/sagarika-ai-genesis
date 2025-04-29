
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Sagarika Digital Admin</h1>
      <p className="text-muted-foreground">Manage your website content, themes, and social media from this dashboard.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
            <p className="text-muted-foreground text-sm mt-1">Total Pages</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Components</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">24</p>
            <p className="text-muted-foreground text-sm mt-1">Reusable Components</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Social Media</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8</p>
            <p className="text-muted-foreground text-sm mt-1">Scheduled Posts</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:bg-gray-50 transition">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <FileText className="h-8 w-8 mb-2 text-sagarika" />
              <p className="font-medium">Create New Page</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:bg-gray-50 transition">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Palette className="h-8 w-8 mb-2 text-sagarika" />
              <p className="font-medium">Manage Theme</p>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:bg-gray-50 transition">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <Calendar className="h-8 w-8 mb-2 text-sagarika" />
              <p className="font-medium">Schedule Post</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
