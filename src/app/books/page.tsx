'use client';

import Loading from '@/components/atoms/loading';
import Card from '@/components/molecules/card';
import getValues from '@/functions/getValues';
import { useEffect, useState } from 'react'

export default function Books() {
  const [books, setBooks] = useState<any[]>();

  useEffect(() => {
    getBooksFn();
  }, [])

  async function getBooksFn() {
    const requestBooks = await getValues<any>('books', '', '');

    setBooks(requestBooks);
  }

  function formatDate(date: string): string {
    return date.split('-').reverse().join('/');
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10'>
      <h1 className='text-[40px]'>Livros</h1>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
        {!!books?.length ? (
          books?.map((book, i) => (
            <Card title={book.attributes.title} image={book.attributes.cover} firstInfoTitle='Autor' firstInfo={book.attributes.author} secondInfoTitle='Data de lançamento' secondInfo={formatDate(book.attributes.release_date)} key={i} />
          ))
        ): (
          <Loading />
        )}
      </div>
    </div>
  )
}