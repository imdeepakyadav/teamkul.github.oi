"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PortfolioPage() {
  // Categories for filtering
  const categories = [
    "All",
    "Website Development",
    "Digital Marketing",
    "Graphic & UI/UX Design",
    "App Development",
    "Software Solutions",
    "IT Support",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Portfolio projects
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Website Development",
      description:
        "A fully responsive e-commerce platform with secure payment integration and inventory management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      href: "/portfolio/e-commerce-platform",
      featured: true,
    },
    {
      title: "Healthcare Mobile App",
      category: "App Development",
      description:
        "A comprehensive healthcare app for patients to book appointments, access medical records, and consult with doctors.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      href: "/portfolio/healthcare-app",
      featured: true,
    },
    {
      title: "Corporate Branding",
      category: "Graphic & UI/UX Design",
      description:
        "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
      image:
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      href: "/portfolio/corporate-branding",
      featured: true,
    },
    {
      title: "Digital Marketing Campaign",
      category: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategy that increased clients online visibility and lead generation by 200%.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      href: "/portfolio/digital-marketing-campaign",
      featured: false,
    },
    {
      title: "Inventory Management System",
      category: "Software Solutions",
      description:
        "Custom inventory management software with real-time tracking, reporting, and analytics capabilities.",
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      href: "/portfolio/inventory-management-system",
      featured: false,
    },
    {
      title: "Network Infrastructure Setup",
      category: "IT Support",
      description:
        "Complete network infrastructure design and implementation for a corporate office with 200+ employees.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      href: "/portfolio/network-infrastructure",
      featured: false,
    },
    {
      title: "Restaurant Website",
      category: "Website Development",
      description:
        "A modern, responsive website for a restaurant with online reservation and menu management system.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      href: "/portfolio/restaurant-website",
      featured: false,
    },
    {
      title: "Fitness Tracking App",
      category: "App Development",
      description:
        "Mobile application for tracking workouts, nutrition, and progress with personalized recommendations.",
      image:
        "https://images.unsplash.com/photo-1510440777527-38815cfc6cc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      href: "/portfolio/fitness-app",
      featured: false,
    },
    {
      title: "Product Packaging Design",
      category: "Graphic & UI/UX Design",
      description:
        "Creative packaging design for a premium skincare product line that increased shelf appeal and sales.",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      href: "/portfolio/packaging-design",
      featured: false,
    },
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our diverse range of projects that showcase our expertise,
            creativity, and commitment to delivering exceptional digital
            solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Filter & Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={project.href}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No projects found in this category. Please try another filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dive deeper into some of our most impactful projects and learn how
              we helped our clients achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="relative h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="E-Commerce Platform Case Study"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="text-sm font-medium mb-2 text-primary-foreground">
                    Website Development
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
                    E-Commerce Platform
                  </h3>
                  <p className="text-white/80 mb-4">
                    How we helped a retail business increase online sales by
                    150% with a custom e-commerce solution.
                  </p>
                  <Button variant="secondary" asChild>
                    <Link href="/portfolio/e-commerce-platform">
                      Read Case Study
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="relative h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare Mobile App Case Study"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
                  <div className="text-sm font-medium mb-2 text-primary-foreground">
                    App Development
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Healthcare Mobile App
                  </h3>
                  <p className="text-white/80 mb-4">
                    Transforming patient care with a mobile app that streamlined
                    appointments and improved patient engagement.
                  </p>
                  <Button variant="secondary" asChild>
                    <Link href="/portfolio/healthcare-app">
                      Read Case Study
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dont just take our word for it. Heres what our clients have to say
              about working with TeamKul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="italic text-lg mb-6">
                  TeamKul transformed our online presence completely. Their
                  website development and digital marketing services have helped
                  us increase our leads by 150% in just three months.
                </p>
                <div>
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">
                    CEO, TechStart India
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="italic text-lg mb-6">
                  The mobile app developed by TeamKul for our healthcare service
                  has received outstanding feedback from our users. The team was
                  professional, responsive, and delivered beyond our
                  expectations.
                </p>
                <div>
                  <p className="font-semibold">Rajesh Kumar</p>
                  <p className="text-sm text-muted-foreground">
                    Founder, HealthPlus
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Lets collaborate to create innovative solutions that drive your
            business forward. Contact us today to get started.
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
