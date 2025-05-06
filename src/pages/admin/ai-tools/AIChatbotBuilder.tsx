
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AIChatbotBuilder = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Chatbot Builder</h1>
      <p className="text-muted-foreground">Create and customize AI chatbots for your website.</p>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Chatbot Builder</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Build intelligent chatbots that can answer customer queries, qualify leads, and provide support 24/7.
          </p>
          <div className="bg-gray-50 p-6 rounded-md border">
            <p className="text-center text-muted-foreground">AI chatbot builder coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChatbotBuilder;
