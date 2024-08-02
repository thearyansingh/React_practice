import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import Button from './components/Button'
import Card from './components/Card'

const App = () => {
  const [themeMode, setThemeMode] = useState("Light")
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
   
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Button/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                     <Card/>  
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
