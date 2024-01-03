'use client';

import { getUrlId } from '@/functions/getUrlId';
import getValues from '@/functions/getValues';
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
    <div className='flex flex-col items-center p-10 gap-10'>
      <h1 className='text-[40px]'>Livro</h1>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
        Card
      </div>
    </div>
  )
}