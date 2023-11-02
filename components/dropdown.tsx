'use client'

import { useState } from 'react'
import { HiOutlineChevronDown, HiCheck } from 'react-icons/hi'

interface Props {
  value: string
  setValue: Function
}

const Dropdown = ({ value, setValue }: Props) => {
  const [show, setShow] = useState(false)

  const handleSortBy = (data: string) => {
    setValue(data)
    setShow(false)
  }

  const handleTitleSort = (data: string) => {
    switch (data) {
      case 'title.asc':
        return 'A - Z'
      case 'title.desc':
        return 'Z - A'
      case 'release_date.desc':
        return 'Newest'
      case 'release_date.asc':
        return 'Oldest'
      case 'vote_average.desc':
        return 'Rating'
    }
  }

  return (
    <div className='relative w-44'>
      <div onClick={() => setShow(!show)} className='px-4 py-2 cursor-pointer bg-gray-600 text-white rounded-lg flex items-center justify-between'>
        <div>
          <span className='text-xs block text-gray-200'>Sort By</span>
          <span className='block capitalize'>{ handleTitleSort(value) }</span>
        </div>
        <HiOutlineChevronDown className='h-5 w-5' />
      </div>

      {
        show && <ul className='absolute w-44 text-sm bg-gray-600 rounded-lg mt-2 p-2 z-20'>
          <li className='px-1 py-0.5 rounded-md text-white hover:bg-gray-200 hover:text-black cursor-pointer flex items-center justify-between'
            onClick={() => handleSortBy('title.asc')}
          >
            <span className='block'>A - Z</span>
            { value === 'title.asc' && <HiCheck className='h-5 w-5' /> }
          </li>
          <li className='px-1 py-0.5 rounded-md text-white hover:bg-gray-200 hover:text-black cursor-pointer flex items-center justify-between'
            onClick={() => handleSortBy('title.desc')}
          >
            <span className='block'>Z - A</span>
            { value === 'title.desc' && <HiCheck className='h-5 w-5' /> }
          </li>
          <li className='px-1 py-0.5 rounded-md text-white hover:bg-gray-200 hover:text-black cursor-pointer flex items-center justify-between'
            onClick={() => handleSortBy('release_date.desc')}
          >
            <span className='block'>Newest</span>
            { value === 'release_date.desc' && <HiCheck className='h-5 w-5' /> }
          </li>
          <li className='px-1 py-0.5 rounded-md text-white hover:bg-gray-200 hover:text-black cursor-pointer flex items-center justify-between'
            onClick={() => handleSortBy('release_date.asc')}
          >
            <span className='block'>Oldest</span>
            { value === 'release_date.asc' && <HiCheck className='h-5 w-5' /> }
          </li>
          <li className='px-1 py-0.5 rounded-md text-white hover:bg-gray-200 hover:text-black cursor-pointer flex items-center justify-between'
            onClick={() => handleSortBy('vote_average.desc')}
          >
            <span className='block'>Rating</span>
            { value === 'vote_average.desc' && <HiCheck className='h-5 w-5' /> }
          </li>
        </ul>
      }
    </div>
  )
}

export default Dropdown
