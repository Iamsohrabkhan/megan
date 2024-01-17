import Link from "next/link"

const AnimatedLink = ({tittle,href,setOpen,path}) => {

  return (
    <Link 
    className={`text-3xl uppercase px-8 ${path===href?"text-orange-500 dark:text-orange-600":"text-black dark:text-white "}`}
    onClick={()=>{setOpen(false)}}
    href={href}>
    {tittle}
    </Link>
  )
}

export default AnimatedLink