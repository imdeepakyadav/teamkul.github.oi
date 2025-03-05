"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Search,
  Tag,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogPage() {
  // Categories for filtering
  const categories = [
    "All",
    "Web Development",
    "Digital Marketing",
    "Design",
    "App Development",
    "Technology",
    "Business",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Blog posts
  const blogPosts = [
    {
      title: "10 Web Design Trends to Watch in 2025",
      category: "Web Development",
      excerpt:
        "Explore the latest web design trends that are shaping the digital landscape in 2025 and how you can implement them in your projects.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Neha Gupta",
      date: "May 15, 2025",
      slug: "10-web-design-trends-2025",
      featured: true,
    },
    {
      title: "The Ultimate Guide to SEO in 2025",
      category: "Digital Marketing",
      excerpt:
        "Learn the latest SEO strategies and techniques to improve your websites visibility and drive organic traffic in 2025.",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Arjun Mehta",
      date: "April 28, 2025",
      slug: "ultimate-guide-seo-2025",
      featured: true,
    },
    {
      title: "How to Build a Successful Mobile App: From Idea to Launch",
      category: "App Development",
      excerpt:
        "A comprehensive guide to the mobile app development process, from conceptualization to deployment and marketing.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Rahul Verma",
      date: "April 10, 2025",
      slug: "build-successful-mobile-app",
      featured: false,
    },
    {
      title: "The Role of AI in Modern Web Development",
      category: "Technology",
      excerpt:
        "Discover how artificial intelligence is transforming web development and how developers can leverage AI tools to enhance their projects.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Vikram Singh",
      date: "March 22, 2025",
      slug: "ai-in-modern-web-development",
      featured: false,
    },
    {
      title: "Effective Social Media Strategies for Small Businesses",
      category: "Digital Marketing",
      excerpt:
        "Learn how small businesses can leverage social media platforms to build brand awareness, engage with customers, and drive sales.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Priya Sharma",
      date: "March 15, 2025",
      slug: "social-media-strategies-small-businesses",
      featured: false,
    },
    {
      title: "UI/UX Design Principles Every Designer Should Know",
      category: "Design",
      excerpt:
        "Explore the fundamental principles of UI/UX design that can help you create more intuitive, user-friendly, and visually appealing interfaces.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Neha Gupta",
      date: "February 28, 2025",
      slug: "ui-ux-design-principles",
      featured: false,
    },
    {
      title: "The Future of E-Commerce: Trends and Predictions",
      category: "Business",
      excerpt:
        "Insights into the evolving e-commerce landscape and predictions for how online shopping will transform in the coming years.",
      image:
        "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Ananya Patel",
      date: "February 15, 2025",
      slug: "future-of-ecommerce",
      featured: false,
    },
    {
      title: "How to Optimize Website Performance for Better User Experience",
      category: "Web Development",
      excerpt:
        "Practical tips and techniques to improve your websites loading speed, responsiveness, and overall performance.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Arjun Mehta",
      date: "January 30, 2025",
      slug: "optimize-website-performance",
      featured: false,
    },
  ];

  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Insights, tips, and industry updates from our team of experts to
            help you stay ahead in the digital landscape.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-xl"
                >
                  <div className="relative h-[400px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                      <div className="flex items-center text-sm mb-2">
                        <Tag className="h-4 w-4 mr-1" />
                        <span className="text-primary-foreground">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {post.title}
                      </h3>
                      <p className="text-white/80 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm mb-4">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <Button variant="secondary" asChild>
                        <Link href={`/blog/${post.slug}`}>Read Article</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts with Search and Filter */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-3xl font-bold">All Articles</h2>

            <div className="relative w-full md:w-auto max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-primary font-medium mb-2">
                    <Tag className="h-4 w-4 mr-1" />
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No articles found matching your criteria. Please try another
                search or filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest industry insights, tips, and news
                delivered directly to your inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help With Your Digital Strategy?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you navigate the digital
            landscape and achieve your business goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact" className="flex items-center">
              Get in Touch <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
