'use client';

import Loading from '@/components/atoms/loading';
import Card from '@/components/molecules/card';
import getValues from '@/functions/getValues';
import { useEffect, useState } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState<any[]>();

  useEffect(() => {
    getMoviesFn();
  }, [])

  async function getMoviesFn() {
    const requestMovies = await getValues<any>('movies');

    setMovies(requestMovies);
  }

  function formatDate(date: string): string {
    return date.split('-').reverse().join('/');
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10'>
      <h1 className='text-[40px]'>Filmes</h1>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
        {!!movies?.length ? (
          movies?.map((movie, i) => (
            <Card title={movie.attributes.title} image={movie.attributes.poster} firstInfoTitle='Tempo de filme' firstInfo={movie.attributes.running_time} secondInfoTitle='Data de lançamento' secondInfo={movie.attributes.release_date} key={i} />
          ))
        ): (
          <Loading />
        )}
      </div>
    </div>
  )
}