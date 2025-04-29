
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Palette, Calendar, LayoutDashboard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AdminIndex = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          <span className="text-sagarika-navy">SAGARIKA</span>
          <span className="text-sagarika">DIGITAL</span>
          <span className="text-sagarika-navy"> ADMIN</span>
        </h1>
        
        <p className="text-gray-600 mb-6 text-center">
          Access the admin dashboard to manage your website content, themes, and social media.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <LayoutDashboard className="h-8 w-8 mb-2 text-sagarika" />
              <Link to="/admin" className="text-sagarika-navy font-medium">Dashboard</Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <Palette className="h-8 w-8 mb-2 text-sagarika" />
              <Link to="/admin/theme-manager" className="text-sagarika-navy font-medium">Theme Manager</Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <FileText className="h-8 w-8 mb-2 text-sagarika" />
              <Link to="/admin/pages/new" className="text-sagarika-navy font-medium">Page Editor</Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <Calendar className="h-8 w-8 mb-2 text-sagarika" />
              <Link to="/admin/social-calendar" className="text-sagarika-navy font-medium">Social Calendar</Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link to="/">Back to Website</Link>
          </Button>
          <Button asChild>
            <Link to="/admin">Enter Admin</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
