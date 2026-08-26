import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

// Figma: collapsed 309px, expanded 618px, siblings shrink to 232px.
// 618 / 232 gives the exact flex-grow ratio that reproduces those widths.
const EXPANDED_GROW = 618 / 232
const EASE = [0.22, 1, 0.36, 1]

export default function CompanyCard({
  company,
  isActive,
  onActivate,
  onDeactivate,
  onToggle,
}) {
  const {
    name,
    logo,
    shortBlurb,
    longBlurb,
    expandedImage,
    placeholderColor,
  } = company

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg cursor-pointer flex flex-col justify-end gap-4 p-6 min-h-[220px] lg:min-h-0 basis-auto lg:basis-0 min-w-0"
      style={{
        border: isActive ? '2px solid transparent' : '2px solid rgba(11, 18, 14, 0.14)',
      }}
      animate={{ flexGrow: isActive ? EXPANDED_GROW : 1 }}
      transition={{ duration: 0.5, ease: EASE }}
      onHoverStart={onActivate}
      onHoverEnd={onDeactivate}
      onClick={onToggle}
      onFocus={onActivate}
      onBlur={onDeactivate}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
      aria-label={`${name} — ${isActive ? longBlurb : shortBlurb}`}
    >
      {/* Expanded background: real image if supplied, flat colour if not */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {expandedImage ? (
              <img
                src={expandedImage}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{ backgroundColor: placeholderColor }}
              />
            )}
            {/* Legibility scrim — Figma: black to 30%, transparent by the top */}
            <div
              className="absolute inset-x-0 bottom-0 h-[85%]"
              style={{
                background:
                  'linear-gradient(to top, #000 0%, #000 30%, transparent 100%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Plus rotates into a cross */}
      <motion.div
        className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
        animate={{ rotate: isActive ? 45 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <Plus
          size={32}
          strokeWidth={2}
          color={isActive ? '#FFFFFF' : '#4D8CED'}
        />
      </motion.div>

      {/* Content sits above the background, pinned to the bottom */}
      <div className="relative flex flex-col gap-4 min-w-0">
        <img src={logo} alt={`${name} logo`} className="w-[46px] h-[46px] object-contain" />

        <div className="flex flex-col gap-2 min-w-0">
          {/* Always one line — ellipsis when the card is too narrow */}
          <h3
            className="font-display font-normal text-h2 truncate"
            style={{ color: isActive ? '#FFFFFF' : '#000000' }}
            title={name}
          >
            {name}
          </h3>

          {/* Keyed so the element remounts and fades on state change, which
              keeps the block's height matched to whichever copy is showing */}
          <motion.p
            key={isActive ? 'long' : 'short'}
            className={
              isActive
                ? 'font-body text-body-md font-semibold'
                : 'font-body text-body-md font-normal line-clamp-2'
            }
            style={{ color: isActive ? '#FFFFFF' : '#292A2E' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {isActive ? longBlurb : shortBlurb}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}
