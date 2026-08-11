import { Link } from 'react-router-dom'
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaRegImage } from 'react-icons/fa'

function ProjectCard({
  category,
  title,
  description,
  tags = [],
  caseStudyHref,
  demoHref,
  githubHref,
  image,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch py-8 border rounded-lg border-neutral-300 px-6 md:px-12 my-8">
      <div>
        <p className="font-mono text-sm font-bold text-neutral-500">{category}</p>
        <h3 className="mt-2 text-3xl font-bold">{title}</h3>
        <p className="mt-4 text-neutral-600 leading-relaxed">{description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-sm border border-neutral-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {githubHref && (
            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-700 transition-colors text-white rounded-full text-sm font-medium"
            >
              Source code <FaGithub size={14} />
            </a>
          )}
          {demoHref && (
            <a
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--orange)] hover:bg-[#92400E] transition-colors text-white rounded-full text-sm font-medium"
            >
              Live demo <FaExternalLinkAlt size={12} />
            </a>
          )}
          {caseStudyHref && (
            <Link to={caseStudyHref} className="flex items-center gap-2 font-medium hover:text-[var(--orange)] transition-colors">
              Read case study <FaArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>

      <div className="w-full h-full min-h-64 rounded-xl bg-slate-100 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
        ) : (
          <FaRegImage size={32} className="text-neutral-400" />
        )}
      </div>
    </div>
  )
}

export default ProjectCard
