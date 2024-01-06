'use client';

import Loading from '@/components/atoms/loading';
import SpecificCard from '@/components/molecules/specificCard';
import { getUrlId } from '@/functions/getUrlId';
import getValues from '@/functions/getValues';
import { formatDate } from '@/helpers/dateFormater';
import { IBook } from '@/interfaces/IBook';
import { useEffect, useState } from 'react';

export default function Book() {
  const [book, setBook] = useState<IBook>();
  
  useEffect(() => {
    getBookFn();
  }, [])
  
  async function getBookFn() {
    const id = getUrlId();

    const response = await getValues<IBook>('books', id, '', '');
    
    setBook(response);
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10 bg-[--sixty-color] text-[--font-color]'>
      <h1 className='text-[40px]'>Livro</h1>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
        {!!book ? (
          <SpecificCard title={book.attributes.title} image={book.attributes.cover} firstInfoTitle='Autor' firstInfo={book.attributes.author} secondInfoTitle='Data de lançamento' secondInfo={formatDate(book.attributes.release_date as string)} thirdInfoTitle='Quantidade de páginas' thirdInfo={book.attributes.pages} fourthInfoTitle='Dedicatória' fourthInfo={book.attributes.dedication} />
        ): (
          <Loading />
        )}
      </div>
    </div>
  )
}