'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "../button"
import { Moon, Sun } from "../Icons"
export default function ThemeBotton() { 
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button variant="outline" size="icon"
              onClick={() => setTheme(theme==="light" ?"dark" : "light")}
              >
                
           
               {theme==="light"? <Sun/> : <Moon/> }
              </Button>
  )
}
