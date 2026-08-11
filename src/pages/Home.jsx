import { FaAngleDoubleDown } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard.jsx'
import ExperienceItem from '../components/ExperienceItem.jsx'
import ToolBadge from '../components/ToolBadge.jsx'
import tools from '../data/tools.js'
import projects from '../data/projects.js'
import myPicture from '../assets/my_picture.jpg'
import './Home.css'

function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 px-16 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold">Hi! I'm Kyan!</h1>
          <div className="my-4 space-y-1 text-lg text-neutral-600">
            <h4>4th year BS Computer Science</h4>
            <h4>University of Santo Tomas</h4>
            <h4>Specializing in <span className="font-bold" style={{ color: '#16A34A' }}>Data Science</span></h4>
          </div>
          <p className="font-semibold" style={{ color: 'var(--orange)' }}>
            Business-minded, technically hands-on
          </p>
          <a href="#select-work" className="inline-block my-4 px-4 py-2 bg-[var(--orange)] hover:bg-[#92400E] transition-colors text-white rounded-lg">
            See work below <FaAngleDoubleDown size={20} className="inline-block ml-2" />
          </a>
        </div>
        <img
          src={myPicture}
          alt="Kyan"
          className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover shrink-0"
        />
      </div>

      <hr className="border-t border-neutral-300 mx-32 my-8" />

      {/* Select Work Section */}

      <div id="select-work" className="pt-16 pb-4 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold">Select Work</h1>

        {projects.filter((project) => !project.hidden).map((project) => (
          <ProjectCard
            key={project.slug}
            category={project.category}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            caseStudyHref={`/case-study/${project.slug}`}
            demoHref={project.demoHref}
            githubHref={project.githubHref}
          />
        ))}
      </div>

      <hr className="border-t border-neutral-300 mx-32 my-8" />

      {/* Experience Section */}

      <div className="pt-16 pb-4 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold">Experience</h1>

        <div className="my-8">
          <ExperienceItem
            title="Digital Product Intern"
            company="AIA Philippines"
            description="Analyzed 2.8M+ rows of customer journey data to surface UX drop-off points, redesigned priority screens in Figma, and presented findings to the CTOO for implementation."
            dateRange="Apr 2026 - Aug 2026"
          />
          <ExperienceItem
            title="Software Engineer Intern"
            company="Elinnov Technologies Inc."
            description="Defined feature requirements with HR stakeholders and shipped full-stack features (React, .NET, PostgreSQL) for a Job Application System, from wireframes to production."
            dateRange="Sep 2025 - Jan 2026"
          />
        </div>
      </div>

      <hr className="border-t border-neutral-300 mx-32 my-8" />

      {/* Tools & Stack Section */}

      <div className="pt-8 pb-4 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold">Tools & Stack</h1>

        <div className="my-8 flex flex-wrap gap-3">
          {tools.map((tool) => (
            <ToolBadge key={tool.label} icon={tool.icon} label={tool.label} color={tool.color} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
