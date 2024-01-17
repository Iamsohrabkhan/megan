import Hero from "./home/hero"
import Faq from "./home/faq"
export default function Home() {
  return (
   <main>
    <Hero/>
    <section className="container mx-auto max-w-4xl mt-10"> 
    <h2>Frequently Asked Questions (FAQ):</h2>
    <Faq/>
    </section>
   </main>
  )
}
