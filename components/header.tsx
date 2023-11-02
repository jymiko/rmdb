import Link from 'next/link'
import { BiMoviePlay, BiSearch } from 'react-icons/bi'

const Header = () => {
  return (
    <nav className='border-b border-gray-400/40 shadow-md'>
      <div className='container mx-auto w-full xl:w-8/12 px-8 py-4 flex space-x-4 md:space-x-0 justify-between items-center'>
        <Link href='/'>
          <div className='flex space-x-2 items-center'>
            <BiMoviePlay className='w-10 h-auto' />
            <span className='block font-bold'>RMDB</span>
          </div>
        </Link>
        <div className='relative'>
          <BiSearch className='w-5 h-5 absolute left-2 top-3 text-black' />
          <input
            className='w-full md:w-56 pl-8 pr-4 py-2 outline-none bg-gray-200 border text-black border-gray-400 rounded-md'
            placeholder='Search movies'
          />
        </div>
        <label className='relative inline-flex items-center cursor-pointer'>
          <input type='checkbox' value='' className='sr-only peer'/>
          <div className='w-16 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-indigo-600'/>
        </label>
      </div>
    </nav>
  )
}

export default Header
