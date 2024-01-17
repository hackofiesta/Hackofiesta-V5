'use client'
import Home from '@/files/Home'
import { Features, FeaturesProps, ThemeProvider } from "@lobehub/ui";
const page = () => {
  return (
    <div>
      <ThemeProvider themeMode="dark">

      <Home />
      </ThemeProvider>
   
    </div>
  )
}

export default page
