'use client'

import CardMovie from '@/components/card-movie'
import Dropdown from '@/components/dropdown'
import axios from 'axios'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiStar } from 'react-icons/hi'

const Home = () => {
  const [value, setValue] = useState('title.asc')
  const [movies, setMovies] = useState<any>()

  const getMovies = () => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?page=1&sort_by=${value}&vote_average.gte=5&vote_count.gte=100`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmRlNWZiMTZiYTQ1MzlhMDdjYmUyY2JkOTY0NTgzOSIsInN1YiI6IjY1NDFlNGYwMTM2NTQ1MDBjNjQyZDUwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0E-islOT_MecgqFEO-6UsDLTmHiA8LUGqNG45j3qWVo'
      }
    })
      .then((results: any) => {
        setMovies(results.data.results)
      })
  }

  useEffect(() => {
    getMovies()
  }, [value])

  return (
    <main className='container mx-auto w-full xl:w-8/12 px-4 py-8'>
      <div>
        Slider
      </div>

      <div className=''>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl lg:text-4xl font-bold'>Discover Movies</h1>
          <Dropdown
            value={value}
            setValue={setValue}
          />
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 py-10'>
        {
          movies?.map((item: any, index: number) => (
            <Link key={index} href={`/movie/${item.id}`}>
              <CardMovie
                title={item.title}
                poster_path={item.poster_path}
                release_date={item.release_date}
                vote_average={item.vote_average}
              />
            </Link>
          ))
        }
      </div>
    </main>
  )
}

export default Home
