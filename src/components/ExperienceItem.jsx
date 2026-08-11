function ExperienceItem({ title, company, description, dateRange }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      <span className="absolute left-[3px] top-2 bottom-0 w-px bg-neutral-300" />
      <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-neutral-800" />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="font-mono text-sm tracking-widest text-neutral-500">{dateRange}</p>
      </div>
      <p className="mt-1 text-neutral-700">{company}</p>
      <p className="mt-3 text-neutral-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default ExperienceItem
