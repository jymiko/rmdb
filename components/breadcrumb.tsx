import Link from "next/link"
import { HiChevronRight } from "react-icons/hi"

const Breadcrumb = ({ title }: { title: string }) => {
  return (
    <div className='flex items-center space-x-2'>
      <Link href='/'>
        <span className='text-indigo-600 text-xl font-bold'>Discover Movies</span>
      </Link>

      <HiChevronRight className='h-5 w-5' />

      <span className='text-xl font-bold'>{ title }</span>
    </div>
  )
}

export default Breadcrumb
