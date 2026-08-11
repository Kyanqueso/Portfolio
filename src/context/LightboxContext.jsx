import { createContext, useCallback, useContext, useState } from 'react'

const LightboxContext = createContext(null)

export function LightboxProvider({ children }) {
  const [image, setImage] = useState(null)

  const openLightbox = useCallback((src, caption) => {
    setImage({ src, caption })
  }, [])

  const closeLightbox = useCallback(() => {
    setImage(null)
  }, [])

  return (
    <LightboxContext.Provider value={{ image, openLightbox, closeLightbox }}>
      {children}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used within a LightboxProvider')
  return ctx
}
