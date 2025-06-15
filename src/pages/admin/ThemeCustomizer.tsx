
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Palette, Type, Layout, Settings } from 'lucide-react';

const ThemeCustomizer = () => {
  const { toast } = useToast();
  
  const [colorScheme, setColorScheme] = useState({
    primary: '#670099',
    secondary: '#2CF37F',
    accent: '#1e5cd4',
    background: '#ffffff',
    foreground: '#182c48',
    muted: '#f7f9fc'
  });

  const [typography, setTypography] = useState({
    fontFamily: 'Inter',
    headingFont: 'Inter',
    fontSize: 16,
    headingScale: 1.25,
    lineHeight: 1.6,
    letterSpacing: 0
  });

  const [layoutSettings, setLayoutSettings] = useState({
    containerWidth: 1280,
    spacing: 16,
    borderRadius: 8,
    shadows: 'medium'
  });

  const [componentStyles, setComponentStyles] = useState({
    buttonStyle: 'rounded',
    cardStyle: 'shadow',
    inputStyle: 'bordered',
    navStyle: 'transparent'
  });

  const googleFonts = [
    'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat', 
    'Poppins', 'Source Sans Pro', 'Raleway', 'Nunito', 'Playfair Display'
  ];

  const handleColorChange = (colorType: string, value: string) => {
    setColorScheme(prev => ({
      ...prev,
      [colorType]: value
    }));
    applyThemeChanges();
  };

  const applyThemeChanges = () => {
    const root = document.documentElement;
    
    // Apply Sagarika brand colors
    root.style.setProperty('--sagarika-primary', colorScheme.primary);
    root.style.setProperty('--sagarika-secondary', colorScheme.secondary);
    root.style.setProperty('--sagarika-accent', colorScheme.accent);
    
    // Apply typography
    root.style.setProperty('--font-family', typography.fontFamily);
    root.style.setProperty('--heading-font', typography.headingFont);
    root.style.setProperty('--font-size-base', `${typography.fontSize}px`);
    root.style.setProperty('--line-height', typography.lineHeight.toString());
    
    // Apply layout
    root.style.setProperty('--container-max-width', `${layoutSettings.containerWidth}px`);
    root.style.setProperty('--spacing-base', `${layoutSettings.spacing}px`);
    root.style.setProperty('--border-radius-base', `${layoutSettings.borderRadius}px`);
  };

  const saveTheme = () => {
    const themeConfig = {
      colorScheme,
      typography,
      layoutSettings,
      componentStyles,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('sagarika-custom-theme', JSON.stringify(themeConfig));
    applyThemeChanges();
    
    toast({
      title: "Theme Saved",
      description: "Your custom theme has been saved and applied successfully.",
    });
  };

  const resetToDefault = () => {
    setColorScheme({
      primary: '#670099',
      secondary: '#2CF37F',
      accent: '#1e5cd4',
      background: '#ffffff',
      foreground: '#182c48',
      muted: '#f7f9fc'
    });
    setTypography({
      fontFamily: 'Inter',
      headingFont: 'Inter',
      fontSize: 16,
      headingScale: 1.25,
      lineHeight: 1.6,
      letterSpacing: 0
    });
    
    toast({
      title: "Theme Reset",
      description: "Theme has been reset to Sagarika default values.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Theme Customizer</h1>
        <div className="space-x-2">
          <Button variant="outline" onClick={resetToDefault}>Reset to Default</Button>
          <Button onClick={saveTheme}>Save Theme</Button>
        </div>
      </div>

      <Tabs defaultValue="colors" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="colors" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Colors
          </TabsTrigger>
          <TabsTrigger value="fonts" className="flex items-center gap-2">
            <Type className="h-4 w-4" />
            Fonts
          </TabsTrigger>
          <TabsTrigger value="layout" className="flex items-center gap-2">
            <Layout className="h-4 w-4" />
            Layout
          </TabsTrigger>
          <TabsTrigger value="components" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Components
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Colors</CardTitle>
                <CardDescription>Customize your Sagarika brand colors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label>Primary Color (Sagarika Purple)</Label>
                    <div className="flex space-x-2 mt-2">
                      <Input 
                        type="color" 
                        value={colorScheme.primary} 
                        onChange={(e) => handleColorChange('primary', e.target.value)}
                        className="w-12 h-10 p-1" 
                      />
                      <Input 
                        type="text" 
                        value={colorScheme.primary} 
                        onChange={(e) => handleColorChange('primary', e.target.value)}
                        className="flex-1" 
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Secondary Color (Sagarika Green)</Label>
                    <div className="flex space-x-2 mt-2">
                      <Input 
                        type="color" 
                        value={colorScheme.secondary} 
                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                        className="w-12 h-10 p-1" 
                      />
                      <Input 
                        type="text" 
                        value={colorScheme.secondary} 
                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                        className="flex-1" 
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Accent Color</Label>
                    <div className="flex space-x-2 mt-2">
                      <Input 
                        type="color" 
                        value={colorScheme.accent} 
                        onChange={(e) => handleColorChange('accent', e.target.value)}
                        className="w-12 h-10 p-1" 
                      />
                      <Input 
                        type="text" 
                        value={colorScheme.accent} 
                        onChange={(e) => handleColorChange('accent', e.target.value)}
                        className="flex-1" 
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Color Preview</CardTitle>
                <CardDescription>See how your colors look together</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4" style={{ backgroundColor: colorScheme.background, color: colorScheme.foreground }}>
                  <div 
                    className="p-4 rounded-lg text-white font-semibold"
                    style={{ backgroundColor: colorScheme.primary }}
                  >
                    Primary Color Sample
                  </div>
                  <div 
                    className="p-4 rounded-lg text-white font-semibold"
                    style={{ backgroundColor: colorScheme.secondary }}
                  >
                    Secondary Color Sample
                  </div>
                  <div 
                    className="p-4 rounded-lg text-white font-semibold"
                    style={{ backgroundColor: colorScheme.accent }}
                  >
                    Accent Color Sample
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="fonts">
          <Card>
            <CardHeader>
              <CardTitle>Typography Settings</CardTitle>
              <CardDescription>Customize fonts and text appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>Body Font Family</Label>
                    <Select value={typography.fontFamily} onValueChange={(value) => setTypography(prev => ({ ...prev, fontFamily: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {googleFonts.map((font) => (
                          <SelectItem key={font} value={font}>{font}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Heading Font Family</Label>
                    <Select value={typography.headingFont} onValueChange={(value) => setTypography(prev => ({ ...prev, headingFont: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {googleFonts.map((font) => (
                          <SelectItem key={font} value={font}>{font}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Base Font Size: {typography.fontSize}px</Label>
                    <Slider
                      value={[typography.fontSize]}
                      onValueChange={([value]) => setTypography(prev => ({ ...prev, fontSize: value }))}
                      min={12}
                      max={24}
                      step={1}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Line Height: {typography.lineHeight}</Label>
                    <Slider
                      value={[typography.lineHeight]}
                      onValueChange={([value]) => setTypography(prev => ({ ...prev, lineHeight: value }))}
                      min={1.2}
                      max={2.0}
                      step={0.1}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 
                      className="text-2xl font-bold mb-2"
                      style={{ 
                        fontFamily: typography.headingFont,
                        fontSize: `${typography.fontSize * typography.headingScale}px`,
                        lineHeight: typography.lineHeight
                      }}
                    >
                      Sample Heading
                    </h3>
                    <p 
                      style={{ 
                        fontFamily: typography.fontFamily,
                        fontSize: `${typography.fontSize}px`,
                        lineHeight: typography.lineHeight
                      }}
                    >
                      This is sample body text to preview your typography settings. 
                      You can see how the fonts and sizes will look on your website.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="layout">
          <Card>
            <CardHeader>
              <CardTitle>Layout Settings</CardTitle>
              <CardDescription>Adjust spacing, container widths, and layout options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>Container Max Width: {layoutSettings.containerWidth}px</Label>
                    <Slider
                      value={[layoutSettings.containerWidth]}
                      onValueChange={([value]) => setLayoutSettings(prev => ({ ...prev, containerWidth: value }))}
                      min={960}
                      max={1600}
                      step={20}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Base Spacing: {layoutSettings.spacing}px</Label>
                    <Slider
                      value={[layoutSettings.spacing]}
                      onValueChange={([value]) => setLayoutSettings(prev => ({ ...prev, spacing: value }))}
                      min={8}
                      max={32}
                      step={2}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Border Radius: {layoutSettings.borderRadius}px</Label>
                    <Slider
                      value={[layoutSettings.borderRadius]}
                      onValueChange={([value]) => setLayoutSettings(prev => ({ ...prev, borderRadius: value }))}
                      min={0}
                      max={24}
                      step={2}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Shadow Style</Label>
                    <Select value={layoutSettings.shadows} onValueChange={(value) => setLayoutSettings(prev => ({ ...prev, shadows: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <p><strong>Container Width:</strong> Controls the maximum width of content containers</p>
                    <p><strong>Base Spacing:</strong> Sets the default spacing between elements</p>
                    <p><strong>Border Radius:</strong> Controls the roundness of corners</p>
                    <p><strong>Shadow Style:</strong> Affects the depth appearance of cards and components</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="components">
          <Card>
            <CardHeader>
              <CardTitle>Component Styles</CardTitle>
              <CardDescription>Customize the appearance of buttons, cards, and other components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>Button Style</Label>
                    <Select value={componentStyles.buttonStyle} onValueChange={(value) => setComponentStyles(prev => ({ ...prev, buttonStyle: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="rounded">Rounded</SelectItem>
                        <SelectItem value="square">Square</SelectItem>
                        <SelectItem value="pill">Pill</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Card Style</Label>
                    <Select value={componentStyles.cardStyle} onValueChange={(value) => setComponentStyles(prev => ({ ...prev, cardStyle: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="shadow">Shadow</SelectItem>
                        <SelectItem value="bordered">Bordered</SelectItem>
                        <SelectItem value="flat">Flat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Input Style</Label>
                    <Select value={componentStyles.inputStyle} onValueChange={(value) => setComponentStyles(prev => ({ ...prev, inputStyle: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="bordered">Bordered</SelectItem>
                        <SelectItem value="filled">Filled</SelectItem>
                        <SelectItem value="underlined">Underlined</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border rounded-lg space-y-4">
                    <h4 className="font-medium">Component Preview</h4>
                    
                    <Button 
                      className={
                        componentStyles.buttonStyle === 'pill' ? 'rounded-full' :
                        componentStyles.buttonStyle === 'square' ? 'rounded-none' : 'rounded-md'
                      }
                      style={{ backgroundColor: colorScheme.primary }}
                    >
                      Sample Button
                    </Button>
                    
                    <div 
                      className={`p-4 ${
                        componentStyles.cardStyle === 'shadow' ? 'shadow-md' :
                        componentStyles.cardStyle === 'bordered' ? 'border-2' : 'bg-gray-50'
                      }`}
                      style={{ borderRadius: `${layoutSettings.borderRadius}px` }}
                    >
                      <h5 className="font-medium">Sample Card</h5>
                      <p className="text-sm text-muted-foreground">This shows the {componentStyles.cardStyle} card style.</p>
                    </div>
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

export default ThemeCustomizer;
