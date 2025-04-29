
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

const SocialCalendar = () => {
  const [date, setDate] = React.useState(new Date());
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Social Media Calendar</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Post</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create Social Media Post</DialogTitle>
              <DialogDescription>
                Create and schedule posts across multiple platforms.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="post-content">Post Content</Label>
                <textarea
                  id="post-content"
                  className="w-full min-h-24 rounded-md border p-2"
                  placeholder="Type your post content here..."
                ></textarea>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="post-date">Schedule Date</Label>
                  <Input id="post-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="post-time">Schedule Time</Label>
                  <Input id="post-time" type="time" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Select Platforms</Label>
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="facebook" />
                    <Label htmlFor="facebook">Facebook</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="instagram" />
                    <Label htmlFor="instagram">Instagram</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="twitter" />
                    <Label htmlFor="twitter">Twitter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="linkedin" />
                    <Label htmlFor="linkedin">LinkedIn</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Add Media</Label>
                <Input type="file" />
              </div>
            </div>
            
            <DialogFooter>
              <Button type="submit">Schedule Post</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                  <TabsTrigger value="published">Published</TabsTrigger>
                  <TabsTrigger value="drafts">Drafts</TabsTrigger>
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
                
                <TabsContent value="published" className="mt-4">
                  <div className="text-center py-8 text-muted-foreground">
                    No published posts for this date.
                  </div>
                </TabsContent>
                
                <TabsContent value="drafts" className="mt-4">
                  <div className="text-center py-8 text-muted-foreground">
                    No draft posts for this date.
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Analytics Overview</CardTitle>
              <CardDescription>Performance of your recent posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Analytics visualization would be shown here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SocialCalendar;
