import { useEffect, useRef, useState } from 'react'
import { FaTimes, FaSearchPlus, FaSearchMinus } from 'react-icons/fa'
import { useLightbox } from '../context/LightboxContext.jsx'

const MIN_SCALE = 1
const MAX_SCALE = 4

function Lightbox() {
  const { image, closeLightbox } = useLightbox()
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    setScale(1)
    setOffset({ x: 0, y: 0 })
  }, [image])

  useEffect(() => {
    if (!image) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [image, closeLightbox])

  const clampScale = (value) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, value))

  const zoomBy = (delta) => {
    setScale((prev) => {
      const next = clampScale(prev + delta)
      if (next === MIN_SCALE) setOffset({ x: 0, y: 0 })
      return next
    })
  }

  // React's onWheel is a passive listener, so preventDefault() there can't stop
  // background scroll — attach a native, non-passive listener instead.
  useEffect(() => {
    const el = imgRef.current
    if (!el) return undefined
    const onWheelNative = (e) => {
      e.preventDefault()
      zoomBy(e.deltaY < 0 ? 0.3 : -0.3)
    }
    el.addEventListener('wheel', onWheelNative, { passive: false })
    return () => el.removeEventListener('wheel', onWheelNative)
  }, [image])

  if (!image) return null

  const handleDoubleClick = () => {
    if (scale > MIN_SCALE) {
      setScale(MIN_SCALE)
      setOffset({ x: 0, y: 0 })
    } else {
      setScale(2.5)
    }
  }

  const handlePointerDown = (e) => {
    if (scale === MIN_SCALE) return
    dragStart.current = { startX: e.clientX, startY: e.clientY, originX: offset.x, originY: offset.y }
    setIsDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (!dragStart.current) return
    const { startX, startY, originX, originY } = dragStart.current
    setOffset({ x: originX + (e.clientX - startX), y: originY + (e.clientY - startY) })
  }

  const handlePointerUp = () => {
    dragStart.current = null
    setIsDragging(false)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={closeLightbox}
    >
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); zoomBy(-0.5) }}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Zoom out"
        >
          <FaSearchMinus size={16} />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); zoomBy(0.5) }}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Zoom in"
        >
          <FaSearchPlus size={16} />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); closeLightbox() }}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close"
        >
          <FaTimes size={16} />
        </button>
      </div>

      <div className="max-w-[90vw] max-h-[80vh] flex items-center justify-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <img
          ref={imgRef}
          src={image.src}
          alt={image.caption || ''}
          onDoubleClick={handleDoubleClick}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          draggable={false}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            cursor: scale > MIN_SCALE ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
          }}
          className="max-w-[90vw] max-h-[80vh] object-contain select-none"
        />
      </div>

      {image.caption && (
        <p className="mt-4 text-sm text-neutral-300" onClick={(e) => e.stopPropagation()}>
          {image.caption}
        </p>
      )}
    </div>
  )
}

export default Lightbox
