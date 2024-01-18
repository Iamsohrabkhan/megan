import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

const BlogHeading = () => {
  return (
    <>
    <div className="flex justify-around items-center flex-col md:flex-row space-y-4 py-1 container mx-auto ">
    <p className="leading-4 italic">
      Branding expertise for the <br className='none md:block' /> creative entrepreneur.
    </p>
    <h2 className='text-6xl -order-1 md:order-none mb-8 md:mb-0 md:text-4xl  '>the blog</h2>
    <div className="serch flex relative justify-center items-center w-64">

      <Input type="name" placeholder="Search the blog" className="w-full p-3 rounded-lg" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6  absolute top-1/2 -translate-y-1/2 right-3 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  </div>
  <div className="container max-w-screen-xl">
    <Separator className="my-4" />
  </div>
    </>
  )
}

export default BlogHeading