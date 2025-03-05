import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Award, 
  Users, 
  Lightbulb, 
  Target, 
  Heart, 
  Shield,
  CheckCircle,
  ChevronRight
} from 'lucide-react'

export const metadata = {
  title: 'About Us | TeamKul - Professional Web Development & Digital Services',
  description: 'Learn about TeamKul, our mission, values, and the team behind our innovative digital solutions.',
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Vikram Singh',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bio: 'With over 15 years of experience in the tech industry, Vikram founded TeamKul with a vision to help businesses leverage digital technologies for growth.'
    },
    {
      name: 'Neha Gupta',
      position: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bio: 'Neha leads our design team with her exceptional creative vision and deep understanding of user experience principles.'
    },
    {
      name: 'Arjun Mehta',
      position: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bio: 'Arjun oversees all technical aspects of our projects, ensuring that we deliver robust, scalable, and cutting-edge solutions.'
    },
    {
      name: 'Priya Sharma',
      position: 'Digital Marketing Specialist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bio: 'Priya brings her expertise in digital marketing to help our clients achieve their business goals through effective online strategies.'
    },
    {
      name: 'Rahul Verma',
      position: 'App Development Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bio: 'Rahul specializes in mobile app development, creating intuitive and feature-rich applications for iOS and Android platforms.'
    },
    {
      name: 'Ananya Patel',
      position: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      bio: 'Ananya ensures that all our projects are delivered on time and within budget while maintaining the highest quality standards.'
    }
  ]

  const values = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Client-Centric Approach',
      description: 'We put our clients at the center of everything we do, focusing on their unique needs and goals.'
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, paying meticulous attention to detail and quality.'
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: 'Passion',
      description: 'We are passionate about what we do and bring enthusiasm and dedication to every project.'
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices in all our business dealings.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Continuous Growth',
      description: 'We are committed to continuous learning and improvement, both as individuals and as a company.'
    }
  ]

  const milestones = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'TeamKul was established with a vision to provide innovative digital solutions.'
    },
    {
      year: '2017',
      title: 'Expanded Service Offerings',
      description: 'Added digital marketing and mobile app development to our service portfolio.'
    },
    {
      year: '2019',
      title: 'Reached 100+ Clients',
      description: 'Successfully completed projects for over 100 clients across various industries.'
    },
    {
      year: '2020',
      title: 'Opened New Office',
      description: 'Expanded our operations with a new office in Bangalore.'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Received multiple awards for our innovative digital solutions and client satisfaction.'
    },
    {
      year: '2023',
      title: 'International Expansion',
      description: 'Started serving clients globally with a focus on delivering world-class digital experiences.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            About <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">TeamKul</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We are a team of passionate digital experts committed to transforming businesses through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2015, TeamKul began with a simple mission: to help businesses harness the power of digital technology to grow and thrive in an increasingly connected world.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a small web development agency has now evolved into a full-service digital solutions provider, offering a comprehensive range of services from website and app development to digital marketing and IT support.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Over the years, we have had the privilege of working with businesses of all sizes across various industries, helping them achieve their digital objectives and drive growth through innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, TeamKul is recognized as a leading digital agency, known for our technical expertise, creative approach, and unwavering commitment to client satisfaction.
              </p>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="TeamKul Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guided by our core principles, we strive to make a meaningful impact in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To empower businesses with innovative digital solutions that drive growth, enhance customer experiences, and create lasting value in an ever-evolving digital landscape.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p>Deliver exceptional digital experiences that exceed client expectations</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p>Provide strategic guidance and technical expertise to help businesses navigate digital transformation</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p>Foster long-term partnerships based on trust, transparency, and mutual success</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To be the most trusted digital partner for businesses worldwide, known for our innovation, excellence, and the tangible value we create for our clients.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p>Lead the industry in adopting and implementing emerging technologies</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p>Build a global presence while maintaining our commitment to personalized service</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p>Create a positive impact on society through responsible digital innovation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide our decisions, shape our culture, and define how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The talented individuals behind TeamKul who bring expertise, creativity, and passion to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped our growth and evolution as a company.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:translate-x-[-0.5px]" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2" />
                  <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-primary transform translate-x-[-14px] md:translate-x-[-14px] flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{milestone.year}</span>
                  </div>
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Office</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at our modern office space where innovation and creativity thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="TeamKul Office"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">TeamKul Headquarters</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our modern office space is designed to foster creativity, collaboration, and innovation. It's where our team comes together to bring your digital vision to life.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p>Collaborative workspaces that encourage teamwork and idea sharing</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p>State-of-the-art technology and infrastructure</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p>Centrally located for easy access</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p>Relaxation areas to recharge and inspire creativity</p>
                </div>
              </div>
              
              <p className="text-lg font-medium mb-2">Address:</p>
              <p className="text-muted-foreground mb-6">
                123 Tech Park, Silicon Valley<br />
                Bangalore, Karnataka 560001<br />
                India
              </p>
              
              <Button asChild>
                <Link href="/contact">
                  Contact Us <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
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