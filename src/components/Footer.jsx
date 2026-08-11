function Footer() {
  return (
    <footer className="mt-16 py-8 px-8 bg-[#1A202C] text-white text-sm flex flex-col md:flex-row items-center justify-between gap-2 w-full">
      <p>© {new Date().getFullYear()} Kyan So. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="mailto:charlesque404@gmail.com" className="text-white">charlesque404@gmail.com</a>
        <span>+63-917-302-0679</span>
      </div>
    </footer>
  )
}

export default Footer
