'use client';

import Loading from '@/components/atoms/loading';
import Card from '@/components/molecules/card';
import getValues from '@/functions/getValues';
import { formatDate } from '@/helpers/dateFormater';
import { IMovie } from '@/interfaces/IMovie';
import { useEffect, useState } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState<IMovie[]>();

  useEffect(() => {
    getMoviesFn();
  }, [])

  async function getMoviesFn() {
    const requestMovies = await getValues<IMovie[]>('movies');

    setMovies(requestMovies);
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10 bg-[--sixty-color] text-[--font-color]'>
      <h1 className='text-[40px]'>Filmes</h1>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
        {!!movies?.length ? (
          movies?.map((movie, i) => (
            <Card id={movie.id} route='movies' title={movie.attributes.title} image={movie.attributes.poster} firstInfoTitle='Tempo de filme' firstInfo={movie.attributes.running_time} secondInfoTitle='Data de lançamento' secondInfo={formatDate(movie.attributes.release_date as string)} key={i} />
          ))
        ): (
          <Loading />
        )}
      </div>
    </div>
  )
}