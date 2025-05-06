
import React, { useState } from 'react';
import { FileText, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const contentTypes = [
  { value: 'blog-post', label: 'Blog Post' },
  { value: 'social-media', label: 'Social Media Caption' },
  { value: 'product-description', label: 'Product Description' },
  { value: 'ad-copy', label: 'Ad Copy' },
  { value: 'email', label: 'Email Template' },
];

const tones = [
  { value: 'professional', label: 'Professional' },
  { value: 'casual', label: 'Casual' },
  { value: 'persuasive', label: 'Persuasive' },
  { value: 'informative', label: 'Informative' },
  { value: 'enthusiastic', label: 'Enthusiastic' },
];

const AIContentGenerator = () => {
  const [contentType, setContentType] = useState('blog-post');
  const [prompt, setPrompt] = useState('');
  const [tone, setTone] = useState('professional');
  const [creativity, setCreativity] = useState([50]);
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [savedContents, setSavedContents] = useState<Array<{id: string, title: string, content: string, type: string}>>([]);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Input required",
        description: "Please provide a prompt or topic to generate content.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulating API call to an AI service
    try {
      // This is where you would integrate with an actual AI API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Sample generated content based on content type
      let result = '';
      
      // Different placeholder text for different content types
      switch(contentType) {
        case 'blog-post':
          result = `# ${prompt}\n\n## Introduction\nIn today's rapidly evolving digital landscape, ${prompt} has become increasingly important for businesses seeking to maintain a competitive edge. This article explores the key aspects of ${prompt} and how it can transform your approach to digital marketing.\n\n## Why ${prompt} Matters\nUnderstanding the significance of ${prompt} can help your organization adapt to changing market dynamics and customer expectations. By leveraging the latest insights and methodologies, you can develop a strategy that maximizes your return on investment while delivering meaningful results.\n\n## Key Strategies\n1. Analyze your current approach to ${prompt}\n2. Identify areas for improvement and optimization\n3. Implement data-driven solutions that align with your business objectives\n4. Continuously monitor and refine your strategy based on performance metrics\n\n## Conclusion\nBy embracing ${prompt} as a core component of your marketing strategy, you can unlock new opportunities for growth and engagement in an increasingly competitive marketplace.`;
          break;
        case 'social-media':
          result = `✨ Exploring the world of ${prompt} today and discovering amazing insights! What's your experience with ${prompt}? Share in the comments below! 👇 #${prompt.replace(/\s+/g, '')} #DigitalMarketing #TrendingNow`;
          break;
        case 'product-description':
          result = `Introducing our premium ${prompt} solution, designed to meet the evolving needs of modern businesses. Our ${prompt} offers unparalleled performance, reliability, and user experience, making it the preferred choice for industry leaders. With its intuitive interface and robust feature set, our ${prompt} seamlessly integrates into your existing workflow, enhancing productivity while reducing operational costs. Experience the difference with our cutting-edge ${prompt} today.`;
          break;
        case 'ad-copy':
          result = `🔥 TRANSFORM YOUR BUSINESS WITH ${prompt.toUpperCase()} 🔥\n\nUnlock the power of ${prompt} and see immediate results!\n\n✅ Boost engagement\n✅ Increase conversions\n✅ Maximize ROI\n\nLimited time offer: Get started with ${prompt} today and receive a complimentary strategy session with our experts.\n\nClick now to learn more! 👉`;
          break;
        case 'email':
          result = `Subject: Transform Your Approach to ${prompt}\n\nDear Valued Partner,\n\nI hope this message finds you well. I'm reaching out to discuss how our innovative solutions for ${prompt} can help your organization achieve its strategic objectives.\n\nOur team has developed a comprehensive framework for optimizing ${prompt} implementation, resulting in significant improvements in efficiency and effectiveness for our clients.\n\nI would welcome the opportunity to schedule a brief call to explore how we might support your initiatives related to ${prompt}.\n\nLooking forward to your response.\n\nBest regards,\n\n[Your Name]\n[Your Position]\n[Your Company]`;
          break;
        default:
          result = `Content about ${prompt} would appear here. This is generated content based on your prompt and selected parameters.`;
      }
      
      // Adjust the text based on selected tone and creativity
      // In a real implementation, these parameters would be passed to the AI API
      
      setGeneratedContent(result);
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating your content. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setIsCopied(true);
    
    toast({
      title: "Copied to clipboard",
      description: "The generated content has been copied to your clipboard."
    });
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleSave = () => {
    if (!generatedContent) return;
    
    const newContent = {
      id: Date.now().toString(),
      title: prompt.slice(0, 30) + (prompt.length > 30 ? '...' : ''),
      content: generatedContent,
      type: contentType
    };
    
    setSavedContents(prev => [newContent, ...prev]);
    
    toast({
      title: "Content saved",
      description: "Your generated content has been saved to your library."
    });
  };

  const renderContentTypeHelp = () => {
    switch(contentType) {
      case 'blog-post':
        return "Generate comprehensive blog posts with sections, headings, and formatted content.";
      case 'social-media':
        return "Create engaging social media captions with hashtags and emojis for platforms like Instagram, Twitter, or Facebook.";
      case 'product-description':
        return "Craft compelling product descriptions highlighting features, benefits, and value propositions.";
      case 'ad-copy':
        return "Develop attention-grabbing ad copy for digital campaigns with strong calls to action.";
      case 'email':
        return "Generate professional email templates for marketing, sales outreach, or customer communication.";
      default:
        return "Select a content type to see specific guidance.";
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Content Generator</h1>
      <p className="text-muted-foreground">Generate high-quality marketing content with AI assistance.</p>
      
      <Tabs defaultValue="create" className="mt-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="create">Create Content</TabsTrigger>
          <TabsTrigger value="library">Content Library</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Generator</CardTitle>
              <CardDescription>
                Generate blog posts, social media captions, ad copy, product descriptions, and more using advanced AI.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="content-type">Content Type</Label>
                  <Select 
                    value={contentType} 
                    onValueChange={setContentType}
                  >
                    <SelectTrigger id="content-type">
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      {contentTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">{renderContentTypeHelp()}</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tone">Tone</Label>
                  <Select 
                    value={tone} 
                    onValueChange={setTone}
                  >
                    <SelectTrigger id="tone">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      {tones.map(t => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="creativity">Creativity Level: {creativity[0]}%</Label>
                <Slider
                  id="creativity"
                  value={creativity} 
                  onValueChange={setCreativity}
                  max={100}
                  step={1}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Conservative</span>
                  <span>Balanced</span>
                  <span>Creative</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="prompt">Prompt or Topic</Label>
                <Textarea
                  id="prompt"
                  placeholder="Enter your topic or describe what you want to generate..."
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating || !prompt.trim()}
                className="w-full"
              >
                {isGenerating ? 'Generating...' : 'Generate Content'}
              </Button>
              
              {generatedContent && (
                <div className="space-y-4 mt-4">
                  <Separator />
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Generated Content</h3>
                    <div className="space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleCopy}
                      >
                        {isCopied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                        {isCopied ? 'Copied' : 'Copy'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleSave}
                      >
                        <FileText className="h-4 w-4 mr-1" /> Save
                      </Button>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-md overflow-auto max-h-[400px] whitespace-pre-wrap">
                    {generatedContent}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="library">
          <Card>
            <CardHeader>
              <CardTitle>Content Library</CardTitle>
              <CardDescription>
                Access your saved content for easy reference and reuse.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {savedContents.length === 0 ? (
                <div className="text-center py-10 text-muted-foreground">
                  <FileText className="mx-auto h-10 w-10 mb-2 opacity-50" />
                  <p>No saved content yet. Generate and save content to see it here.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {savedContents.map(item => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{item.title}</h3>
                          <Badge variant="outline">
                            {contentTypes.find(t => t.value === item.type)?.label || item.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {item.content.slice(0, 150)}...
                        </p>
                        <div className="flex justify-end space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(item.content);
                              toast({
                                title: "Copied to clipboard",
                                description: "The content has been copied to your clipboard."
                              });
                            }}
                          >
                            <Copy className="h-4 w-4 mr-1" /> Copy
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => {
                              setPrompt(item.title);
                              setContentType(item.type);
                              setGeneratedContent(item.content);
                              document.querySelector('[data-value="create"]')?.click();
                            }}
                          >
                            <FileText className="h-4 w-4 mr-1" /> Edit
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIContentGenerator;
