
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';

const ThemeManager = () => {
  const { toast } = useToast();
  const [colors, setColors] = useState({
    primary: '#9b87f5',
    secondary: '#7E69AB',
    text: '#1A1F2C',
    background: '#FFFFFF'
  });
  
  const [typography, setTypography] = useState({
    headingFont: 'Inter',
    bodyFont: 'Inter',
    headingSize: 24,
    bodySize: 16
  });
  
  const [layout, setLayout] = useState({
    containerWidth: 1280,
    contentPadding: 16,
    borderRadius: 8
  });

  const [componentStyles, setComponentStyles] = useState({
    buttonStyle: 'rounded',
    cardStyle: 'shadow'
  });

  const handleColorChange = (colorType: string, value: string) => {
    setColors(prev => ({
      ...prev,
      [colorType]: value
    }));
    applyThemeChanges();
  };

  const applyThemeChanges = () => {
    // Apply colors to CSS variables
    const root = document.documentElement;
    
    // Convert hex to HSL for CSS variables
    const hexToHsl = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0, s = 0, l = (max + min) / 2;

      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }

      return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
    };

    root.style.setProperty('--primary', hexToHsl(colors.primary));
    root.style.setProperty('--background', hexToHsl(colors.background));
    root.style.setProperty('--foreground', hexToHsl(colors.text));
    
    // Apply typography
    root.style.setProperty('--font-size-heading', `${typography.headingSize}px`);
    root.style.setProperty('--font-size-body', `${typography.bodySize}px`);
    
    // Apply layout
    root.style.setProperty('--container-width', `${layout.containerWidth}px`);
    root.style.setProperty('--content-padding', `${layout.contentPadding}px`);
    root.style.setProperty('--border-radius', `${layout.borderRadius}px`);
  };

  const handleSaveChanges = () => {
    // Save theme to localStorage
    const themeData = {
      colors,
      typography,
      layout,
      componentStyles
    };
    
    localStorage.setItem('sagarika-theme', JSON.stringify(themeData));
    applyThemeChanges();
    
    toast({
      title: "Theme Updated",
      description: "Your theme changes have been saved successfully.",
    });
  };

  const resetToDefault = () => {
    setColors({
      primary: '#9b87f5',
      secondary: '#7E69AB',
      text: '#1A1F2C',
      background: '#FFFFFF'
    });
    setTypography({
      headingFont: 'Inter',
      bodyFont: 'Inter',
      headingSize: 24,
      bodySize: 16
    });
    setLayout({
      containerWidth: 1280,
      contentPadding: 16,
      borderRadius: 8
    });
    setComponentStyles({
      buttonStyle: 'rounded',
      cardStyle: 'shadow'
    });
    
    toast({
      title: "Theme Reset",
      description: "Theme has been reset to default values.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Theme Manager</h1>
        <div className="space-x-2">
          <Button variant="outline" onClick={resetToDefault}>Reset to Default</Button>
          <Button onClick={handleSaveChanges}>Save Changes</Button>
        </div>
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
              <CardDescription>Customize your website's color palette. Changes are applied instantly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex space-x-2">
                    <Input 
                      id="primaryColor" 
                      type="color" 
                      value={colors.primary} 
                      onChange={(e) => handleColorChange('primary', e.target.value)}
                      className="w-12 h-10 p-1" 
                    />
                    <Input 
                      type="text" 
                      value={colors.primary} 
                      onChange={(e) => handleColorChange('primary', e.target.value)}
                      className="flex-1" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="secondaryColor">Secondary Color</Label>
                  <div className="flex space-x-2">
                    <Input 
                      id="secondaryColor" 
                      type="color" 
                      value={colors.secondary} 
                      onChange={(e) => handleColorChange('secondary', e.target.value)}
                      className="w-12 h-10 p-1" 
                    />
                    <Input 
                      type="text" 
                      value={colors.secondary} 
                      onChange={(e) => handleColorChange('secondary', e.target.value)}
                      className="flex-1" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="textColor">Text Color</Label>
                  <div className="flex space-x-2">
                    <Input 
                      id="textColor" 
                      type="color" 
                      value={colors.text} 
                      onChange={(e) => handleColorChange('text', e.target.value)}
                      className="w-12 h-10 p-1" 
                    />
                    <Input 
                      type="text" 
                      value={colors.text} 
                      onChange={(e) => handleColorChange('text', e.target.value)}
                      className="flex-1" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="backgroundColor">Background Color</Label>
                  <div className="flex space-x-2">
                    <Input 
                      id="backgroundColor" 
                      type="color" 
                      value={colors.background} 
                      onChange={(e) => handleColorChange('background', e.target.value)}
                      className="w-12 h-10 p-1" 
                    />
                    <Input 
                      type="text" 
                      value={colors.background} 
                      onChange={(e) => handleColorChange('background', e.target.value)}
                      className="flex-1" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Color Preview */}
              <div className="mt-6 p-4 border rounded-lg" style={{ backgroundColor: colors.background, color: colors.text }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.primary }}>Theme Preview</h3>
                <p className="mb-4">This is how your content will look with the current color scheme.</p>
                <Button style={{ backgroundColor: colors.primary, color: colors.background }}>
                  Sample Button
                </Button>
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
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Headings Font</Label>
                  <Select value={typography.headingFont} onValueChange={(value) => setTypography(prev => ({ ...prev, headingFont: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Inter">Inter</SelectItem>
                      <SelectItem value="Roboto">Roboto</SelectItem>
                      <SelectItem value="Open Sans">Open Sans</SelectItem>
                      <SelectItem value="Montserrat">Montserrat</SelectItem>
                      <SelectItem value="Poppins">Poppins</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Body Font</Label>
                  <Select value={typography.bodyFont} onValueChange={(value) => setTypography(prev => ({ ...prev, bodyFont: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Inter">Inter</SelectItem>
                      <SelectItem value="Roboto">Roboto</SelectItem>
                      <SelectItem value="Open Sans">Open Sans</SelectItem>
                      <SelectItem value="Montserrat">Montserrat</SelectItem>
                      <SelectItem value="Poppins">Poppins</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Heading Size: {typography.headingSize}px</Label>
                  <Slider
                    value={[typography.headingSize]}
                    onValueChange={([value]) => setTypography(prev => ({ ...prev, headingSize: value }))}
                    min={18}
                    max={48}
                    step={2}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Body Size: {typography.bodySize}px</Label>
                  <Slider
                    value={[typography.bodySize]}
                    onValueChange={([value]) => setTypography(prev => ({ ...prev, bodySize: value }))}
                    min={12}
                    max={24}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* Typography Preview */}
              <div className="mt-6 p-4 border rounded-lg">
                <h3 
                  className="font-semibold mb-2" 
                  style={{ 
                    fontFamily: typography.headingFont, 
                    fontSize: `${typography.headingSize}px` 
                  }}
                >
                  Sample Heading
                </h3>
                <p 
                  style={{ 
                    fontFamily: typography.bodyFont, 
                    fontSize: `${typography.bodySize}px` 
                  }}
                >
                  This is sample body text to preview your typography settings. You can see how the fonts and sizes will look on your website.
                </p>
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
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Container Width: {layout.containerWidth}px</Label>
                  <Slider
                    value={[layout.containerWidth]}
                    onValueChange={([value]) => setLayout(prev => ({ ...prev, containerWidth: value }))}
                    min={960}
                    max={1600}
                    step={20}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Narrow (960px)</span>
                    <span>Medium (1280px)</span>
                    <span>Wide (1600px)</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Content Padding: {layout.contentPadding}px</Label>
                  <Slider
                    value={[layout.contentPadding]}
                    onValueChange={([value]) => setLayout(prev => ({ ...prev, contentPadding: value }))}
                    min={0}
                    max={60}
                    step={4}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Border Radius: {layout.borderRadius}px</Label>
                  <Slider
                    value={[layout.borderRadius]}
                    onValueChange={([value]) => setLayout(prev => ({ ...prev, borderRadius: value }))}
                    min={0}
                    max={24}
                    step={2}
                    className="w-full"
                  />
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
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Button Style</Label>
                  <Select value={componentStyles.buttonStyle} onValueChange={(value) => setComponentStyles(prev => ({ ...prev, buttonStyle: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rounded">Rounded</SelectItem>
                      <SelectItem value="square">Square</SelectItem>
                      <SelectItem value="pill">Pill</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Card Style</Label>
                  <Select value={componentStyles.cardStyle} onValueChange={(value) => setComponentStyles(prev => ({ ...prev, cardStyle: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="shadow">Shadow</SelectItem>
                      <SelectItem value="bordered">Bordered</SelectItem>
                      <SelectItem value="flat">Flat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Component Preview */}
              <div className="mt-6 p-4 border rounded-lg space-y-4">
                <h3 className="font-semibold mb-4">Component Preview</h3>
                <div className="space-y-4">
                  <Button 
                    className={
                      componentStyles.buttonStyle === 'pill' ? 'rounded-full' :
                      componentStyles.buttonStyle === 'square' ? 'rounded-none' : 'rounded-md'
                    }
                  >
                    Sample Button ({componentStyles.buttonStyle})
                  </Button>
                  
                  <div 
                    className={`p-4 ${
                      componentStyles.cardStyle === 'shadow' ? 'shadow-md' :
                      componentStyles.cardStyle === 'bordered' ? 'border-2' : 'bg-gray-50'
                    }`}
                  >
                    <h4 className="font-medium">Sample Card</h4>
                    <p className="text-sm text-muted-foreground">This shows the {componentStyles.cardStyle} card style.</p>
                  </div>
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
