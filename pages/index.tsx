import React, { useState } from 'react'
import Header from "@/components/Header"

const Home = () => {
  const [theme, setTheme] = useState("light")
  const toggleTheme = (theme: string) => {
    setTheme(theme)
  }
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <div className={theme === "light" ? `bg-[#fff] min-h-[92vh]` : `bg-[#0f1e24] text-[#fff] min-h-[92vh]`}>
        <h1>Home</h1>
      </div>
    </div>
  )
}
export default Home
