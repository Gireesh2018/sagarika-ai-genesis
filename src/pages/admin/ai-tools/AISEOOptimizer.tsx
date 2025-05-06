
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { SearchCheck, BarChart, TrendingUp, FileText, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type SeoFormValues = {
  url: string;
  content: string;
  targetKeywords: string;
  includeMetaAnalysis: boolean;
  includeContentAnalysis: boolean;
  includeBacklinkAnalysis: boolean;
}

type KeywordData = {
  keyword: string;
  volume: number;
  difficulty: number;
  cpc: number;
  relevance: number;
}

type SeoAnalysisResult = {
  score: number;
  title: {
    text: string;
    score: number;
    suggestions: string[];
  };
  metaDescription: {
    text: string;
    score: number;
    suggestions: string[];
  };
  keywords: {
    primary: string;
    secondary: string[];
    missing: string[];
    density: number;
    recommendation: string;
  };
  readability: {
    score: number;
    readingTime: string;
    suggestions: string[];
  };
  contentLength: {
    count: number;
    recommendation: string;
  };
  suggestedKeywords: KeywordData[];
}

const AISEOOptimizer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<SeoAnalysisResult | null>(null);
  const [activeTab, setActiveTab] = useState('analyze');
  const { toast } = useToast();

  const form = useForm<SeoFormValues>({
    defaultValues: {
      url: '',
      content: '',
      targetKeywords: '',
      includeMetaAnalysis: true,
      includeContentAnalysis: true,
      includeBacklinkAnalysis: false,
    },
  });

  const mockKeywordData: KeywordData[] = [
    { keyword: 'digital marketing', volume: 74000, difficulty: 78, cpc: 12.50, relevance: 95 },
    { keyword: 'seo tools', volume: 27000, difficulty: 64, cpc: 8.75, relevance: 92 },
    { keyword: 'website optimization', volume: 18500, difficulty: 53, cpc: 7.20, relevance: 89 },
    { keyword: 'keyword research', volume: 33000, difficulty: 67, cpc: 9.10, relevance: 88 },
    { keyword: 'content marketing', volume: 49000, difficulty: 71, cpc: 10.30, relevance: 85 },
    { keyword: 'meta tags', volume: 12000, difficulty: 42, cpc: 4.80, relevance: 84 },
  ];

  const runSeoAnalysis = (values: SeoFormValues) => {
    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock analysis result
      const result: SeoAnalysisResult = {
        score: 78,
        title: {
          text: "Advanced SEO Optimization Strategies for 2025",
          score: 85,
          suggestions: [
            "Add your primary keyword closer to the beginning",
            "Consider reducing length to under 60 characters"
          ]
        },
        metaDescription: {
          text: "Learn how to optimize your website for search engines with our advanced SEO strategies for 2025. Improve rankings and drive more organic traffic.",
          score: 75,
          suggestions: [
            "Include more specific keyword variations",
            "Add a call-to-action"
          ]
        },
        keywords: {
          primary: values.targetKeywords.split(',')[0]?.trim() || "seo optimization",
          secondary: ["search engine", "website ranking", "organic traffic"],
          missing: ["competitive analysis", "backlink strategy"],
          density: 2.4,
          recommendation: "Increase primary keyword density to 3-4% for optimal results"
        },
        readability: {
          score: 72,
          readingTime: "5 minutes",
          suggestions: [
            "Shorten paragraphs for better scanability",
            "Add more subheadings to break up content",
            "Use simpler language in technical sections"
          ]
        },
        contentLength: {
          count: values.content.length,
          recommendation: values.content.length < 1500 ? 
            "Consider expanding content to at least 1500 words for comprehensive coverage" : 
            "Content length is optimal for SEO"
        },
        suggestedKeywords: mockKeywordData
      };

      setAnalysisResult(result);
      setIsAnalyzing(false);
      setActiveTab('results');
      
      toast({
        title: "SEO Analysis Complete",
        description: `Your content scored ${result.score}/100. Check the results tab for details.`,
      });
    }, 2500);
  };

  const onSubmit = (values: SeoFormValues) => {
    runSeoAnalysis(values);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI SEO Optimizer</h1>
      <p className="text-muted-foreground">Optimize your content for better search engine rankings.</p>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="analyze" className="flex items-center gap-2">
            <SearchCheck className="w-4 h-4" /> Analyze Content
          </TabsTrigger>
          <TabsTrigger value="results" className="flex items-center gap-2" disabled={!analysisResult}>
            <BarChart className="w-4 h-4" /> Results
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="analyze">
          <Card>
            <CardHeader>
              <CardTitle>SEO Analysis</CardTitle>
              <CardDescription>
                Enter your content or URL to analyze and optimize for search engines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website URL (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com/page-to-analyze" {...field} />
                        </FormControl>
                        <FormDescription>
                          Enter the URL of the page you want to analyze
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content to Analyze</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste your content here for SEO analysis..."
                            className="min-h-[200px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the content you want to analyze and optimize for SEO
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="targetKeywords"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Keywords</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="seo optimization, search engine ranking, digital marketing"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Enter your target keywords separated by commas
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Analysis Options</h3>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                      <FormField
                        control={form.control}
                        name="includeMetaAnalysis"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox 
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Meta Analysis</FormLabel>
                              <FormDescription>
                                Analyze title, meta description, and headings
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="includeContentAnalysis"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox 
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Content Analysis</FormLabel>
                              <FormDescription>
                                Analyze keyword density, readability, and structure
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="includeBacklinkAnalysis"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox 
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Backlink Analysis</FormLabel>
                              <FormDescription>
                                Analyze backlinks and link building opportunities
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? "Analyzing..." : "Run SEO Analysis"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="results">
          {analysisResult && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Overall SEO Score</span>
                    <span className={getScoreColor(analysisResult.score)}>
                      {analysisResult.score}/100
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`absolute top-0 left-0 h-full ${
                        analysisResult.score >= 80 ? "bg-green-500" : 
                        analysisResult.score >= 60 ? "bg-yellow-500" : 
                        "bg-red-500"
                      }`}
                      style={{ width: `${analysisResult.score}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" /> Title & Meta Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Page Title</h3>
                      <p className="text-sm p-3 bg-gray-50 rounded-md">{analysisResult.title.text}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Score</span>
                        <span className={`text-sm font-medium ${getScoreColor(analysisResult.title.score)}`}>
                          {analysisResult.title.score}/100
                        </span>
                      </div>
                      
                      <h4 className="text-sm font-medium mt-3 mb-1">Suggestions</h4>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        {analysisResult.title.suggestions.map((suggestion, index) => (
                          <li key={index}>{suggestion}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2">Meta Description</h3>
                      <p className="text-sm p-3 bg-gray-50 rounded-md">{analysisResult.metaDescription.text}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Score</span>
                        <span className={`text-sm font-medium ${getScoreColor(analysisResult.metaDescription.score)}`}>
                          {analysisResult.metaDescription.score}/100
                        </span>
                      </div>
                      
                      <h4 className="text-sm font-medium mt-3 mb-1">Suggestions</h4>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        {analysisResult.metaDescription.suggestions.map((suggestion, index) => (
                          <li key={index}>{suggestion}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" /> Keyword Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Primary Keyword</h3>
                      <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-md">
                        <span className="px-2 py-1 text-xs bg-blue-100 rounded text-blue-800 font-medium">
                          {analysisResult.keywords.primary}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Density: {analysisResult.keywords.density}%
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2">Secondary Keywords</h3>
                      <div className="flex flex-wrap gap-2">
                        {analysisResult.keywords.secondary.map((keyword, index) => (
                          <span key={index} className="px-2 py-1 text-xs bg-gray-100 rounded text-gray-800">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2">Missing Keywords</h3>
                      <div className="flex flex-wrap gap-2">
                        {analysisResult.keywords.missing.map((keyword, index) => (
                          <span key={index} className="px-2 py-1 text-xs bg-red-50 rounded text-red-800">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-1">Recommendation</h3>
                      <p className="text-sm text-muted-foreground">{analysisResult.keywords.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" /> Content Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Readability Score</span>
                      <span className={`text-sm font-medium ${getScoreColor(analysisResult.readability.score)}`}>
                        {analysisResult.readability.score}/100
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Estimated Reading Time</span>
                      <span className="text-sm">{analysisResult.readability.readingTime}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Content Length</span>
                      <span className="text-sm">{analysisResult.contentLength.count} characters</span>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-1">Readability Suggestions</h3>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        {analysisResult.readability.suggestions.map((suggestion, index) => (
                          <li key={index}>{suggestion}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-1">Content Recommendation</h3>
                      <p className="text-sm text-muted-foreground">{analysisResult.contentLength.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" /> Keyword Opportunities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Keyword</TableHead>
                          <TableHead className="text-right">Search Volume</TableHead>
                          <TableHead className="text-right">Difficulty</TableHead>
                          <TableHead className="text-right">Relevance</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {analysisResult.suggestedKeywords.map((keyword, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{keyword.keyword}</TableCell>
                            <TableCell className="text-right">{keyword.volume.toLocaleString()}</TableCell>
                            <TableCell className="text-right">
                              <span className={`px-2 py-0.5 rounded text-xs ${
                                keyword.difficulty > 70 ? "bg-red-100 text-red-800" :
                                keyword.difficulty > 50 ? "bg-yellow-100 text-yellow-800" :
                                "bg-green-100 text-green-800"
                              }`}>
                                {keyword.difficulty}/100
                              </span>
                            </TableCell>
                            <TableCell className="text-right">{keyword.relevance}%</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <TrendingUp className="mr-2 h-4 w-4" /> Export Keyword Analysis
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>AI Content Improvement Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-md border border-blue-100">
                      <h3 className="text-sm font-medium text-blue-800 mb-2">Title Optimization</h3>
                      <p className="text-sm text-blue-700">
                        Try "Ultimate Guide to SEO Optimization Strategies for 2025" to improve CTR and keyword relevance.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-md border border-green-100">
                      <h3 className="text-sm font-medium text-green-800 mb-2">Content Structure</h3>
                      <p className="text-sm text-green-700">
                        Add more H2 and H3 headings to improve readability and help search engines understand your content structure.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-md border border-purple-100">
                      <h3 className="text-sm font-medium text-purple-800 mb-2">Internal Linking</h3>
                      <p className="text-sm text-purple-700">
                        Add 3-5 internal links to related content on your site to improve SEO and user engagement.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-amber-50 rounded-md border border-amber-100">
                      <h3 className="text-sm font-medium text-amber-800 mb-2">Featured Snippet Opportunity</h3>
                      <p className="text-sm text-amber-700">
                        Structure a paragraph as a direct answer to "What is SEO optimization?" to target featured snippets.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Save Analysis</Button>
                  <Button>Apply AI Recommendations</Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AISEOOptimizer;
