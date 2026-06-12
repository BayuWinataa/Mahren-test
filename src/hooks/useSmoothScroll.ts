import { useEffect } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    })

    return () => {
      lenis.destroy()
    }
  }, [])
}
