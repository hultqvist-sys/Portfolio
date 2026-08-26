import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { companies } from '../data/companies'
import CompanyCard from './CompanyCard'

/**
 * Row geometry lives here because Companies owns the flex row — the expanded
 * card's width is only derivable from the row as a whole, not from a card.
 *
 * Figma: collapsed 309, expanded 618, siblings shrink to 232. 618/232 is the
 * flex-grow ratio that reproduces those proportions at any row width.
 */
const EXPANDED_GROW = 618 / 232
const CARD_GAP = 8 // gap-2 on the row
const CARD_PADDING = 16 // p-4 inside each card

const sectionVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function Companies() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [expandedContentWidth, setExpandedContentWidth] = useState(null)
  const rowRef = useRef(null)

  /**
   * The expanded card's inner width has to be known *before* it expands, so its
   * content can be laid out at the final width instead of re-wrapping on every
   * frame of the grow animation.
   */
  useEffect(() => {
    const row = rowRef.current
    if (!row) return

    const measure = () => {
      // Below lg the row stacks and cards are already full width, so there's
      // nothing to pre-size. Reading the computed direction keeps this in sync
      // with the Tailwind breakpoint rather than duplicating it here.
      if (getComputedStyle(row).flexDirection === 'column') {
        setExpandedContentWidth(null)
        return
      }

      const count = companies.length
      const available = row.clientWidth - (count - 1) * CARD_GAP
      const expanded = (available * EXPANDED_GROW) / (EXPANDED_GROW + count - 1)
      // Sub-pixel card borders are ignored; being 1px narrow only wraps text a
      // pixel early, which is invisible.
      setExpandedContentWidth(Math.max(0, Math.round(expanded - CARD_PADDING * 2)))
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(row)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full">
      <motion.div
        className="w-full flex flex-col gap-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2
          className="font-display font-normal text-h2 max-w-[1000px]"
          style={{ color: '#292A2E' }}
        >
          Some of companies I've worked with...
        </h2>

        {/* Fixed height on desktop makes flex-grow distribute width.
            On mobile the row stacks and cards size to their content.
            Figma: section 529 tall with a 48px heading gap, so the row is 443. */}
        <div ref={rowRef} className="flex flex-col lg:flex-row gap-2 lg:h-[443px]">
          {companies.map((company, index) => (
            <CompanyCard
              key={company.id}
              company={company}
              isActive={activeIndex === index}
              expandedGrow={EXPANDED_GROW}
              expandedContentWidth={expandedContentWidth}
              onActivate={() => setActiveIndex(index)}
              onDeactivate={() => setActiveIndex(null)}
              onToggle={() =>
                setActiveIndex(current => (current === index ? null : index))
              }
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
