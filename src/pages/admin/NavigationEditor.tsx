
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react';

const NavigationEditor = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Navigation Editor</h1>
        <Button>Save Changes</Button>
      </div>
      
      <Tabs defaultValue="main-menu">
        <TabsList>
          <TabsTrigger value="main-menu">Main Menu</TabsTrigger>
          <TabsTrigger value="footer-menu">Footer Menu</TabsTrigger>
          <TabsTrigger value="mobile-menu">Mobile Menu</TabsTrigger>
        </TabsList>
        
        <TabsContent value="main-menu" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Main Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 cursor-move">≡</span>
                      <Input value="Home" className="w-48" />
                      <Input value="/" placeholder="URL" className="w-48" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <ChevronUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Parent item with submenu */}
                <div className="border rounded-md p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 cursor-move">≡</span>
                      <Input value="Digital Marketing" className="w-48" />
                      <Input value="/digital-marketing" placeholder="URL" className="w-48" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <ChevronUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Submenu items */}
                  <div className="pl-8 mt-4 space-y-4">
                    <div className="border rounded-md p-4 bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 cursor-move">≡</span>
                          <Input value="Social Media" className="w-48" />
                          <Input value="/digital-marketing/social-media" placeholder="URL" className="w-48" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <ChevronUp className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4 bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 cursor-move">≡</span>
                          <Input value="SEO" className="w-48" />
                          <Input value="/digital-marketing/seo" placeholder="URL" className="w-48" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <ChevronUp className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full border border-dashed">
                      <Plus className="h-4 w-4 mr-2" /> Add Submenu Item
                    </Button>
                  </div>
                </div>
                
                {/* More menu items would go here */}
                <div className="border rounded-md p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 cursor-move">≡</span>
                      <Input value="Web Development" className="w-48" />
                      <Input value="/web-development" placeholder="URL" className="w-48" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <ChevronUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" /> Add Menu Item
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="footer-menu" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Footer Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p>Footer menu configuration would be displayed here</p>
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" /> Add Menu Item
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="mobile-menu" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Mobile Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p>Mobile menu configuration would be displayed here</p>
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" /> Add Menu Item
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NavigationEditor;
