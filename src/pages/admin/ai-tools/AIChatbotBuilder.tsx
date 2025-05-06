
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardFooter,
  CardDescription
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MessageCircle, Bot, Plus, MoreHorizontal } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Chatbot name must be at least 3 characters.",
  }),
  description: z.string().optional(),
  welcomeMessage: z.string().min(10, {
    message: "Welcome message must be at least 10 characters.",
  }),
  platforms: z.object({
    website: z.boolean().default(true),
    telegram: z.boolean().default(false),
    whatsapp: z.boolean().default(false),
  }),
});

type ChatbotType = {
  id: string;
  name: string;
  description?: string;
  welcomeMessage: string;
  platforms: {
    website: boolean;
    telegram: boolean;
    whatsapp: boolean;
  };
  createdAt: Date;
  status: 'active' | 'draft' | 'paused';
};

const AIChatbotBuilder = () => {
  const [chatbots, setChatbots] = useState<ChatbotType[]>([
    {
      id: '1',
      name: 'Customer Support Bot',
      description: 'Handles common customer inquiries and support tickets',
      welcomeMessage: "Hello! I'm your customer support assistant. How can I help you today?",
      platforms: {
        website: true,
        telegram: false,
        whatsapp: true,
      },
      createdAt: new Date(2025, 4, 1),
      status: 'active',
    },
    {
      id: '2',
      name: 'Lead Generation Bot',
      description: 'Qualifies leads and collects contact information',
      welcomeMessage: "Hi there! I can help answer your questions about our services and connect you with our team.",
      platforms: {
        website: true,
        telegram: true,
        whatsapp: false,
      },
      createdAt: new Date(2025, 4, 3),
      status: 'draft',
    }
  ]);
  
  const [openDialog, setOpenDialog] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      welcomeMessage: '',
      platforms: {
        website: true,
        telegram: false,
        whatsapp: false,
      },
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newChatbot: ChatbotType = {
      id: Math.random().toString(36).substring(2, 9),
      name: values.name,
      description: values.description,
      welcomeMessage: values.welcomeMessage,
      platforms: values.platforms,
      createdAt: new Date(),
      status: 'draft',
    };
    
    setChatbots([...chatbots, newChatbot]);
    toast({
      title: "Chatbot created!",
      description: `${values.name} has been created successfully.`,
    });
    setOpenDialog(false);
    form.reset();
  };

  const toggleBotStatus = (id: string) => {
    setChatbots(chatbots.map(bot => {
      if (bot.id === id) {
        const newStatus = bot.status === 'active' ? 'paused' : 'active';
        toast({
          title: `Chatbot ${newStatus}`,
          description: `${bot.name} is now ${newStatus}.`,
        });
        return { ...bot, status: newStatus as 'active' | 'paused' | 'draft' };
      }
      return bot;
    }));
  };

  const duplicateBot = (bot: ChatbotType) => {
    const newBot = {
      ...bot,
      id: Math.random().toString(36).substring(2, 9),
      name: `${bot.name} (Copy)`,
      createdAt: new Date(),
      status: 'draft' as const,
    };
    setChatbots([...chatbots, newBot]);
    toast({
      title: "Chatbot duplicated",
      description: `A copy of ${bot.name} has been created.`,
    });
  };

  const deleteBot = (id: string) => {
    const botToDelete = chatbots.find(bot => bot.id !== id);
    setChatbots(chatbots.filter(bot => bot.id !== id));
    toast({
      title: "Chatbot deleted",
      description: `${botToDelete?.name} has been deleted.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Chatbot Builder</h1>
          <p className="text-muted-foreground">Create and customize AI chatbots for your website and messaging platforms.</p>
        </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus size={16} />
              Create Chatbot
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Create New Chatbot</DialogTitle>
              <DialogDescription>
                Configure your AI-powered chatbot to assist customers across multiple platforms.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Customer Support Bot" {...field} />
                      </FormControl>
                      <FormDescription>
                        A descriptive name for your chatbot.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Handles customer inquiries and support" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="welcomeMessage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Welcome Message</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Hello! How can I assist you today?" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        The first message users will see when chatting with your bot.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Platforms</h4>
                  <FormField
                    control={form.control}
                    name="platforms.website"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Website Chat Widget</FormLabel>
                          <FormDescription>
                            Embed this chatbot on your website.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="platforms.telegram"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Telegram</FormLabel>
                          <FormDescription>
                            Connect this chatbot to Telegram.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="platforms.whatsapp"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>WhatsApp</FormLabel>
                          <FormDescription>
                            Connect this chatbot to WhatsApp.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-end gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={() => setOpenDialog(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    Create Chatbot
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chatbots.map((bot) => (
          <Card key={bot.id} className="overflow-hidden">
            <CardHeader className="relative pb-2">
              <div className="absolute right-4 top-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem 
                      onClick={() => toggleBotStatus(bot.id)}
                    >
                      {bot.status === 'active' ? 'Pause' : 'Activate'} Bot
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => duplicateBot(bot)}>
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="text-destructive"
                      onClick={() => deleteBot(bot.id)}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <CardTitle>{bot.name}</CardTitle>
              </div>
              <CardDescription className="mt-1">
                {bot.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <span className={`mr-1.5 h-2.5 w-2.5 rounded-full ${bot.status === 'active' ? 'bg-green-500' : bot.status === 'paused' ? 'bg-amber-500' : 'bg-gray-400'}`} />
                  <span className="capitalize">{bot.status}</span>
                </div>
                <div>
                  Created {bot.createdAt.toLocaleDateString()}
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex flex-wrap gap-2">
                  {bot.platforms.website && (
                    <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs">
                      <MessageCircle className="h-3.5 w-3.5" /> Website
                    </div>
                  )}
                  {bot.platforms.telegram && (
                    <div className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700">
                      <MessageCircle className="h-3.5 w-3.5" /> Telegram
                    </div>
                  )}
                  {bot.platforms.whatsapp && (
                    <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-gray-50 px-6 py-4">
              <div className="flex justify-between w-full">
                <Button variant="outline" size="sm">Test Bot</Button>
                <Button variant="outline" size="sm">Edit Configuration</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
        
        <Card className="border-dashed flex flex-col items-center justify-center p-6 h-full">
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" className="h-12 w-12 rounded-full">
                <Plus className="h-6 w-6" />
              </Button>
            </DialogTrigger>
          </Dialog>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Create a new AI-powered chatbot
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AIChatbotBuilder;
