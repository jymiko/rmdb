'use client'

import Breadcrumb from '@/components/breadcrumb'
import { Duration } from '@/helpers/duration'
import axios from 'axios'
import moment from 'moment'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { HiOutlineStar } from 'react-icons/hi'

const PageDetail = () => {
  const param = useParams()
  const [data, setData] = useState<any>()

  const getMovie = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${param.id}?append_to_response=credits&language=en-US`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmRlNWZiMTZiYTQ1MzlhMDdjYmUyY2JkOTY0NTgzOSIsInN1YiI6IjY1NDFlNGYwMTM2NTQ1MDBjNjQyZDUwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0E-islOT_MecgqFEO-6UsDLTmHiA8LUGqNG45j3qWVo'
      }
    })
      .then((results: any) => {
        setData(results.data)
      })
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div className='container mx-auto w-full xl:w-8/12 px-4 py-8'>
      <Breadcrumb title={data?.title} />
      <div className='relative'>
        <Image
          className='opacity-20 h-[480px] w-full object-cover rounded-2xl mt-6'
          src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
          alt={data?.title}
          width={1024}
          height={480}
        />

        <div className='md:absolute -mt-[600px] md:mt-0 top-0 p-10 w-full xl:w-[1024px]'>
          <div className='md:flex md:items-center xl:items-start md:space-x-10'>
            <Image
              className='rounded-2xl h-full w-full xl:h-[400px] lg:w-auto'
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              alt={data?.title}
              height={256}
              width={184}
            />

            <div className='mt-8 md:mt-0'>
              <span className='text-2xl font-bold flex items-center'>
                { data?.title } ({ moment(data?.release_date).format('YYYY') })
                <div className='bg-gray-600 rounded-lg p-1 ml-4'>
                  <HiOutlineStar className='h-4 w-4 text-white' />
                </div>
              </span>

              <div className='flex flex-wrap items-center space-x-2'>
                <span>{ moment(data?.release_date).format('DD/MM/YYYY') }</span>
                <div className='bg-white w-1 h-1 rounded-full' />
                <span>
                  {
                    data?.genres.map((item: any, index: number) => {
                      return item.name + (data?.genres.length !== index + 1 ? ', ' : '')
                    })
                  }
                </span>
                <div className='bg-white w-1 h-1 rounded-full' />
                <span>{ Duration(data?.runtime) }</span>
              </div>

              <div className='mt-8'>
                <span className='block font-bold text-xl'>Overview</span>
                <p className='text-justify mt-2'>{ data?.overview }</p>
              </div>

              <div className='mt-8 grid'>
                <span className='block font-bold text-xl'>
                  {
                    data?.credits.crew.filter((item: any) => item.job === 'Director').map((item2: any) => (
                      item2.name
                    ))
                  }
                </span>
                <span className='block'>Director</span>
              </div>
            </div>
          </div>
        </div>

        <div className='my-8'>
          <span className='text-2xl font-bold'>
            Cast
          </span>

          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6'>
            {
              data?.credits.cast.map((item: any, index: number) => (
                <div key={index}>
                  <Image
                    className='rounded-2xl w-48 h-48 object-cover'
                    src={item.profile_path !== null ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : 'https://rmdb-test.vercel.app/no_image.jpg'}
                    alt={item.name}
                    width={200}
                    height={200}
                  />

                  <div className='my-2'>
                    { item.name }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageDetail
