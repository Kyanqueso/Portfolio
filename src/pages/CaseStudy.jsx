import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaRegImage } from 'react-icons/fa'
import projects from '../data/projects.js'
import CaseStudyStep from '../components/CaseStudyStep.jsx'
import ZoomableImage from '../components/ZoomableImage.jsx'

function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="px-4 py-24 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold">Case study not found</h1>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 font-medium">
          <FaArrowLeft size={14} /> Back home
        </Link>
      </div>
    )
  }

  return (
    <div className="px-4 py-16 max-w-3xl mx-auto">
      <Link to="/" className="flex items-center gap-2 font-medium text-sm">
        <FaArrowLeft size={14} /> Back home
      </Link>

      <p className="mt-8 font-mono text-sm font-bold text-neutral-500">{project.category}</p>
      <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">{project.title}</h1>

      <div className="mt-4 flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <span key={tag} className="px-4 py-1.5 text-sm border border-neutral-300 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {project.image ? (
        <ZoomableImage
          src={project.image}
          alt={project.title}
          className="mt-8 w-full h-auto rounded-xl"
        />
      ) : (
        <div className="mt-8 aspect-video w-full rounded-xl bg-slate-100 flex items-center justify-center">
          <FaRegImage size={32} className="text-neutral-400" />
        </div>
      )}

      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {project.githubHref && (
          <a
            href={project.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-700 transition-colors text-white rounded-full text-sm font-medium"
          >
            Source code <FaGithub size={14} />
          </a>
        )}
        {project.demoHref && (
          <a
            href={project.demoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[var(--orange)] hover:bg-[#92400E] transition-colors text-white rounded-full text-sm font-medium"
          >
            Live demo <FaExternalLinkAlt size={12} />
          </a>
        )}
      </div>

      <div className="mt-4">
        {project.steps.map((step, index) => (
          <CaseStudyStep
            key={step.title}
            icon={step.icon}
            title={step.title}
            description={step.description}
            images={step.images}
            imageJoiner={step.imageJoiner}
            figmaHref={step.figmaHref}
            imageNote={step.imageNote}
            imageGridClass={step.imageGridClass}
            showConnector={index !== 0}
          />
        ))}
      </div>
    </div>
  )
}

export default CaseStudy
