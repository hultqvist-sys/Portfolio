import { useLazyLoadMedia } from '../hooks/useLazyLoadMedia'

export default function LazyVideo({
  src,
  poster,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  alt = 'Video',
}) {
  const { ref, isInView } = useLazyLoadMedia()

  return (
    <div ref={ref} className={className}>
      {isInView ? (
        <video
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload="metadata"
          poster={poster}
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="w-full h-full bg-gray-200"
          style={{
            backgroundImage: `url(${poster})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
    </div>
  )
}
