import { useLightbox } from '../context/LightboxContext.jsx'

function ZoomableImage({ src, alt, className = '' }) {
  const { openLightbox } = useLightbox()

  return (
    <img
      src={src}
      alt={alt}
      onClick={() => openLightbox(src, alt)}
      className={`cursor-zoom-in ${className}`}
    />
  )
}

export default ZoomableImage
