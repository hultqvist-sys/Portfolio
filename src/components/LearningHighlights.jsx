import { motion } from 'framer-motion'
import RevealLottie from './RevealLottie'
import RevealVideo from './RevealVideo'
import SectionHeading from './SectionHeading'

// Each animated asset carries its own background, so the panel aspect comes
// straight from the source file rather than from a wrapper we guess at.
//   Mix_and_match.lottie            1104 x 820.28  (matches Figma 296:10513)
//   Designed_for_all_devices.lottie 1104 x 603.43  (matches Figma 297:10323)
//   component_board.mp4             1104 x 742     (matches Figma 317:19058)
const PANEL = 'w-full rounded-2xl overflow-hidden bg-panel-warm'

// The component board panel is #F5EEE5, a shade off the other two.
const PANEL_ALT = 'w-full rounded-2xl overflow-hidden bg-panel-warm-alt'

// Captions are held to a 824px measure for readability rather than running the
// full 1104 grid. No mx-auto — they stay flush with the left grid edge.
const CAPTION = 'w-full max-w-[824px] font-body text-body-base font-normal text-[#292A2E]'

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function LearningHighlights() {
  return (
    <>
      {/* Section intro */}
      <motion.div className="w-full flex flex-col gap-4" {...fadeUp}>
        <h2 className="font-display font-normal text-h1 text-black">
          Atlassian Learning highlights.
        </h2>
        <p className="font-body text-body-reg font-normal text-[#292A2E]">
          A selection of key projects and contributions across my time on the
          Atlassian Learning team — from platform migrations and design systems
          to product UX improvements and cross-team collaboration.
        </p>
      </motion.div>

      {/* 01 — modular component system */}
      <section className="w-full flex flex-col gap-6">
        <SectionHeading
          title={['01.', 'Designing A modular Component System for Atlassian Learning.']}
          body={[
            'Working with a team of learning designers and engineers, I led, designed and helped implement a scalable, modular component system — enabling learning designers to independently create and publish learning resources.',
            'Before it existed, every new page required design and engineering support creating bottlenecks and slowing content delivery. By providing a flexible, accessible toolkit of standardized components I removed that dependency, getting learning resources to learners faster.',
          ]}
        />

        <RevealLottie
          src="/assets/lottie/Mix_and_match.lottie"
          className={`${PANEL} aspect-[1104/820.28]`}
          ariaLabel="Learning designers assembling a page from pre-built components"
        />

        <div className="w-full flex flex-col gap-4">
          <h4 className="font-body text-body-reg font-semibold text-[#292A2E]">
            How it works
          </h4>
          <p className={CAPTION}>
            Content authors build a page by selecting and arranging from a
            library of pre-built UI components — such as heroes, rich text
            blocks, and CTAs. Each component has defined fields and constraints
            that keep content on-brand and accessible without requiring design
            oversight. Once assembled, the page can be published directly, with
            no engineering or design involvement needed.
          </p>
        </div>
      </section>

      {/* Responsive across devices */}
      <section className="w-full flex flex-col gap-6">
        <RevealLottie
          src="/assets/lottie/Designed_for_all_devices.lottie"
          className={`${PANEL} aspect-[1104/603.43]`}
          ariaLabel="The component system rendered across desktop, tablet and mobile"
        />
        <p className={CAPTION}>
          Every component has been designed to be accessible, on-brand, flexible
          and responsive across desktop, tablet and mobile.
        </p>
      </section>

      {/* Component board */}
      <section className="w-full flex flex-col gap-6">
        {/* Was an animated SVG export, now an MP4: 1.7MB instead of 6.0MB, and
            sharper because the source isn't fighting 98 blur filters that had to
            be rasterised every frame. 1104x742 matches the Figma frame (the SVG
            artboard was padded to 2000x1491 for off-stage motion, which the
            video doesn't need) — so the panel is now the designed height.

            Caveat: 1104 wide is 1:1 at DPR 1 but a 2x upscale on retina. A
            2208x1484 re-export would make it pixel-exact. */}
        <RevealVideo
          src="/assets/video/component_board.mp4"
          className={`${PANEL_ALT} aspect-[1104/742]`}
          ariaLabel="The delivered component library laid out as a board"
        />
        <p className={CAPTION}>
          The initial library delivery was scoped around Atlassian's most common
          webpage use cases, resulting in a suite of 20+ purpose-built
          components.
        </p>
      </section>
    </>
  )
}
