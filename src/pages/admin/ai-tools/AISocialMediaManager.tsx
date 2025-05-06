
import React, { useState } from 'react';
import { 
  Calendar, 
  BarChart, 
  MessageSquare, 
  TrendingUp, 
  Share, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';

const AISocialMediaManager = () => {
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    instagram: true,
    facebook: true,
    twitter: false,
    linkedin: false
  });

  // Generate content using AI
  const generateContent = async () => {
    setIsGenerating(true);
    // Simulate API call to AI content generator
    setTimeout(() => {
      const platforms = Object.entries(selectedPlatforms)
        .filter(([_, selected]) => selected)
        .map(([platform]) => platform)
        .join(', ');
        
      setGeneratedContent(
        `Check out our latest digital marketing solutions! We've just launched new AI-powered tools to help businesses grow their online presence and reach their target audience more effectively. #DigitalMarketing #AI #BusinessGrowth #${platforms.replaceAll(', ', ' #')}`
      );
      setIsGenerating(false);
      toast({
        title: "Content Generated",
        description: "AI has created social media content based on your parameters",
      });
    }, 2000);
  };

  // Schedule post
  const schedulePost = () => {
    if (!generatedContent) {
      toast({
        title: "No Content to Schedule",
        description: "Please generate content first",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Post Scheduled",
      description: "Your social media post has been scheduled successfully",
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Social Media Manager</h1>
      <p className="text-muted-foreground">Automate and optimize your social media marketing with AI.</p>
      
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="create">
            <MessageSquare className="mr-2 h-4 w-4" />
            Content Creator
          </TabsTrigger>
          <TabsTrigger value="schedule">
            <Calendar className="mr-2 h-4 w-4" />
            Scheduler
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <BarChart className="mr-2 h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="engagement">
            <Share className="mr-2 h-4 w-4" />
            Engagement
          </TabsTrigger>
        </TabsList>
        
        {/* Content Creator Tab */}
        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Content Generator</CardTitle>
              <CardDescription>
                Generate engaging social media posts with AI assistance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="topic">Topic or Campaign</Label>
                <Input id="topic" placeholder="e.g., Product Launch, Holiday Campaign" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tone">Content Tone</Label>
                <Select defaultValue="professional">
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                    <SelectItem value="informative">Informative</SelectItem>
                    <SelectItem value="humorous">Humorous</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Target Platforms</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="instagram" 
                      checked={selectedPlatforms.instagram}
                      onCheckedChange={(checked) => 
                        setSelectedPlatforms({...selectedPlatforms, instagram: !!checked})
                      }
                    />
                    <Label htmlFor="instagram" className="flex items-center">
                      <Instagram className="mr-1 h-4 w-4" /> Instagram
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="facebook" 
                      checked={selectedPlatforms.facebook}
                      onCheckedChange={(checked) => 
                        setSelectedPlatforms({...selectedPlatforms, facebook: !!checked})
                      }
                    />
                    <Label htmlFor="facebook" className="flex items-center">
                      <Facebook className="mr-1 h-4 w-4" /> Facebook
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="twitter" 
                      checked={selectedPlatforms.twitter}
                      onCheckedChange={(checked) => 
                        setSelectedPlatforms({...selectedPlatforms, twitter: !!checked})
                      }
                    />
                    <Label htmlFor="twitter" className="flex items-center">
                      <Twitter className="mr-1 h-4 w-4" /> Twitter
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="linkedin" 
                      checked={selectedPlatforms.linkedin}
                      onCheckedChange={(checked) => 
                        setSelectedPlatforms({...selectedPlatforms, linkedin: !!checked})
                      }
                    />
                    <Label htmlFor="linkedin" className="flex items-center">
                      <Linkedin className="mr-1 h-4 w-4" /> LinkedIn
                    </Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords (comma separated)</Label>
                <Input id="keywords" placeholder="e.g., digital marketing, AI, growth" />
              </div>
              
              <Button 
                className="w-full" 
                onClick={generateContent} 
                disabled={isGenerating}
              >
                {isGenerating ? "Generating..." : "Generate Content with AI"}
              </Button>
            </CardContent>
          </Card>
          
          {generatedContent && (
            <Card>
              <CardHeader>
                <CardTitle>Generated Content</CardTitle>
                <CardDescription>
                  Review and edit before scheduling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea 
                  className="min-h-[120px]" 
                  value={generatedContent}
                  onChange={(e) => setGeneratedContent(e.target.value)}
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-gray-100">
                    <Instagram className="mr-1 h-3 w-3" /> Instagram
                  </Badge>
                  <Badge variant="outline" className="bg-gray-100">
                    <Facebook className="mr-1 h-3 w-3" /> Facebook
                  </Badge>
                  <Badge variant="outline" className="bg-gray-100">
                    #DigitalMarketing
                  </Badge>
                  <Badge variant="outline" className="bg-gray-100">
                    #AI
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Edit Content</Button>
                <Button onClick={schedulePost}>Schedule Post</Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>
        
        {/* Scheduler Tab */}
        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Calendar</CardTitle>
              <CardDescription>
                Schedule and manage your upcoming social media posts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <Button variant="outline">Today</Button>
                <div className="flex gap-2">
                  <Button variant="outline">&lt;</Button>
                  <Button variant="outline">May 2025</Button>
                  <Button variant="outline">&gt;</Button>
                </div>
                <Button variant="outline">Month</Button>
              </div>
              
              <div className="border rounded-md grid grid-cols-7 text-center">
                <div className="p-2 border-b border-r font-medium">Sun</div>
                <div className="p-2 border-b border-r font-medium">Mon</div>
                <div className="p-2 border-b border-r font-medium">Tue</div>
                <div className="p-2 border-b border-r font-medium">Wed</div>
                <div className="p-2 border-b border-r font-medium">Thu</div>
                <div className="p-2 border-b border-r font-medium">Fri</div>
                <div className="p-2 border-b font-medium">Sat</div>
                
                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i - 4; // Offset to start month on correct day
                  const isCurrentMonth = day > 0 && day <= 31;
                  const hasPost = isCurrentMonth && [3, 8, 15, 22, 27].includes(day);
                  
                  return (
                    <div 
                      key={i} 
                      className={`p-2 h-24 border-b ${i % 7 !== 6 ? 'border-r' : ''} relative ${isCurrentMonth ? '' : 'text-gray-400'}`}
                    >
                      <span>{isCurrentMonth ? day : (day <= 0 ? 30 + day : day - 31)}</span>
                      {hasPost && (
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="bg-blue-100 text-blue-800 text-xs p-1 rounded mb-1 truncate">
                            <Instagram className="inline h-3 w-3 mr-1" />
                            Product update
                          </div>
                          {day === 15 && (
                            <div className="bg-green-100 text-green-800 text-xs p-1 rounded truncate">
                              <Facebook className="inline h-3 w-3 mr-1" />
                              Case study
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">+ Create New Post</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>
                AI-powered insights into your social media performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <TrendingUp className="mx-auto h-8 w-8 text-green-500 mb-2" />
                      <h3 className="text-xl font-bold">2,547</h3>
                      <p className="text-sm text-muted-foreground">Total Engagements</p>
                      <Badge className="mt-2 bg-green-100 text-green-800 hover:bg-green-100">+15% ↑</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <MessageSquare className="mx-auto h-8 w-8 text-blue-500 mb-2" />
                      <h3 className="text-xl font-bold">128</h3>
                      <p className="text-sm text-muted-foreground">Comments</p>
                      <Badge className="mt-2 bg-blue-100 text-blue-800 hover:bg-blue-100">+7% ↑</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Share className="mx-auto h-8 w-8 text-purple-500 mb-2" />
                      <h3 className="text-xl font-bold">85</h3>
                      <p className="text-sm text-muted-foreground">Shares</p>
                      <Badge className="mt-2 bg-purple-100 text-purple-800 hover:bg-purple-100">+23% ↑</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="h-80 flex items-center justify-center border rounded-md mb-6">
                <p className="text-muted-foreground">Performance chart visualization would be shown here</p>
              </div>
              
              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-4">AI-Generated Insights</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                    <p className="text-sm">Your video posts are receiving 43% more engagement than image posts. Consider creating more video content.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-blue-500 mt-0.5" />
                    <p className="text-sm">Based on follower activity, the optimal posting times for your audience are Tuesday and Thursday between 12-2pm.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="h-5 w-5 text-purple-500 mt-0.5" />
                    <p className="text-sm">Posts containing questions in the caption receive 27% more comments. Try incorporating more questions to boost engagement.</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Export Report</Button>
              <Button className="ml-2">Generate More Insights</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Comment Management</CardTitle>
              <CardDescription>
                Use AI to help manage and respond to social media comments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="pending">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="pending">Pending (12)</TabsTrigger>
                  <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
                  <TabsTrigger value="responded">Responded</TabsTrigger>
                </TabsList>
                
                <TabsContent value="pending" className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="font-medium">U{i}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-medium">User{i}</h4>
                              <span className="text-xs text-muted-foreground">2h ago</span>
                            </div>
                            <p className="text-sm mt-1">
                              {i === 1 && "Do you offer consulting services for small businesses?"}
                              {i === 2 && "Great content! How can I learn more about your AI tools?"}
                              {i === 3 && "When will the new features be available for existing customers?"}
                            </p>
                            <div className="flex gap-2 mt-3">
                              <Button variant="outline" size="sm">Generate AI Response</Button>
                              <Button size="sm">Reply</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="suggestions">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-3">AI-Suggested Response Templates</h3>
                      <div className="space-y-4">
                        <div className="border p-3 rounded-md">
                          <h4 className="text-sm font-medium mb-2">Product Inquiry Response</h4>
                          <p className="text-sm text-muted-foreground">
                            "Thank you for your interest in our [product]! We'd be happy to provide more information. You can learn more at [link] or feel free to DM us with specific questions."
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">Use Template</Button>
                        </div>
                        
                        <div className="border p-3 rounded-md">
                          <h4 className="text-sm font-medium mb-2">Customer Support Response</h4>
                          <p className="text-sm text-muted-foreground">
                            "We're sorry to hear you're experiencing issues with [product/service]. Our support team is here to help! Please DM us with more details or contact support at [email]."
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">Use Template</Button>
                        </div>
                        
                        <div className="border p-3 rounded-md">
                          <h4 className="text-sm font-medium mb-2">Appreciation Response</h4>
                          <p className="text-sm text-muted-foreground">
                            "Thank you for your kind words! We're thrilled to hear you're enjoying our [product/service]. Your support means a lot to us!"
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">Use Template</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="responded">
                  <div className="text-center py-8 text-muted-foreground">
                    No responded comments to display.
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Sentiment Analysis</CardTitle>
              <CardDescription>
                AI-powered analysis of comment sentiments across platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-6">
                <div className="text-center p-4 border rounded-md flex-1 mx-2">
                  <div className="text-green-500 font-bold text-2xl">78%</div>
                  <div className="text-sm text-muted-foreground">Positive</div>
                </div>
                <div className="text-center p-4 border rounded-md flex-1 mx-2">
                  <div className="text-gray-500 font-bold text-2xl">15%</div>
                  <div className="text-sm text-muted-foreground">Neutral</div>
                </div>
                <div className="text-center p-4 border rounded-md flex-1 mx-2">
                  <div className="text-red-500 font-bold text-2xl">7%</div>
                  <div className="text-sm text-muted-foreground">Negative</div>
                </div>
              </div>
              
              <div className="h-64 flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Sentiment trend visualization would be shown here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AISocialMediaManager;
