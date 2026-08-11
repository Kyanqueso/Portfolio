function ToolBadge({ icon: Icon, label, color }) {
  return (
    <span className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg text-sm font-medium">
      <Icon size={18} style={{ color }} />
      {label}
    </span>
  )
}

export default ToolBadge
