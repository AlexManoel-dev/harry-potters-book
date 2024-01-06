'use client';

import Loading from '@/components/atoms/loading';
import SpecificCard from '@/components/molecules/specificCard';
import { getUrlId } from '@/functions/getUrlId';
import getValues from '@/functions/getValues';
import { formatDate } from '@/helpers/dateFormater';
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
    <div className='flex flex-col items-center p-10 gap-10 bg-[--sixty-color] text-[--font-color]'>
      <h1 className='text-[40px]'>Filme</h1>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
        {!!movie ? (
          <SpecificCard title={movie.attributes.title} image={movie.attributes.poster} firstInfoTitle='Tempo de filme' firstInfo={movie.attributes.running_time} secondInfoTitle='Data de lançamento' secondInfo={formatDate(movie.attributes.release_date as string)} thirdInfoTitle='Orçamento' thirdInfo={movie.attributes.budget} fourthInfoTitle='Bilheteria' fourthInfo={movie.attributes.box_office} />
        ): (
          <Loading />
        )}
      </div>
    </div>
  )
}