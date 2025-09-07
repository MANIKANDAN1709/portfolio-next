"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import posthog from 'posthog-js'

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with Next.js 15",
      excerpt: "Explore the latest features in Next.js 15 and learn how to build performant, scalable web applications with the App Router, Server Components, and enhanced optimization techniques.",
      category: "Web Development",
      tags: ["React", "Next.js", "Performance", "JavaScript"],
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      featured: true
    },
    {
      id: 2,
      title: "Data Engineering Best Practices: From ETL to Real-time Streaming",
      excerpt: "A comprehensive guide to modern data engineering practices, covering ETL pipelines, data warehousing, real-time streaming with Kafka, and building robust data infrastructure.",
      category: "Data Engineering",
      tags: ["Python", "Apache Spark", "Kafka", "ETL", "Data Pipeline"],
      readTime: "12 min read",
      publishDate: "Dec 10, 2024",
      featured: true
    },
    {
      id: 3,
      title: "Implementing AI/ML Models in Production: A Complete Guide",
      excerpt: "Learn how to deploy machine learning models to production environments, including model versioning, monitoring, A/B testing, and maintaining model performance over time.",
      category: "Machine Learning",
      tags: ["Python", "TensorFlow", "MLOps", "Docker", "Kubernetes"],
      readTime: "15 min read",
      publishDate: "Dec 5, 2024",
      featured: false
    },
    {
      id: 4,
      title: "Cloud Architecture Patterns: AWS vs Azure vs GCP",
      excerpt: "Compare cloud service offerings and architecture patterns across major cloud providers. Learn when to choose each platform and how to design cloud-native applications.",
      category: "Cloud Computing",
      tags: ["AWS", "Azure", "GCP", "Architecture", "DevOps"],
      readTime: "10 min read",
      publishDate: "Nov 28, 2024",
      featured: false
    },
    {
      id: 5,
      title: "React Native Performance Optimization: Tips and Tricks",
      excerpt: "Boost your React Native app performance with practical optimization techniques, including memory management, rendering optimizations, and native module integration.",
      category: "Mobile Development",
      tags: ["React Native", "Performance", "Mobile", "iOS", "Android"],
      readTime: "7 min read",
      publishDate: "Nov 22, 2024",
      featured: false
    },
    {
      id: 6,
      title: "TypeScript Advanced Patterns for Better Code Quality",
      excerpt: "Master advanced TypeScript patterns including conditional types, mapped types, utility types, and design patterns that lead to more maintainable and type-safe code.",
      category: "Web Development",
      tags: ["TypeScript", "JavaScript", "Design Patterns", "Code Quality"],
      readTime: "11 min read",
      publishDate: "Nov 15, 2024",
      featured: false
    },
    {
      id: 7,
      title: "Building Real-time Analytics Dashboards with Apache Kafka",
      excerpt: "Create powerful real-time analytics dashboards using Kafka streams, processing millions of events per second with low latency and high throughput.",
      category: "Data Engineering",
      tags: ["Kafka", "Real-time", "Analytics", "Streaming", "Dashboard"],
      readTime: "14 min read",
      publishDate: "Nov 8, 2024",
      featured: false
    },
    {
      id: 8,
      title: "Microservices Architecture: From Monolith to Distributed Systems",
      excerpt: "Learn how to break down monolithic applications into microservices, handle distributed system challenges, and implement service mesh patterns.",
      category: "System Design",
      tags: ["Microservices", "Architecture", "Docker", "Kubernetes", "API"],
      readTime: "13 min read",
      publishDate: "Oct 25, 2024",
      featured: false
    }
  ]

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))]

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="font-sans min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Technical Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences in software development, data engineering, and emerging technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category)
                posthog.capture('blog_category_filtered', { category: category })
              }}
              className="relative"
            >
              {category}
              {category !== "All" && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {blogPosts.filter(post => post.category === category).length}
                </Badge>
              )}
            </Button>
          ))}
        </div>

        {/* Featured Posts Section */}
        {selectedCategory === "All" && featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-foreground">Featured Posts</h2>
              <Badge className="bg-primary/10 text-primary">Editor&apos;s Choice</Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-all duration-300 border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{post.category}</Badge>
                          <Badge variant="outline" className="text-xs">Featured</Badge>
                        </div>
                        <CardTitle className="text-xl leading-tight hover:text-primary transition-colors cursor-pointer">
                          {post.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed mt-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{post.publishDate}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Button className="w-full" size="sm" onClick={() => posthog.capture('blog_article_clicked', { post_id: post.id, post_title: post.title, location: 'featured_section' })}>
                        Read Full Article →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {selectedCategory === "All" ? "Latest Posts" : `${selectedCategory} Posts`}
            </h2>
            <Badge variant="outline" className="text-xs">
              {regularPosts.length} {regularPosts.length === 1 ? 'post' : 'posts'}
            </Badge>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed mt-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" size="sm">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="outline" size="sm" className="text-xs">
                            +{post.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{post.publishDate}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="outline" className="w-full" size="sm" onClick={() => posthog.capture('blog_article_clicked', { post_id: post.id, post_title: post.title, location: 'regular_section' })}>
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No posts found</h3>
              <p className="text-muted-foreground">
                No blog posts found in the {selectedCategory} category. Try selecting a different category.
              </p>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="text-center py-12">
              <div className="max-w-md mx-auto space-y-4">
                <div className="text-3xl mb-4">📬</div>
                <h3 className="text-xl font-bold text-foreground">Stay Updated</h3>
                <p className="text-muted-foreground text-sm">
                  Subscribe to get notified about new blog posts and tutorials on web development, data engineering, and tech insights.
                </p>
                <div className="flex gap-2 mt-6">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-sm"
                  />
                  <Button size="sm" onClick={() => posthog.capture('newsletter_subscribe_clicked')}>Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
