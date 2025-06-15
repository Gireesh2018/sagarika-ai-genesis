
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MenuItem {
  id: string;
  label: string;
  url: string;
  children?: MenuItem[];
}

const NavigationEditor = () => {
  const { toast } = useToast();
  
  const [mainMenuItems, setMainMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      label: 'Home',
      url: '/',
    },
    {
      id: '2',
      label: 'Digital Marketing',
      url: '/digital-marketing',
      children: [
        {
          id: '2-1',
          label: 'Social Media',
          url: '/digital-marketing/social-media',
        },
        {
          id: '2-2',
          label: 'SEO',
          url: '/digital-marketing/seo',
        }
      ]
    },
    {
      id: '3',
      label: 'Web Development',
      url: '/web-development',
    }
  ]);

  const updateMenuItem = (id: string, field: 'label' | 'url', value: string, parentId?: string) => {
    setMainMenuItems(prevItems => {
      const updateItem = (items: MenuItem[]): MenuItem[] => {
        return items.map(item => {
          if (item.id === id) {
            return { ...item, [field]: value };
          }
          if (item.children) {
            return { ...item, children: updateItem(item.children) };
          }
          return item;
        });
      };
      return updateItem(prevItems);
    });
  };

  const deleteMenuItem = (id: string) => {
    setMainMenuItems(prevItems => {
      const filterItems = (items: MenuItem[]): MenuItem[] => {
        return items.filter(item => item.id !== id).map(item => ({
          ...item,
          children: item.children ? filterItems(item.children) : undefined
        }));
      };
      return filterItems(prevItems);
    });
  };

  const addMenuItem = (parentId?: string) => {
    const newItem: MenuItem = {
      id: Date.now().toString(),
      label: 'New Item',
      url: '/new-item',
    };

    if (parentId) {
      setMainMenuItems(prevItems => {
        const addToParent = (items: MenuItem[]): MenuItem[] => {
          return items.map(item => {
            if (item.id === parentId) {
              return {
                ...item,
                children: [...(item.children || []), newItem]
              };
            }
            if (item.children) {
              return { ...item, children: addToParent(item.children) };
            }
            return item;
          });
        };
        return addToParent(prevItems);
      });
    } else {
      setMainMenuItems(prevItems => [...prevItems, newItem]);
    }
  };

  const moveItem = (id: string, direction: 'up' | 'down') => {
    setMainMenuItems(prevItems => {
      const moveInArray = (items: MenuItem[]): MenuItem[] => {
        const index = items.findIndex(item => item.id === id);
        if (index === -1) {
          return items.map(item => ({
            ...item,
            children: item.children ? moveInArray(item.children) : undefined
          }));
        }

        const newItems = [...items];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        
        if (targetIndex >= 0 && targetIndex < newItems.length) {
          [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
        }
        
        return newItems;
      };
      return moveInArray(prevItems);
    });
  };

  const handleSaveChanges = () => {
    toast({
      title: "Navigation Updated",
      description: "Navigation structure has been saved successfully.",
    });
  };

  const renderMenuItem = (item: MenuItem, isChild = false) => (
    <div key={item.id} className={`border rounded-md p-4 ${isChild ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 cursor-move">≡</span>
          <Input 
            value={item.label} 
            onChange={(e) => updateMenuItem(item.id, 'label', e.target.value)}
            className="w-48" 
          />
          <Input 
            value={item.url} 
            onChange={(e) => updateMenuItem(item.id, 'url', e.target.value)}
            placeholder="URL" 
            className="w-48" 
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => moveItem(item.id, 'up')}>
            <ChevronUp className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => moveItem(item.id, 'down')}>
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => deleteMenuItem(item.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {item.children && (
        <div className="pl-8 mt-4 space-y-4">
          {item.children.map(child => renderMenuItem(child, true))}
          <Button variant="ghost" className="w-full border border-dashed" onClick={() => addMenuItem(item.id)}>
            <Plus className="h-4 w-4 mr-2" /> Add Submenu Item
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Navigation Editor</h1>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
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
                {mainMenuItems.map(item => renderMenuItem(item))}
                <Button variant="outline" className="w-full" onClick={() => addMenuItem()}>
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
                <p>Footer menu configuration will be available here</p>
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" /> Add Footer Menu Item
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
                <p>Mobile menu configuration will be available here</p>
                <Button className="mt-4">
                  <Plus className="h-4 w-4 mr-2" /> Add Mobile Menu Item
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
