import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                TeamKul
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Empowering businesses with innovative digital solutions to thrive in the modern marketplace.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/website-development" className="text-muted-foreground hover:text-foreground transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="text-muted-foreground hover:text-foreground transition-colors">
                  Graphic & UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="text-muted-foreground hover:text-foreground transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services/software-solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/it-support" className="text-muted-foreground hover:text-foreground transition-colors">
                  IT Support & Networking
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Tech Park, Silicon Valley<br />
                  Bangalore, Karnataka 560001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-foreground transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:info@teamkul.tech" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@teamkul.tech
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="max-w-[220px]" 
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TeamKul Technologies. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed and developed with ❤️ by TeamKul
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer