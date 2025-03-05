"use client"

import { useEffect } from 'react'
import Script from 'next/script'

export function Analytics() {
  useEffect(() => {
    // This would be replaced with actual Google Analytics initialization
    if (process.env.NODE_ENV === 'production') {
      console.log('Analytics initialized')
    }
  }, [])

  return (
    <>
      {/* Google Analytics Script would go here in production */}
      {process.env.NODE_ENV === 'production' && (
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID`}
        />
      )}
    </>
  )
}