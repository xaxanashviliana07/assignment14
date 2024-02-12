import { useState, useEffect } from "react"
import Logo from "./Logo"
import Menu from "./Menu"
import Navbar from "./Navbar"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const setWidth = () => {
    if (window.innerWidth > 768) {
      setIsOpen(true)
    }
  }

  useEffect(() => {
    setWidth()
  })

  return (
    <>
      <header className="relative z-10 flex items-center justify-between w-full p-5 md:pr-0 lg:max-w-5xl lg:mx-auto">
        <div>
          <Logo />
        </div>

        {isOpen && (
          <nav className="mx-5 md:mx-0">
            <Navbar />
          </nav>
        )}

        <div className="md:hidden">
          <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </>
  )
}

export default Header