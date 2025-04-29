
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const ThemeManager = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Theme Manager</h1>
        <Button>Save Changes</Button>
      </div>
      
      <Tabs defaultValue="colors">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
        </TabsList>
        
        <TabsContent value="colors" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Color Scheme</CardTitle>
              <CardDescription>Customize your website's color palette.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex">
                    <Input id="primaryColor" type="color" value="#9b87f5" className="w-12 h-10 p-1" />
                    <Input type="text" value="#9b87f5" className="ml-2" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="secondaryColor">Secondary Color</Label>
                  <div className="flex">
                    <Input id="secondaryColor" type="color" value="#7E69AB" className="w-12 h-10 p-1" />
                    <Input type="text" value="#7E69AB" className="ml-2" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="textColor">Text Color</Label>
                  <div className="flex">
                    <Input id="textColor" type="color" value="#1A1F2C" className="w-12 h-10 p-1" />
                    <Input type="text" value="#1A1F2C" className="ml-2" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="backgroundColor">Background Color</Label>
                  <div className="flex">
                    <Input id="backgroundColor" type="color" value="#FFFFFF" className="w-12 h-10 p-1" />
                    <Input type="text" value="#FFFFFF" className="ml-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="typography" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Typography Settings</CardTitle>
              <CardDescription>Customize fonts, sizes, and styles.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Headings Font</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Inter</option>
                    <option>Roboto</option>
                    <option>Open Sans</option>
                    <option>Montserrat</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label>Body Font</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Inter</option>
                    <option>Roboto</option>
                    <option>Open Sans</option>
                    <option>Montserrat</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="layout" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Layout Settings</CardTitle>
              <CardDescription>Adjust spacing, container widths, and layout options.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Container Width</Label>
                  <Input type="range" min="960" max="1600" step="10" defaultValue="1280" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Narrow</span>
                    <span>Medium</span>
                    <span>Wide</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Content Padding</Label>
                  <Input type="range" min="0" max="100" step="4" defaultValue="16" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="components" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Component Styles</CardTitle>
              <CardDescription>Customize the appearance of buttons, cards, and other components.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Button Style</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Rounded</option>
                    <option>Square</option>
                    <option>Pill</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label>Card Style</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Shadow</option>
                    <option>Bordered</option>
                    <option>Flat</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ThemeManager;
