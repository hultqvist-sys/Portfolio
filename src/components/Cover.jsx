import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Individual blocks slide in from their column's outer edge
const fromLeftVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const fromRightVariants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const fromBelowVariants = {
  hidden: { opacity: 0, y: 64 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

// Columns don't move themselves — they only time their children's cascade
const leftColumnVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.2, staggerChildren: 0.15 } },
}

const rightColumnVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.35, staggerChildren: 0.15 } },
}

// Children set their own timing, so this only gates hidden -> visible
const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
}

export default function Cover() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{
        background: 'linear-gradient(171deg, #FCFAF8 1.51%, #F9F6F0 96.74%)',
      }}
    >
      <motion.div
        className="w-full max-w-7xl flex flex-col gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section - Title & Subtitle */}
        <motion.div
          className="flex flex-col items-center gap-2"
          variants={itemVariants}
        >
          <motion.img
            src="/assets/images/logo-real.svg"
            alt="Logo"
            className="w-16 h-16 mb-4"
            variants={imageVariants}
          />
          <h1
            className="font-display text-display text-center"
            style={{ color: '#292A2E' }}
          >
            Marcus Hultqvist
          </h1>
          <p
            className="font-body text-body-lg text-center"
            style={{ color: '#000000' }}
          >
            <span style={{ color: '#AE2E24' }}>Product builder</span> based in Austin, TX
          </p>
        </motion.div>

        {/* Main Content - 3 Column Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start"
          variants={contentVariants}
        >
          {/* Left Column */}
          <motion.div className="flex flex-col gap-14" variants={leftColumnVariants}>
            {/* About Me */}
            <motion.div className="flex flex-col gap-2" variants={fromLeftVariants}>
              <h3
                className="font-display text-h3 uppercase tracking-widest"
                style={{ color: '#1558BC' }}
              >
                About me
              </h3>
              <p
                className="font-body text-body-reg font-normal leading-relaxed"
                style={{ color: '#292A2E' }}
              >
                Hi, I'm Marcus! I'm an Australian designer with a business marketing & industrial design background.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div className="flex flex-col gap-2" variants={fromLeftVariants}>
              <h3
                className="font-display text-h3 uppercase tracking-widest"
                style={{ color: '#1558BC' }}
              >
                Education
              </h3>
              <p
                className="font-body text-body-reg font-normal leading-relaxed"
                style={{ color: '#292A2E' }}
              >
                Bachelors in Business, Marketing<br />
                Bachelors in Design, Industrial
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div className="flex flex-col gap-2" variants={fromLeftVariants}>
              <h3
                className="font-display text-h3 uppercase tracking-widest"
                style={{ color: '#1558BC' }}
              >
                Contact
              </h3>
              <div className="flex flex-col gap-2">
                <p
                  className="font-body text-body-reg font-normal"
                  style={{ color: '#292A2E' }}
                >
                  Marcus_Hultqvist@hotmail.com
                </p>
                <p
                  className="font-body text-body-reg font-normal"
                  style={{ color: '#292A2E' }}
                >
                  +1 737 346 4358
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Center - Profile Image */}
          <motion.div
            className="flex justify-center"
            variants={fromBelowVariants}
          >
            <img
              src="/assets/images/profile.svg"
              alt="Marcus Hultqvist"
              width={350}
              height={436}
              className="w-full max-w-[401px] h-auto"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col gap-14 lg:items-end"
            variants={rightColumnVariants}
          >
            {/* Years of Experience */}
            <motion.div
              className="flex flex-col gap-2 lg:text-right"
              variants={fromRightVariants}
            >
              <h3
                className="font-display text-h3 uppercase tracking-widest"
                style={{ color: '#1558BC' }}
              >
                Years of experience
              </h3>
              <p
                className="font-body text-display text-center lg:text-right"
                style={{ color: '#292A2E', fontSize: '70px', lineHeight: '1' }}
              >
                7
              </p>
            </motion.div>

            {/* Current Employment */}
            <motion.div
              className="flex flex-col gap-2 lg:text-right"
              variants={fromRightVariants}
            >
              <h3
                className="font-display text-h3 uppercase tracking-widest"
                style={{ color: '#1558BC' }}
              >
                Current Employment
              </h3>
              <div>
                <p
                  className="font-body text-body-reg font-bold"
                  style={{ color: '#292A2E' }}
                >
                  Atlassian
                </p>
                <p
                  className="font-body text-body-reg font-normal"
                  style={{ color: '#292A2E' }}
                >
                  Design Lead - Contractor
                </p>
              </div>
            </motion.div>

            {/* Strengths */}
            <motion.div
              className="flex flex-col gap-2 lg:text-right"
              variants={fromRightVariants}
            >
              <h3
                className="font-display text-h3 uppercase tracking-widest"
                style={{ color: '#1558BC' }}
              >
                Strengths
              </h3>
              <div className="grid grid-cols-2 gap-6 lg:justify-items-end">
                <div>
                  <p
                    className="font-body text-body-reg font-normal leading-relaxed"
                    style={{ color: '#292A2E' }}
                  >
                    UI / UX design<br />
                    UX strategy<br />
                    UX research<br />
                    IA strategy
                  </p>
                </div>
                <div>
                  <p
                    className="font-body text-body-reg font-normal leading-relaxed"
                    style={{ color: '#292A2E' }}
                  >
                    Systems design<br />
                    Coded prototyping<br />
                    Interaction & Motion<br />
                    FE web design
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
