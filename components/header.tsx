"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { LanguageToggle } from '@/components/language-toggle'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils'
import { Menu, X, Globe, Code, Palette, Smartphone, Server, Headphones } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Website Development', href: '/services/website-development', icon: <Code className="h-5 w-5" /> },
    { name: 'Digital Marketing', href: '/services/digital-marketing', icon: <Globe className="h-5 w-5" /> },
    { name: 'Graphic & UI/UX Design', href: '/services/design', icon: <Palette className="h-5 w-5" /> },
    { name: 'App Development', href: '/services/app-development', icon: <Smartphone className="h-5 w-5" /> },
    { name: 'Software Solutions', href: '/services/software-solutions', icon: <Server className="h-5 w-5" /> },
    { name: 'IT Support & Networking', href: '/services/it-support', icon: <Headphones className="h-5 w-5" /> },
  ]

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            TeamKul
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === '/'}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.name}>
                        <Link href={service.href} legacyBehavior passHref>
                          <NavigationMenuLink 
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              pathname === service.href && "bg-accent"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              {service.icon}
                              <div className="text-sm font-medium leading-none">{service.name}</div>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === '/about'}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === '/portfolio'}>
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname.startsWith('/blog')}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === '/contact'}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center space-x-2 ml-4">
            <LanguageToggle />
            <ModeToggle />
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/" 
              className={cn(
                "block py-2 px-4 rounded-md hover:bg-accent",
                pathname === '/' && "bg-accent"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="py-2 px-4">
              <h3 className="font-medium mb-2">Services</h3>
              <div className="space-y-2 pl-4">
                {services.map((service) => (
                  <Link 
                    key={service.name}
                    href={service.href} 
                    className={cn(
                      "flex items-center gap-2 py-1 px-2 rounded-md hover:bg-accent",
                      pathname === service.href && "bg-accent"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              href="/about" 
              className={cn(
                "block py-2 px-4 rounded-md hover:bg-accent",
                pathname === '/about' && "bg-accent"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            <Link 
              href="/portfolio" 
              className={cn(
                "block py-2 px-4 rounded-md hover:bg-accent",
                pathname === '/portfolio' && "bg-accent"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            
            <Link 
              href="/blog" 
              className={cn(
                "block py-2 px-4 rounded-md hover:bg-accent",
                pathname.startsWith('/blog') && "bg-accent"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            
            <Link 
              href="/contact" 
              className={cn(
                "block py-2 px-4 rounded-md hover:bg-accent",
                pathname === '/contact' && "bg-accent"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-2 flex items-center justify-between">
              <LanguageToggle />
              <Button asChild className="w-full mt-2">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header