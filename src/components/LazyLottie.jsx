import { lazy, Suspense } from 'react'
import { useLazyLoadMedia } from '../hooks/useLazyLoadMedia'

const Lottie = lazy(() => import('lottie-react'))

export default function LazyLottieAnimation({
  animationData,
  className = '',
  autoplay = true,
  loop = true,
  speed = 1,
  placeholder = null,
}) {
  const { ref, isInView } = useLazyLoadMedia()

  return (
    <div ref={ref} className={className}>
      {isInView ? (
        <Suspense fallback={placeholder || <div className="w-full h-full bg-gray-100" />}>
          <Lottie
            animationData={animationData}
            autoplay={autoplay}
            loop={loop}
            speed={speed}
          />
        </Suspense>
      ) : (
        placeholder || <div className="w-full h-full bg-gray-100" />
      )}
    </div>
  )
}
