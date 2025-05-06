
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AIAnalytics = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Analytics</h1>
      <p className="text-muted-foreground">AI-powered insights to improve your marketing performance.</p>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Advanced Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Get AI-driven insights and recommendations based on your website analytics, customer behavior, and campaign performance.
          </p>
          <div className="bg-gray-50 p-6 rounded-md border">
            <p className="text-center text-muted-foreground">AI analytics dashboard coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIAnalytics;
