import { SiFigma } from 'react-icons/si'
import ZoomableImage from './ZoomableImage.jsx'

const IMAGE_GRID_COLS = {
  1: 'grid-cols-1 max-w-md mx-auto',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-3',
  4: 'grid-cols-2',
}

function CaseStudyStep({ icon, title, description, images = [], imageJoiner, figmaHref, imageNote, showConnector = true }) {
  const gridCols = IMAGE_GRID_COLS[Math.min(images.length, 4)]
  const useJoinerLayout = imageJoiner && images.length > 1

  return (
    <div className="flex flex-col items-center text-center">
      {showConnector && (
        <div className="flex flex-col items-center py-6">
          <span className="w-3 h-3 rounded-full bg-neutral-800" />
          <span className="w-px h-16 bg-neutral-300" />
        </div>
      )}

      <div className="flex items-center gap-3">
        <span className="text-2xl leading-none">{icon}</span>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="mt-3 max-w-md text-neutral-600 leading-relaxed">{description}</p>

      {figmaHref && (
        <a
          href={figmaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 px-4 py-2 bg-[#A259FF] hover:bg-[#8247E5] transition-colors text-white rounded-full text-sm font-medium"
        >
          View in Figma <SiFigma size={14} />
        </a>
      )}

      {images.length > 0 && useJoinerLayout && (
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          {images.map((img, i) => (
            <div key={img.caption} className="flex items-center gap-6">
              <figure className="w-56">
                <ZoomableImage
                  src={img.src}
                  alt={img.caption}
                  className="w-full aspect-video object-cover rounded-xl border border-neutral-200"
                />
                <figcaption className="mt-2 text-sm text-neutral-500">{img.caption}</figcaption>
              </figure>
              {i < images.length - 1 && (
                <span className="text-3xl font-bold text-neutral-400">{imageJoiner}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {images.length > 0 && !useJoinerLayout && (
        <div className={`mt-8 grid ${gridCols} gap-6 w-full`}>
          {images.map((img) => (
            <figure key={img.caption}>
              <ZoomableImage
                src={img.src}
                alt={img.caption}
                className="w-full aspect-video object-cover rounded-xl border border-neutral-200"
              />
              <figcaption className="mt-2 text-sm text-neutral-500">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {images.length > 0 && imageNote && (
        <p className="mt-4 text-xs text-neutral-400 italic max-w-md">{imageNote}</p>
      )}
    </div>
  )
}

export default CaseStudyStep
