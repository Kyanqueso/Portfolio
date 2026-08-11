import { Outlet } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Footer from './Footer.jsx'
import Lightbox from './Lightbox.jsx'

function Layout() {
  return (
    <>
      <nav className="flex items-center gap-4 py-4 px-8 font-bold">
        <div className="flex items-center gap-4 ml-auto">
          <a href="https://www.linkedin.com/in/kyan-so/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} className="text-[#0A66C2]" />
          </a>
          <a href="https://github.com/Kyanqueso" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} className="text-[#181717]" />
          </a>
        </div>
      </nav>
      <Outlet />
      <Footer />
      <Lightbox />
    </>
  )
}

export default Layout
