import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react/webgl'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import '../lib/dotlottieWasm'

/**
 * A dotLottie animation that plays through once when it scrolls into view.
 *
 * Uses the WebGL renderer rather than the software one: these panels are 1104px
 * wide, which is a ~1932x1435 backing store on a retina display, and rasterising
 * that on the CPU every frame is what makes the playback stutter.
 *
 * Playback is left to the renderer's own frame loop, so frames land on the
 * display's refresh cadence instead of on scroll events.
 */
export default function RevealLottie({ src, className = '', ariaLabel }) {
  const { ref, shouldLoad, shouldPlay, prefersReducedMotion } = useRevealOnScroll()
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    if (!player) return

    const start = () => {
      if (prefersReducedMotion) {
        // Show the finished composition without ever animating.
        player.setFrame(Math.max(0, player.totalFrames - 1))
        return
      }
      if (shouldPlay) player.play()
    }

    // 'load' can fire before this effect runs, so check isLoaded up front too —
    // subscribing alone loses the race once the asset is warm in cache.
    if (player.isLoaded) start()

    player.addEventListener('load', start)
    return () => player.removeEventListener('load', start)
  }, [player, shouldPlay, prefersReducedMotion])

  return (
    <div ref={ref} className={className} role="img" aria-label={ariaLabel}>
      {shouldLoad && (
        <DotLottieReact
          src={src}
          autoplay={false}
          loop={false}
          dotLottieRefCallback={setPlayer}
          className="w-full h-full"
        />
      )}
    </div>
  )
}
