
import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Clock, Upload, FileText, Zap, Target, BarChart3, Users, Copy } from 'lucide-react';

const SocialCalendar = () => {
  const [date, setDate] = React.useState(new Date());
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Social Media Calendar</h1>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Templates
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px]">
              <DialogHeader>
                <DialogTitle>Content Templates</DialogTitle>
                <DialogDescription>
                  Choose from pre-made templates to quickly create posts
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-2 gap-4 py-4">
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Product Launch</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Exciting news! 🎉 We're launching [Product Name] - a game-changer for [benefit]. Get ready to [action]! #ProductLaunch #Innovation
                    </p>
                    <Badge variant="outline">Marketing</Badge>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Behind the Scenes</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Take a peek behind the curtain! 👀 Here's how we [process/create/work] at [Company]. #BehindTheScenes #TeamWork
                    </p>
                    <Badge variant="outline">Engagement</Badge>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Educational Tip</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      💡 Pro Tip: [Educational content about your industry]. This simple trick can [benefit]. What's your favorite tip? #Education #Tips
                    </p>
                    <Badge variant="outline">Educational</Badge>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Customer Success</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      🌟 Success Story: [Customer Name] achieved [result] using [product/service]. We're proud to be part of their journey! #Success #CustomerLove
                    </p>
                    <Badge variant="outline">Social Proof</Badge>
                  </CardContent>
                </Card>
              </div>
              
              <DialogFooter>
                <Button>Use Template</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Zap className="h-4 w-4 mr-2" />
                Bulk Schedule
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
              <DialogHeader>
                <DialogTitle>Bulk Schedule Posts</DialogTitle>
                <DialogDescription>
                  Upload multiple posts and schedule them across different times and platforms
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg font-medium mb-2">Upload CSV File</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload a CSV with columns: content, platform, date, time
                  </p>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Choose File
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input id="start-date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="frequency">Posting Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label className="mb-2 block">Time Slots</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm">9:00 AM</Button>
                    <Button variant="outline" size="sm">1:00 PM</Button>
                    <Button variant="outline" size="sm">5:00 PM</Button>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button>Schedule All Posts</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Target className="h-4 w-4 mr-2" />
                Create Post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create Social Media Post</DialogTitle>
                <DialogDescription>
                  Create and schedule posts across multiple platforms with AI assistance.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="post-content">Post Content</Label>
                  <Textarea
                    id="post-content"
                    className="min-h-24"
                    placeholder="Type your post content here..."
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0/280 characters</span>
                    <Button variant="ghost" size="sm">
                      <Zap className="h-3 w-3 mr-1" />
                      AI Enhance
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="post-date">Schedule Date</Label>
                    <Input id="post-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="post-time">Schedule Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select optimal time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9am">9:00 AM (High Engagement)</SelectItem>
                        <SelectItem value="1pm">1:00 PM (Peak Time)</SelectItem>
                        <SelectItem value="5pm">5:00 PM (After Work)</SelectItem>
                        <SelectItem value="custom">Custom Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Select Platforms</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="facebook" />
                      <Label htmlFor="facebook">Facebook</Label>
                      <Badge variant="outline" className="ml-auto">Best at 1-3 PM</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="instagram" />
                      <Label htmlFor="instagram">Instagram</Label>
                      <Badge variant="outline" className="ml-auto">Best at 11 AM-1 PM</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="twitter" />
                      <Label htmlFor="twitter">Twitter</Label>
                      <Badge variant="outline" className="ml-auto">Best at 9 AM-10 AM</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="linkedin" />
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Badge variant="outline" className="ml-auto">Best at 7:45 AM</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Add Media</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-muted-foreground">Drag & drop images or videos</p>
                    <Button variant="outline" size="sm" className="mt-2">Browse Files</Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="hashtags">Hashtags</Label>
                  <Input id="hashtags" placeholder="#digitalmarketing #AI #growth" />
                  <div className="flex gap-2 flex-wrap">
                    <Button variant="outline" size="sm">
                      <Zap className="h-3 w-3 mr-1" />
                      Generate Hashtags
                    </Button>
                    <Badge variant="secondary">#trending</Badge>
                    <Badge variant="secondary">#popular</Badge>
                  </div>
                </div>
              </div>
              
              <DialogFooter className="flex justify-between">
                <Button variant="outline">Save as Draft</Button>
                <div className="flex gap-2">
                  <Button variant="outline">Preview</Button>
                  <Button type="submit">Schedule Post</Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      {/* Analytics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Posts This Week</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Engagement Rate</p>
                <p className="text-2xl font-bold">8.4%</p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Best Time Today</p>
                <p className="text-2xl font-bold">2 PM</p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Scheduled Posts</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Target className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="border rounded-md p-3"
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                View All Scheduled Posts
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Optimal Posting Times</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Facebook</span>
                <Badge variant="outline">1:00 PM - 3:00 PM</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Instagram</span>
                <Badge variant="outline">11:00 AM - 1:00 PM</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Twitter</span>
                <Badge variant="outline">9:00 AM - 10:00 AM</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">LinkedIn</span>
                <Badge variant="outline">7:45 AM - 9:00 AM</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Connected Accounts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>FB</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Facebook</p>
                    <p className="text-sm text-muted-foreground">Sagarika Digital</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Disconnect</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>IG</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-sm text-muted-foreground">@sagarika_digital</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Disconnect</Button>
              </div>
              
              <Button className="w-full">Connect More Accounts</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Posts for {date.toDateString()}</CardTitle>
              <CardDescription>
                Manage your scheduled posts for this date.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="scheduled">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="scheduled">Scheduled (5)</TabsTrigger>
                  <TabsTrigger value="published">Published (12)</TabsTrigger>
                  <TabsTrigger value="drafts">Drafts (3)</TabsTrigger>
                  <TabsTrigger value="pending">Pending Approval (2)</TabsTrigger>
                </TabsList>
                
                <TabsContent value="scheduled" className="mt-4 space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>FB</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">12:30 PM</p>
                            <p className="text-sm text-muted-foreground">Facebook</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">Delete</Button>
                        </div>
                      </div>
                      <p className="mt-2">
                        Check out our latest blog post on digital marketing trends for 2025! 
                        #DigitalMarketing #SEO #SagarikaDigital
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>IG</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">3:45 PM</p>
                            <p className="text-sm text-muted-foreground">Instagram</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">Delete</Button>
                        </div>
                      </div>
                      <p className="mt-2">
                        Swipe through to see our latest web development project showcase! 
                        #WebDevelopment #Design #UX
                      </p>
                    </CardContent>
                  </Card>
                  
                  <div className="text-center py-8">
                    <Button>+ Schedule more posts</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="published" className="mt-4 space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>FB</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Posted at 10:30 AM</p>
                            <p className="text-sm text-muted-foreground">Facebook • 3.2k views • 45 likes</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Copy className="h-3 w-3 mr-1" />
                            Repost
                          </Button>
                          <Button variant="outline" size="sm">Analytics</Button>
                        </div>
                      </div>
                      <p className="mt-2">
                        Just launched our new AI-powered social media tools! 🚀 
                        #DigitalMarketing #AI #SagarikaDigital
                      </p>
                      <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                        <span>❤️ 45 likes</span>
                        <span>💬 12 comments</span>
                        <span>🔄 8 shares</span>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="drafts" className="mt-4 space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Draft: New service announcement</p>
                          <p className="text-sm text-muted-foreground">Created 2 hours ago</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button size="sm">Schedule</Button>
                        </div>
                      </div>
                      <p className="mt-2 text-muted-foreground">
                        Exciting news coming soon about our latest digital marketing solutions...
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="pending" className="mt-4 space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Awaiting Approval</p>
                          <p className="text-sm text-muted-foreground">Submitted by John • 1 hour ago</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Reject</Button>
                          <Button size="sm">Approve</Button>
                        </div>
                      </div>
                      <p className="mt-2">
                        Product showcase: Our latest web development project for client XYZ
                      </p>
                      <Badge className="mt-2" variant="secondary">Needs Review</Badge>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Content Performance Insights</CardTitle>
              <CardDescription>AI-powered recommendations for better engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Optimal Content Mix</p>
                    <p className="text-xs text-muted-foreground">
                      Your audience engages 40% more with video content. Consider adding more videos to your schedule.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <Clock className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Best Posting Windows</p>
                    <p className="text-xs text-muted-foreground">
                      Based on your audience activity, Tuesday and Thursday between 1-3 PM show highest engagement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <Users className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Hashtag Performance</p>
                    <p className="text-xs text-muted-foreground">
                      Posts with 5-10 hashtags perform 23% better. Try using trending hashtags in your niche.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SocialCalendar;
