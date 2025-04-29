
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Component, Image, Columns3 } from 'lucide-react';

const PageEditor = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Input 
            type="text" 
            placeholder="Page Title" 
            className="text-2xl font-bold border-none bg-transparent shadow-none focus-visible:ring-0 px-0" 
            defaultValue="Home Page"
          />
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Preview</Button>
          <Button>Save Page</Button>
        </div>
      </div>
      
      <div className="flex gap-4">
        <div className="w-full">
          {/* Visual Editor Canvas */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-md min-h-[600px] p-6 relative">
            {/* This would be the visual editor with drag-and-drop */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="mb-2">Drag elements from the sidebar to build your page</div>
                <Button variant="outline">Add Section</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Editor Controls */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="fixed right-8 bottom-8 rounded-full size-12 shadow-lg">
              <Settings className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-96">
            <SheetHeader>
              <SheetTitle>Page Elements</SheetTitle>
            </SheetHeader>
            
            <Tabs defaultValue="components" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="components">
                  <Component className="h-4 w-4 mr-2" />
                  Components
                </TabsTrigger>
                <TabsTrigger value="sections">
                  <Columns3 className="h-4 w-4 mr-2" />
                  Sections
                </TabsTrigger>
                <TabsTrigger value="media">
                  <Image className="h-4 w-4 mr-2" />
                  Media
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="components" className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {['Button', 'Text', 'Image', 'Card', 'Form', 'List', 'Table', 'Icon'].map((item) => (
                    <Card key={item} className="cursor-grab hover:shadow-md transition-shadow">
                      <CardContent className="p-3 text-center">{item}</CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="sections" className="mt-4 space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  {['Hero Section', 'Features Grid', 'Call to Action', 'Testimonials', 'Pricing Table', 'Footer'].map((item) => (
                    <Card key={item} className="cursor-grab hover:shadow-md transition-shadow">
                      <CardContent className="p-3 text-center">{item}</CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="media" className="mt-4 space-y-4">
                <Input type="file" />
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square bg-gray-200 rounded-md"></div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default PageEditor;
