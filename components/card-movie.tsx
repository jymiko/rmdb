import moment from 'moment'
import Image from 'next/image'
import { HiStar } from 'react-icons/hi'

interface Props {
  title: string
  poster_path: string
  release_date: string
  vote_average: string
}

const CardMovie = ({ title, poster_path, release_date, vote_average }: Props) => {
  return (
    <div className='group hover:-translate-y-2 transition-all duration-300 ease-in-out'>
      <div className='relative group-hover:shadow-lg group-hover:shadow-indigo-600 rounded-2xl'>
        <Image
          className='rounded-2xl w-full'
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          height={256}
          width={184}
        />
        <div className='absolute rounded-b-2xl bg-black/50 text-white bottom-0 px-4 py-2 w-full flex items-center justify-between'>
          <span className='flex items-center bg-indigo-600 text-xs rounded-full px-2 py-1'>
            <HiStar className='w-4 h-4 mr-2' />
            { vote_average }
          </span>
          <span className='block'>{ moment(release_date).format('MM YYYY') }</span>
        </div>
      </div>
      <span className='p-2 block'>
        { title }
      </span>
    </div>
  )
}

export default CardMovie
