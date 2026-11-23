import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import cuteDog from '../assets/404_cute_dog.png'

function NotFound() {
  return (
    <div className="px-4 py-24 max-w-3xl mx-auto text-center">
      <img src={cuteDog} alt="Confused cartoon puppy with a question mark" className="w-64 h-auto mx-auto mb-6" />
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="mt-4 text-neutral-600">This page doesn't exist.</p>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 font-medium hover:text-[var(--orange)] transition-colors">
        <FaArrowLeft size={14} /> Back home
      </Link>
    </div>
  )
}

export default NotFound
