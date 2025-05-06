
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AIContentGenerator = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Content Generator</h1>
      <p className="text-muted-foreground">Generate high-quality marketing content with AI assistance.</p>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Content Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Generate blog posts, social media captions, ad copy, product descriptions, and more using advanced AI.
          </p>
          <div className="bg-gray-50 p-6 rounded-md border">
            <p className="text-center text-muted-foreground">AI content generation tool coming soon</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIContentGenerator;
