import { Button } from "@/components/ui/button"
import HeroImages from "./heroImages"

const Hero=() => {
    return (
        <>       
          <section className="min-h-screen container mx-auto flex flex-col items-center mt-32">
            <h1 className="bg-[#7C96A6]  w-fit text-muted px-2 py-1 rounded-lg">Welcome to Megan Lacefield&apos;s Corner</h1>
            <h2 className="text-center mt-4">Embrace the journey of love, inspiration, <br className="hidden md:block" /> and empowerment.</h2>
            <p className="max-w-3xl text-center">With a heart devoted to serving and sharing wisdom, Megan Lacefield brings you a unique blend of truth, life experiences, and divine revelation. Explore the beauty of marriage, family, and God&apos;s grace through Megan&apos;s lens.</p>
            <Button variants="primary" className="my-2">Join the Journey</Button>
            <HeroImages/>
          </section>
        </>
    )
}
export default Hero