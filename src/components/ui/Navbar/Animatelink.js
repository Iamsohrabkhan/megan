import Link from "next/link"

const AnimatedLink = ({tittle,href,setOpen,path}) => {

  return (
    <Link 
    className={`text-3xl font-black uppercase px-8 ${path===href?"text-[#7C96A6] dark:text-[#6598b8]":"text-black dark:text-white "}`}
    onClick={()=>{setOpen(false)}}
    href={href}>
    {tittle}
    </Link>
  )
}

export default AnimatedLink