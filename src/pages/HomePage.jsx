import Cover from '../components/Cover'
import About from '../components/About'
import Companies from '../components/Companies'

export default function HomePage() {
  return (
    <main>
      <Cover />
      <About />
      <Companies />
      {/* TODO: Add work grid section */}
    </main>
  )
}
