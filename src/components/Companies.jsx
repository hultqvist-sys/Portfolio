import { useState } from 'react'
import { motion } from 'framer-motion'
import { companies } from '../data/companies'
import CompanyCard from './CompanyCard'

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

  return (
    <section className="w-full px-6 py-24">
      <motion.div
        className="w-full max-w-[1610px] mx-auto flex flex-col gap-12"
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
            On mobile the row stacks and cards size to their content. */}
        <div className="flex flex-col lg:flex-row gap-4 lg:h-[600px]">
          {companies.map((company, index) => (
            <CompanyCard
              key={company.id}
              company={company}
              isActive={activeIndex === index}
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
