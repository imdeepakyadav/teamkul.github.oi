import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Code, 
  Globe, 
  Palette, 
  Smartphone, 
  Server, 
  Headphones,
  ArrowRight,
  CheckCircle,
  Star,
  ChevronRight
} from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-blue-500" />,
      title: 'Website Development',
      description: 'Custom websites that are responsive, fast, and optimized for search engines.',
      href: '/services/website-development'
    },
    {
      icon: <Globe className="h-10 w-10 text-green-500" />,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to boost your online presence and drive conversions.',
      href: '/services/digital-marketing'
    },
    {
      icon: <Palette className="h-10 w-10 text-purple-500" />,
      title: 'Graphic & UI/UX Design',
      description: 'Stunning visuals and intuitive user experiences that captivate your audience.',
      href: '/services/design'
    },
    {
      icon: <Smartphone className="h-10 w-10 text-red-500" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      href: '/services/app-development'
    },
    {
      icon: <Server className="h-10 w-10 text-yellow-500" />,
      title: 'Software Solutions',
      description: 'Custom software development tailored to your specific business needs.',
      href: '/services/software-solutions'
    },
    {
      icon: <Headphones className="h-10 w-10 text-teal-500" />,
      title: 'IT Support & Networking',
      description: 'Reliable technical support and networking solutions for your business.',
      href: '/services/it-support'
    }
  ]

  const features = [
    'Expert team with years of industry experience',
    'Tailored solutions for businesses of all sizes',
    'Cutting-edge technologies and methodologies',
    'Transparent communication and project management',
    'Ongoing support and maintenance services',
    'Competitive pricing with excellent ROI'
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Website Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      href: '/portfolio/e-commerce-platform'
    },
    {
      title: 'Healthcare Mobile App',
      category: 'App Development',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      href: '/portfolio/healthcare-app'
    },
    {
      title: 'Corporate Branding',
      category: 'Graphic & UI/UX Design',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      href: '/portfolio/corporate-branding'
    }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      position: 'CEO, TechStart India',
      content: 'TeamKul transformed our online presence completely. Their website development and digital marketing services have helped us increase our leads by 150% in just three months.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      position: 'Founder, HealthPlus',
      content: 'The mobile app developed by TeamKul for our healthcare service has received outstanding feedback from our users. The team was professional, responsive, and delivered beyond our expectations.',
      rating: 5
    },
    {
      name: 'Ananya Patel',
      position: 'Marketing Director, GlobalRetail',
      content: 'Working with TeamKul on our branding and UI/UX design was a game-changer for our business. Their creative approach and attention to detail resulted in a significant improvement in user engagement.',
      rating: 4
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 -z-10" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transforming Ideas Into
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Digital Reality</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                TeamKul delivers innovative digital solutions that help businesses thrive in today's competitive landscape. From web development to digital marketing, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="TeamKul - Digital Solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to meet your business objectives and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden border border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 relative">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Why Choose TeamKul"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose TeamKul</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At TeamKul, we combine technical expertise with creative thinking to deliver solutions that not only meet but exceed your expectations. Our client-centric approach ensures that your vision is at the heart of everything we do.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              
              <Button className="mt-8" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore some of our recent work that showcases our expertise and creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link key={index} href={project.href} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-md h-[300px]">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="text-sm font-medium mb-2 opacity-80">{project.category}</div>
                    <h3 className="text-xl font-semibold group-hover:text-primary-foreground transition-colors">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with TeamKul.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <p className="mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Let's collaborate to create innovative solutions that drive your business forward. Contact us today to get started.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact" className="flex items-center">
              Get in Touch <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}