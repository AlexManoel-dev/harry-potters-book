'use client';

import { getUrlId } from '@/functions/getUrlId';
import getValues from '@/functions/getValues';
import { IMovie } from '@/interfaces/IMovie';
import { useEffect, useState } from 'react';

export default function Movie() {
  const [movie, setMovie] = useState<IMovie>();
  
  useEffect(() => {
    getMovieFn();
  }, [])
  
  async function getMovieFn() {
    const id = getUrlId();

    const response = await getValues<IMovie>('movies', id, '', '');
    
    setMovie(response);
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10'>
      <h1 className='text-[40px]'>Filme</h1>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
        Card
      </div>
    </div>
  )
}