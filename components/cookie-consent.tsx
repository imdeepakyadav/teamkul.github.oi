"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent')
    if (!hasConsented) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowConsent(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false')
    setShowConsent(false)
  }

  return (
    <Dialog open={showConsent} onOpenChange={setShowConsent}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cookie Consent</DialogTitle>
          <DialogDescription>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={handleDecline}>
            Decline
          </Button>
          <Button onClick={handleAccept}>
            Accept All
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CookieConsent